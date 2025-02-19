<?php
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo 'Invalid JSON data';
    exit;
}

$requiredFields = ['id','nomPaciente', 'nomDoctor', 'cedPaciente', 'cedDoctor', 'valoracion', 'gravedad', 'descripcion', 'estado', 'fecha', 'motivo', 'diagnostico', 'tratamiento'];



foreach ($requiredFields as $field) {
    if (!isset($data[$field])) {
        echo 'Missing required field: ' . $field;
        exit;
    }
}

$url = 'http://localhost:8080/api/v1/emergencia/update';
$jsonData = json_encode($data);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen(json_encode($data)))
);

$response = curl_exec($ch);

if(curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}

curl_close($ch);

echo $response;
?>
