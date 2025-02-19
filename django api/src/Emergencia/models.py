from django.db import models

# Create your models here.

class Emergencia(models.Model):
    nompaciente = models.CharField(max_length=255)
    nomdoctor = models.CharField(max_length=255)
    cedpaciente = models.CharField(max_length=255)
    ceddoctor = models.CharField(max_length=255)
    valoracion = models.CharField(max_length=255)
    gravedad = models.CharField(max_length=255)
    descripcion = models.TextField()
    estado = models.BooleanField()
    fecha = models.DateTimeField()
    motivo = models.CharField(max_length=255)
    diagnostico = models.CharField(max_length=255)
    tratamiento = models.CharField(max_length=255)

    def __str__(self):
        return self.nompaciente
    
