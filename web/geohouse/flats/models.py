from django.db import models
from django.contrib.gis.db.models import PointField
class Flat(models.Model):
    address=models.CharField(max_length=255,blank=False)
    price=models.FloatField(max_length=20)
    delta=models.FloatField(max_length=20)

    location=PointField()
