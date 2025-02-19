from django.urls import path

from Emergencia.views import springGet, springCreate, springDelete, springGetById, spirngUpdate

urlpatterns = [
      path('djangoGet', springGet, name='springGet'),
      path('djangoCreate', springCreate, name='springCreate'),
      path('djangoDelete', springDelete, name='springDelete'),
      path('djangoUpdate', spirngUpdate, name='springUpdate'),
      path('djangoGetById', springGetById, name='springGetById')
      
]