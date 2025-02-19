<?php
$id = $_GET['id'];  
$url = "http://localhost:8080/api/v1/emergencia/id/". urlencode($id);
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if(curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}

curl_close($ch);

echo $response;
?>
