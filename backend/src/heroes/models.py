from django.db import models
# Create your models here.


class Hero(models.Model):

    name        = models.TextField(max_length=120, null=True)    
    counters    = models.TextField(blank=True)
    image       = models.ImageField(upload_to="")


class HeroCounters(models.Model):
	ct1 		= models.ForeignKey(Hero, on_delete=models.CASCADE, related_name='hero_1')
	ct2 		= models.ForeignKey(Hero, on_delete=models.CASCADE, related_name='hero_2')
	score		= models.IntegerField()