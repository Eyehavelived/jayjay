from django.shortcuts import render
from .models import BlogPost

# posts = [
#     {
#         'author': 'JJ',
#         'title': 'post1',
#         'content': 'first post content', 
#         'date': 'August 12, 2024'
#     },
#     {
#         'author': 'JJ',
#         'title': 'post2',
#         'content': 'second post content', 
#         'date': 'August 132, 2024'
#     }
# ]

# Create your views here.
def home(request):
    context = {
        'posts': BlogPost.objects.all()
    }
    return render(request, 'blog/home.html', context)

def about(request):
    context = {
        'title': "About"
    }
    return render(request, 'blog/about.html', context)

def hobbies_dnd(request):
    context = {
        'title': 'Hobbies',
        'posts': BlogPost.objects.all()
    }
    return render(request, 'hobbies/dnd.html')

def hobbies_pixel_art(request):
    pass
    # context = {}
    # return render(request, 'hobbies/pixel_art.html')



