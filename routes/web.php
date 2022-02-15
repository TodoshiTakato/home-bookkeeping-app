<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookKeepingController;

Route::get('/', function () {
    return view('index');
});

Route::resource('photos', BookKeepingController::class);
