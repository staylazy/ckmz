from django.http import JsonResponse, FileResponse
import os

def get_uploaded_files(request):
    directory = 'uploadedFiles/uploadedFiles'
    print(os.getcwd())
    files = os.listdir(directory)
    print(files)
    return JsonResponse({'files': files})

def download_file(request, file_name):
    file_path = f'uploadedFiles/uploadedFiles/{file_name}'
    file = open(file_path, 'rb')
    return FileResponse(file)