from rest_framework import serializers
from heroes.models import Hero, HeroCounters
class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ('name', 'counters', 'image', 'pk')



class HeroCounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroCounters
        fields = ('ct1', 'ct2', 'score', 'pk')