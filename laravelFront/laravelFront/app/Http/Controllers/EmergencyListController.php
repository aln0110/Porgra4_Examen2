<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class EmergencyListController extends Controller
{
    private $apiUrl = 'http://localhost:3000';

    public function index()
    {
        $response = Http::get("$this->apiUrl/getEmergencias");
        $emergencies = $response->json();
        return view('listEmergencias', compact('emergencies'));
    }

    public function delete($id)
    {
        try {
            $response = Http::delete("$this->apiUrl/deleteEmergencia/$id");
            //http://localhost:3000/deleteEmergencia/${id}
            
            if ($response->successful()) {
                return redirect()->back()->with('message', 'Emergencia eliminada correctamente');
            } else {
                return redirect()->back()->with('error', 'Hubo un problema al eliminar la emergencia');
            }
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Error en la eliminación de la emergencia: ' . $e->getMessage());
        }
    }

}
