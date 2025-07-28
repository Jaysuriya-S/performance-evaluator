from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # Combined 'auth/' routes:
    path('auth/', include([
        path('', include('djoser.urls')),                    # Djoser base URLs
        path('', include('djoser.urls.authtoken')),          # Djoser token login
        path('', include('accounts.urls')),                  # Your custom password reset view
    ])),
]
