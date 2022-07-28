import os
import json
import geojson
from django.core.serializers import serialize
from django.views.generic.base import TemplateView
from .models import Flat
class FlatsMapView(TemplateView):
    template_name = "map.html"
    def get_context_data(self,**kwargs):
        with open("flats/flats.geojson",'r') as f:
            geodata=json.loads(f.read())
        context=super().get_context_data(**kwargs)
        #context["flats"]=json.loads(serialize("geojson",Flat.objects.all()))
        context["flats"]=geodata
        return context
