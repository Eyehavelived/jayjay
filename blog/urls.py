from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='blog-home'),
    path('about', views.about, name='about'),
    path('hobbies/dnd', views.hobbies_dnd, name='hobbies_dnd'),
    path('hobbies/pixel_art', views.hobbies_pixel_art, name='hobbies_pixel_art')
]