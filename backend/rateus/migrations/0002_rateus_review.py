# Generated by Django 3.2.4 on 2021-07-04 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rateus', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rateus',
            name='review',
            field=models.TextField(null=True),
        ),
    ]