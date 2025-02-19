import json
import requests
from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from .models import Emergencia

@csrf_exempt
def springGet(request):
    url = 'http://localhost:8080/api/v1/emergencia/get'
    response = requests.get(url)
    if response.status_code == 200:
        return JsonResponse(response.json(), safe=False)
    else:
        return JsonResponse({'error': 'Failed to fetch data from the Spring Boot API'}, status=500)
 
@csrf_exempt    
def springCreate(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        url = 'http://localhost:8080/api/v1/emergencia/create'
        response = requests.post(url, json=data)
        if response.status_code == 200:
            return JsonResponse(response.json(), safe=False)
        else:
            return JsonResponse({'error': 'Failed to create data in the Spring Boot API'}, status=500)
    else:
        return HttpResponseNotAllowed(['POST'])

@csrf_exempt
def springDelete(request):
    if request.method == 'DELETE':
        id = request.GET.get('id')
        if not id:
            return JsonResponse({'error': 'Missing ID for deletion'}, status=400)
        
        url = f'http://localhost:8080/api/v1/emergencia/delete?id={id}'
        response = requests.delete(url)
        
        if response.status_code == 200:
            return JsonResponse(response.json(), safe=False)
        else:
            return JsonResponse({'error': 'Failed to delete data in the Spring Boot API'}, status=response.status_code)
    else:
        return HttpResponseNotAllowed(['DELETE'])

@csrf_exempt
def spirngUpdate(request):
    if request.method=='PUT':
        data = json.loads(request.body)
        url = 'http://localhost:8080/api/v1/emergencia/update'
        response = requests.put(url, json=data)
        if response.status_code == 200:
            return JsonResponse(response.json(), safe=False)
        else:
            return JsonResponse({'error': 'Failed to update data in the Spring Boot API'}, status=500)
    else:
        return HttpResponseNotAllowed(['PUT']) 
    
@csrf_exempt
def springGetById(request):
    id = request.GET.get('id')
    if not id:
        return JsonResponse({'error': 'Missing ID for fetching'}, status=400)
    
    url = f'http://localhost:8080/api/v1/emergencia/id/{id}'
    response = requests.get(url)
    
    if response.status_code == 200:
        return JsonResponse(response.json(), safe=False)
    else:
        return JsonResponse({'error': 'Failed to fetch data from the Spring Boot API'}, status=response.status_code)   
       
def prueba():
    return "Hola mundo desde views.py de Emergencia"