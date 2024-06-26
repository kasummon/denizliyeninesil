# Generated by Django 5.0.1 on 2024-04-05 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sitesource', '0010_slider'),
    ]

    operations = [
        migrations.AddField(
            model_name='slider',
            name='path',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='slider',
            name='text',
            field=models.TextField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='slider',
            name='title',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
