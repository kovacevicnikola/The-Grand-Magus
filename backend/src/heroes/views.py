from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from heroes.models import Hero, HeroCounters
from heroes.serializers import HeroSerializer, HeroCounterSerializer

class HeroViewSet(viewsets.ReadOnlyModelViewSet):
   
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer


class HeroCounterViewSet(viewsets.ModelViewSet):

    queryset = HeroCounters.objects.all()
    paginate_by = 10
    serializer_class = HeroCounterSerializer
    @detail_route()
    def counter_list(self, request, pk=None):
        hero = Hero.objects.get(pk=pk) # retrieve an object by pk provided

        herocounters = HeroCounters.objects.filter(ct1=hero).distinct().order_by('score')[:10]
        herocounters_json = HeroCounterSerializer(herocounters, many=True)
        return Response(herocounters_json.data)

