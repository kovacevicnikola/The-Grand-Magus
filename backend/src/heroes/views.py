
from rest_framework import viewsets
from heroes.models import Hero, HeroCounters
from heroes.serializers import HeroSerializer, HeroCounterSerializer
# Create your views here.

class HeroViewSet(viewsets.ModelViewSet):
   
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer


class HeroCounterViewSet(viewsets.ModelViewSet):

    queryset = HeroCounters.objects.all()
    serializer_class = HeroCounterSerializer