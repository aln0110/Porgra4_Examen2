package com.una.Examen2.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import com.una.Examen2.Model.Emergencia;
import com.una.Examen2.Model.Response;
import com.una.Examen2.Service.EmergenciaService;

@RestController
@RequestMapping(path = "/api/v1/emergencia")
public class EmergenciaController {

    @Autowired
    private EmergenciaService emergenciaService;

    @GetMapping(path = "/get")
    public List<Emergencia> getEmergencias() {
        return emergenciaService.getEmergencias();
    }

    @PostMapping(path = "/create")
    public Response<Boolean> createEmergencia(@RequestBody @Valid  Emergencia emergencia) {
        System.out.println("Received Emergencia: " + emergencia);
        Response<Boolean> re = emergenciaService.saveEmergencia(emergencia);
        return re;
    }

    @PutMapping(path = "/update")
    public Response<Boolean> updateEmergencia(@RequestBody @Valid  Emergencia emergencia) {
        Response<Boolean> re = emergenciaService.updateEmergencia(emergencia);
        return re;
    }

    @DeleteMapping(path = "/delete")
    public Response<Boolean> deleteEmergencia(@RequestParam int id) {
        Response<Boolean> re = emergenciaService.deleteEmergencia(id);
        return re;
    }

    @GetMapping(path = "/id/{id}")
    public Optional  <Emergencia> getEmergenciaById(@PathVariable int id) {
        return emergenciaService.buscarEmergenciaPorId(id);
    }

}
