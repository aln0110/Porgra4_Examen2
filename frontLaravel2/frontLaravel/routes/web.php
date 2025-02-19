<?php
use App\Http\Controllers\EmergencyController;
use Illuminate\Support\Facades\Route;

Route::get('/create-emergency', [EmergencyController::class, 'create'])->name('createEmergency');
Route::post('/store-emergency', [EmergencyController::class, 'store'])->name('storeEmergency');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hi', function () {
    return view('welcome');
});