from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class slider (models.Model):
    image = models.ImageField(upload_to = 'images')
    title = models.CharField(max_length = 255)
    text = models.TextField(max_length = 255, blank = True)
    path = models.CharField(max_length = 255, default = '',blank = True)

    def __str__(self):
        return self.title
    
class categories (models.Model):
    name = models.CharField(max_length=100,null = True,)

    def __str__(self):
        return self.name

class post (models.Model):
    image = models.ImageField(upload_to = 'blogs',null=True,blank=True)
    title = models.CharField(max_length=255)
    summary = models.TextField(max_length=255)
    category = models.ForeignKey(categories , on_delete = models.SET_NULL , null = True,)
    author = models.ForeignKey(User, on_delete = models.SET_NULL, null = True,)
    date = models.DateTimeField()
    active = models.BooleanField(default=True)
    writer = models.CharField(max_length=5000)
    body = models.TextField(default='')


    def __str__(self):
        return '**' + str(self.category) + '** || ' + self.title + ' || ' + str(self.author) #Buradaki author yazar ile değiştirilirse o yazacak basitçe
    
class yemeks (models.Model):
    image = models.ImageField(upload_to='yemek',null=False)