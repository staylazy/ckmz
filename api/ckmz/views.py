from django.http import JsonResponse
import os

def get_uploaded_files(request):
    directory = 'uploadedFiles/uploadedFiles'
    print(os.getcwd())
    files = os.listdir(directory)
    print(files)
    return JsonResponse({'files': files})
