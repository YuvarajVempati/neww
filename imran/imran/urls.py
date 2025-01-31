
from django.contrib import admin
from django.urls import path
from first import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('greet/<str:name>/', views.greet, name='greet'),
    
]
