from django.urls import path, re_path
from . import views
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', views.home, name='home'),  # Root URL is home
    path('about/', views.home, name='about'),
    path('projects/', views.home, name='projects'),
    path('contact/', views.home, name='contact'),
    path('docs/snake/', views.snake_docs, name='snake_docs'),
    path('docs/space/', views.space_docs, name='space_docs'),
    path('docs/flappy/', views.flappy_docs, name='flappy_docs'),
    re_path(r'^.*$', RedirectView.as_view(url='/', permanent=False))
]