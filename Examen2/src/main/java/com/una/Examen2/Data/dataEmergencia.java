package com.una.Examen2.Data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.una.Examen2.Model.Emergencia;

@Repository
public interface dataEmergencia extends JpaRepository<Emergencia, Integer> {
    List<Emergencia> findByEstado(boolean estado);
}
