from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_framework.urls')),
    path('tasks-api/', include('tasks.urls'))
]
