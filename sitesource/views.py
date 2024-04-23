from django.shortcuts import render
from .models import post,categories,slider,yemeks
from django.http import HttpResponse

catcat = categories.objects.all()

# Create your views here.
def home (request):
    slidersAll = slider.objects.all()
    context = {'sliders':slidersAll,
               'blogcategory' : catcat}
    return render(request,'index.html',context)

def text (request):
    return render(request,'text.html',{'blogcategory' : catcat})

def imageText (request):
    return render(request,'image-text.html',{'blogcategory' : catcat})

def blog (request):
    postsAll = post.objects.all()
    postsAll = postsAll.order_by('-date')
    categoriesAll = categories.objects.all()
    context = { 'posts' : postsAll,
                'blogcategory' : categoriesAll}
    
    return render(request,'blog.html',context)

def bakimEvi (request):
    return render(request,'bakimevi.html',{'blogcategory' : catcat})

def blog_category(request, blogcategory):

    #postsAll = post.objects.all()
    #for entry in postsAll:
    #    if entry.name != detail:
    #        postsAll.pop(entry)
    #categoried = categories.objects.get(name = detail)    
    #posted = post.objects.get( category = categoried.id)
    #categoried = categories.objects.get(name = detail)
    #category_id = categoried.id
    #posted = post.objects.all()

    #posted.exclude(categoy = category_id)

    #posted = post.objects.get(category = category_id)
    select_item = categories.objects.get(slug = blogcategory)
    select_id = select_item.id
    
    categoriesAll = categories.objects.all()

    posted = post.objects.all().filter( category = select_id )
    posted = posted.order_by('-date')

    context = {'posts' : posted,
               'blogcategory' : categoriesAll}

    return render(request,'blog.html', context)

def blog_details (request,category,id):
    select_item = post.objects.get(id = id)

    context = {'item' : select_item,
               'blogcategory' : catcat}

    return render (request,'details.html',context)

def vizyon (request):
    return render(request,'vizyon.html',{'blogcategory' : catcat})

def about (request):
    return render(request,'about.html',{'blogcategory' : catcat})

def kurulus (request):
    return render(request,'kurulus.html',{'blogcategory' : catcat})

def egtvizyon (request):
    return render(request,'egtvizyon.html',{'blogcategory' : catcat})

def notfound (request):
    return render(request,'404.html',{'blogcategory' : catcat})

def yemekler (request):

    yemeklist = yemeks.objects.all()

    return render(request,'image.html',{'blogcategory' : catcat,
                                                'yemek':yemeklist[0]})
def iletisim (request):
    return render(request,'iletisim.html',{'blogcategory' : catcat})

def kurucular (request):
    return render(request,'kurucular.html',{'blogcategory' : catcat})


def deneme (request):
    return render(request,'deneme.html',{'blogcategory' : catcat})