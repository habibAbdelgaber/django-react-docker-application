from django.urls import path
from tasks.api import views



urlpatterns = [
   path('', views.TaskViewSet.as_view({
      'get': 'list',
      'post': 'create'
   })),
   path('create-task/', views.TaskViewSet.as_view({
      # 'get': 'list',
      'post': 'create'
   })),
   path('<str:pk>/', views.TaskViewSet.as_view({
      'get': 'retrieve',
      'put': 'update',
   })),
   path('delete-task/<str:pk>/', views.TaskViewSet.as_view({
      'delete': 'destroy'
   }))
]