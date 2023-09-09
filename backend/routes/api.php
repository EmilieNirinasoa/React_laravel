<?php

use App\Http\Controllers\AffichageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/data', [AffichageController::class,'index']);
Route::post('/data2', [AffichageController::class,'store']);
Route::delete('/data/{id}', [AffichageController::class,'destroy']);
Route::put('/data2/{id}',[AffichageController::class,'update']);
Route::get('/modifier/{id}',[AffichageController::class,'edit']);
