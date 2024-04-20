# Generated by Django 5.0.1 on 2024-04-05 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sitesource', '0012_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='image',
            field=models.ImageField(upload_to='BASE_DIR/sitesource/temp/images'),
        ),
    ]
