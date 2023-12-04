from django.contrib import admin
from .models import UploadedFile

admin.site.register(UploadedFile)  # Регистрация модели для отображения в административной панели
