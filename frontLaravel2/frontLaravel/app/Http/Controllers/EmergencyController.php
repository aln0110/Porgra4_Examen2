<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class EmergencyController extends Controller
{
    public function create()
    {
        try {
            return view('createEmergency');
        } catch (\Exception $e) {
            Log::error('Error in create method: ' . $e->getMessage());
            return back()->with('error', 'Error creating emergency. Please try again.');
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nomPaciente' => 'required|string',
            'nomDoctor' => 'required|string',
            'cedPaciente' => 'required|string',
            'cedDoctor' => 'required|string',
            'valoracion' => 'required|string',
            'gravedad' => 'required|string',
            'descripcion' => 'required|string',
            'estado' => 'nullable|boolean',
            'fecha' => 'nullable|date',
            'motivo' => 'required|string',
            'diagnostico' => 'required|string',
            'tratamiento' => 'required|string',
        ]);

        try {
            Log::info('API Request:', $validatedData);
            $response = Http::post('http://localhost:3000/createEmergencia', $validatedData);
            $responseData = $response->json();
            

            Log::info('API Response:', $responseData);
            Log::info('API Status:', $response->status());


            if ($response->successful()) {

                return redirect()->back()->with('success', 'Emergencia creada correctamente');
            } else {

                return redirect()->back()->with('error', 'Hubo un problema al crear la emergencia');
            }
        } catch (\Exception $e) {

            Log::error('Error in API request: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error en la creación de la emergencia: ' . $e->getMessage());
        }
    }
}
