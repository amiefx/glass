<?php

use App\Http\Controllers;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

*/



Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth',
], function($router) {
   // Route::post('login', 'AuthController@login');
   // Route::post('register', 'AuthController@register');
  //  Route::post('logout', 'AuthController@logout');
    Route::get('profile', 'AuthController@profile');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('open', ['TodoController@open']);
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
], function($router) {
    Route::resource('todos', 'TodoController@login');
    Route::get('me', 'MeController@getMe');
    
});

Route::group([
    'middleware' => ['auth:api'],
    'namespace' => 'App\Http\Controllers',
], function () {
    // logout
    Route::post('logout', 'Auth\LoginController@logout');

    // cusotmer
    Route::resource('customers', 'CustomersController');

    // supplier
    Route::resource('suppliers', 'SuppliersController');
});

Route::group([
    'middleware' => 'guest:api',
    'namespace' => 'App\Http\Controllers',
], function($router) {
    // authentication
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('login', 'Auth\LoginController@login');
   // Route::get('me', 'MeController@getMe');
});