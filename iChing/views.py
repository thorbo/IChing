import json, datetime
from django.db.models import query
from django.http.response import JsonResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from .models import Hexagram, Fortune
from django.core.paginator import Paginator

# Create your views here.

def index(request):
    return render(request, "iChing/index.html")

def getHex(request):
    code = request.GET.get("digits")
    if len(code) == 6:
        code = "".join(['0' if digit in ['0', '1'] else '1' for digit in code])
        hexagram = Hexagram.objects.get(digits=code).serialize()
    else:
        code = int(code)
        hexagram = Hexagram.objects.get(number=code).serialize()
    return JsonResponse(hexagram, safe=False)

def hexagrams(request):
    return render(request, 'iChing/hexagrams.html')

def hexagram(request, number):
    # if len(digits) == 6:
    #     hex = Hexagram.objects.get(digits=digits).serialize()
    # else:
    #     hex = Hexagram.objects.get(number=int(digits)).serialize()
    return render(request, "iChing/hexagram.html", {
        "number": number
    })

@csrf_exempt
def record(request):
    # API route for all DB interactions
    if request.method == "POST":
        # Save question initially to DB
        data = json.loads(request.body)
        question = data["query"]
        if question:
            digits = data["digits"]
            digitBinary = "".join(['0' if digit in ['0', '1'] else '1' for digit in digits ])
            hex = Hexagram.objects.get(digits=digitBinary)
            fortune = Fortune(query=question, result=hex, timestamp=datetime.datetime.now(), digits=digits)
            fortune.save()
            return HttpResponse(status=204)
        else:
            return JsonResponse({
                "error": "No question asked"
            }, status=400)
    elif request.method == "PUT":
        # update fortune with relevance and notes
        data = json.loads(request.body)
        query = data["query"]
        digits = data["digits"]
        fortune = Fortune.objects.get(query=query, digits=digits)
        fortune.relevance = int(data["relevance"])
        fortune.notes = data["comments"]
        fortune.save()
        return HttpResponse(status=204)
    elif request.method == "GET":
        # return fortunes according to page
        page = int(request.GET.get("page") or 1)
        displayLimit = 5       # Number of records to show per page
        getrecords = Fortune.objects.order_by("-timestamp")
        print(getrecords)
        getrecords = Paginator(getrecords, displayLimit)
        getrecords = getrecords.page(page)
        print(getrecords.object_list)
        recordsResponse = [r.serialize() for r in getrecords]
        print(recordsResponse)
        return JsonResponse(recordsResponse, safe=False)
    else:
        return HttpResponse(status=400)

def records(request):
    return render(request, 'iChing/records.html')

def about(request):
    return render(request, 'iChing/about.html')