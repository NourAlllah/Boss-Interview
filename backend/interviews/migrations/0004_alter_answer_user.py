# Generated by Django 3.2.4 on 2021-07-02 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interviews', '0003_answer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='user',
            field=models.CharField(default='', max_length=200),
        ),
    ]