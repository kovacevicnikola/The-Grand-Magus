# Generated by Django 2.2 on 2019-04-30 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heroes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hero',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
    ]
