from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
# from django.conf.urls.static import static
# from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='http://localhost:3000', permanent=False)),
    # path("api/docs/", include_docs_urls(title="Password Generator API")),
    path('api/', include('apps.idea_generator.urls')),
]
