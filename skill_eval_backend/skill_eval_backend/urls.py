from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('skill.urls')),  # <== include app URLs
      path('skill/', include('skill.urls')),
       path('', include('skill.urls')),
]
