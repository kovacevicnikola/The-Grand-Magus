from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from heroes.models import Hero, HeroCounters
from heroes.serializers import HeroSerializer, HeroCounterSerializer

def pretty_request(request):
    headers = ''
    for header, value in request.META.items():
        if not header.startswith('HTTP'):
            continue
        header = '-'.join([h.capitalize() for h in header[5:].lower().split('_')])
        headers += '{}: {}\n'.format(header, value)

    return (
        '{method} HTTP/1.1\n'
        'Content-Length: {content_length}\n'
        'Content-Type: {content_type}\n'
        '{headers}\n\n'
        '{body}'
    ).format(
        method=request.method,
        content_length=request.META['CONTENT_LENGTH'],
        content_type=request.META['CONTENT_TYPE'],
        headers=headers,
        body=request.body,
    )

class HeroViewSet(viewsets.ReadOnlyModelViewSet):
   
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer


class HeroCounterViewSet(viewsets.ModelViewSet):

    queryset = HeroCounters.objects.all()
    serializer_class = HeroCounterSerializer

    @detail_route(methods=['GET', 'PATCH'])
    def counter_list(self, request, pk=None):
        
        if request.method == 'GET':
             # retrieve an object by pk provided
            hero = Hero.objects.get(pk=pk)
            herocounters = HeroCounters.objects.filter(ct1=hero).distinct().order_by('-score')
            herocounters_json = HeroCounterSerializer(herocounters, many=True)
            return Response(herocounters_json.data)
        elif request.method == 'PATCH':

            instance = HeroCounters.objects.get(pk=pk)
            instance.score = request.data['score']
            # pass in the instance we want to update
            serializer = HeroCounterSerializer(instance, data=request.data, partial=True)

            # validate and update
            if serializer.is_valid():
                
                serializer.save()
                serializer_dict = serializer.data
                serializer_dict["message"] = "Counter score updated successfully."
                return Response(serializer_dict, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors,
                                status=status.HTTP_400_BAD_REQUEST)
