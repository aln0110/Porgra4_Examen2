<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow these methods from any origin
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
// Allow these headers from any origin
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$id = $_GET['id'];  

$url = 'http://localhost:8080/api/v1/emergencia/delete?id=' . urlencode($id);

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if(curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}

curl_close($ch);

echo $response;
?>
