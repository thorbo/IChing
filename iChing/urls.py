from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("getHex", views.getHex, name="getHex"),
    path("hexagrams", views.hexagrams, name="hexagrams"),
    path("hexagram/<str:number>", views.hexagram, name="hexagram"), 
    path("records", views.records, name="records"),
    path("record", views.record, name="record"), 
    path("about", views.about, name="about")
]