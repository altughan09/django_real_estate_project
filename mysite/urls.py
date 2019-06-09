from django.contrib import admin
from django.urls import include, path
from pages import views

urlpatterns = [
    path('', include('pages.urls')),
    path('listing/', include('listings.urls')),
    path('admin/', admin.site.urls),
]
