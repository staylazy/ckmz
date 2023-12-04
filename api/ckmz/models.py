from django.db import models
from django.urls import reverse

# class User(models.Model):
#     id_user = models.AutoField('user', on_delete=models.CASCADE, primary_key=True)
#     login = models.CharField(max_length=32, unique=True)
#     email = models.EmailField(max_length=128, unique=True)
#     password = models.CharField(max_length=128)
#     first_name = models.CharField(max_length=64) 
#     last_name = models.CharField(max_length=64)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#     is_superuser = models.BooleanField(default=False)
    
    # class Meta:
    #     managed = True
    #     db_table = 'users'
    #     ordering = ["login"]

    # def __str__(self):
    #     return self.name

# class Photo(models.Model):
#     id_photo = models.AutoField('photo', on_delete=models.CASCADE, primary_key=True)
class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploadedFiles/')  # Путь для сохранения файлов

    def __str__(self):
        return self.file.name
