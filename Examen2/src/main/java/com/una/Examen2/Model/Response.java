package com.una.Examen2.Model;

import lombok.Data;

@Data
public class Response<T> {
    public static final String ERROR = "error";
	public static final String WARNING = "warning";
	public static final String SUCCESS = "success";

	private String titulo;	
	private String mensaje; 
	private String tipo;	
	private T object;		

	/**
     * Metodo para determinar si la respuesta fue un exito.
     * @return true si la respuesta fue un exito, false de lo contrario.
     */
	public boolean isSuccess() {
		return (object instanceof Boolean) ? (boolean) object : false;
	}

}
