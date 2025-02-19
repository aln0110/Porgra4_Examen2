package com.una.Examen2.Model;


import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "tb_Emergencia")
@Data
public class Emergencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "nomPaciente")
    private String nomPaciente;

    @Column(name = "nomDoctor")
    private String nomDoctor;

    @Column(name = "cedPaciente")
    private String cedPaciente;

    @Column(name = "cedDoctor")
    private String cedDoctor;

    @Column(name = "Valoracion")
    private String valoracion;

    @Column(name = "Gravedad")
    private String gravedad;

    @Column(name = "Descripcion")
    private String descripcion;

    @Column(name = "Estado")
    private boolean estado;

    @Column(name = "fecha" )
    private LocalDateTime fecha;

    @Column(name = "motivo")
    private String motivo;

    @Column(name = "diagnostico" )
    private String diagnostico;

    @Column(name = "tratamiento" )
    private String tratamiento;






}
