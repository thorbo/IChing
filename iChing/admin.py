from django.contrib import admin
from .models import Hexagram, Fortune

# Register your models here.
admin.site.register(Hexagram)
admin.site.register(Fortune)