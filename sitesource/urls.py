"""
URL configuration for kolwebsit project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('',views.home, name='home'),
    path('text', views.text, name='text'),
    path('image-text', views.imageText, name='image-text'),
    path('blog', views.blog, name='blog'),
    path('bakim-evi', views.bakimEvi, name='bakim-evi'),
    path('blog/<blogcategory>', views.blog_category, name='blogcategory'),
    path('blog/<category>/<id>',views.blog_details, name= 'details'),
    path('vizyonumuz',views.vizyon,name = 'vizyon'),
    path('about',views.about,name = 'about'),
    path('kurulus',views.kurulus,name = 'kurulus'),
    path('egitim-vizyonu',views.egtvizyon,name = 'egtvizyon'),
    path('404',views.notfound,name = '404'),
    path('yemek',views.yemekler,name = 'yemek'),
    path('iletisim',views.iletisim,name = 'iletisim'),
    path('kurucular',views.kurucular,name = 'kurucular'),
]
