<?php

use App\Http\Controllers\EmergencyController;
use App\Http\Controllers\EmergencyListController;
use Illuminate\Support\Facades\Route;

Route::get('/create-emergency', [EmergencyController::class, 'create'])->name('createEmergency');
Route::post('/store-emergency', [EmergencyController::class, 'store'])->name('storeEmergency');
Route::get('/emergencies', [EmergencyListController::class, 'index'])->name('emergencies');
Route::delete('/delete-emergency/{id}', [EmergencyListController::class, 'delete'])->name('deleteEmergency');

Route::get('/createEmergencia', function () {
    return view('createEmergency');
})->name('createEmergencia');

Route::get('/emergenciess', function () {
    return 'Ruta funcionando';
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hi', function () {
    return view('welcome');
});