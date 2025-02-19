package com.una.Examen2.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.una.Examen2.Data.dataEmergencia;
import com.una.Examen2.Model.Emergencia;
import com.una.Examen2.Model.Response;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class EmergenciaService {
    @Autowired
    dataEmergencia  dataEmergencia;

    public Response<Boolean> saveEmergencia(Emergencia Emergencia){
        Response<Boolean> response = new Response<>();
        try {
            dataEmergencia.save(Emergencia);
            response.setTitulo("Creación de emergencia");
            response.setMensaje("Emergencia guardada con exito");
            response.setTipo(Response.SUCCESS);
            response.setObject(true);
        } catch (Exception e) {
            response.setTitulo("Error al crear la emergencia");
            response.setMensaje("Error al guardar la emergencia");
            response.setTipo(Response.ERROR);
            response.setObject(false);
        }
        return response;
    }

    @Transactional
    public Response<Boolean> deleteEmergencia(int id){
        Response<Boolean> response = new Response<>();
        try {
            dataEmergencia.deleteById(id);
            response.setTitulo("Eliminación de emergencia");
            response.setMensaje("Emergencia eliminada con exito");
            response.setTipo(Response.SUCCESS);
            response.setObject(true);
        } catch (Exception e) {
            response.setTitulo("Error al eliminar la emergencia");
            response.setMensaje("Error al eliminar la emergencia");
            response.setTipo(Response.ERROR);
            response.setObject(false);
        }
        return response;
    }

    public  Response<Boolean> updateEmergencia(Emergencia Emergencia){
        Response<Boolean> response = new Response<>();
        try {
            dataEmergencia.save(Emergencia);
            response.setTitulo("Actualización de emergencia");
            response.setMensaje("Emergencia actualizada con exito");
            response.setTipo(Response.SUCCESS);
            response.setObject(true);
        } catch (Exception e) {
            response.setTitulo("Error al actualizar la emergencia");
            response.setMensaje("Error al actualizar la emergencia");
            response.setTipo(Response.ERROR);
            response.setObject(false);
        }
        return response;
    }


    public List<Emergencia> getEmergencias(){
        return dataEmergencia.findAll();
    }

    public List<Emergencia> getEmergenciasByEstado(boolean estado){
        return dataEmergencia.findByEstado(estado);
    }
    
    public Optional <Emergencia> buscarEmergenciaPorId(int id) {
        return dataEmergencia.findById(id);
    }


    public Emergencia getEmergenciaById(int id) {
        return dataEmergencia.findById(id).orElseThrow(() -> new EntityNotFoundException("Emergencia not found with id " + id));
    }


    

}
