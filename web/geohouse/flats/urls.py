from django.urls import path
from .views import FlatsMapView
app_name = "flats"
urlpatterns = [
    path("map/", FlatsMapView.as_view()),
]

