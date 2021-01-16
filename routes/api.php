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
    Route::put('settings/profile', 'SettingsController@updateProfile');
     Route::put('settings/password', 'SettingsController@updatePassword');

    // user management
    Route::post('email/verify', 'UsersController@verifyEmail');
    Route::post('change-role', 'UsersController@changeRole');
    Route::post('change-status', 'UsersController@changeStatus');
    Route::post('change-photo', 'UsersController@changePhoto');
    Route::post('users/delete', 'UsersController@deleteAll');
    Route::resource('users', 'UsersController');

    // cusotmer
    Route::get('customers/all', 'CustomersController@allCustomers');
    // Route::get('customers/all/active', 'CustomersController@allActiveCustomers');
    Route::get('customer/{id}/recievable', 'CustomersController@customerRecievable');
    Route::resource('customers', 'CustomersController');

    // supplier
    Route::get('suppliers/all', 'SuppliersController@allSuppliers');
    // Route::get('suppliers/all/active', 'SuppliersController@allActiveSuppliers');
    Route::get('supplier/{id}/payable', 'SuppliersController@supplierPayable');
    Route::resource('suppliers', 'SuppliersController');

    // products
    Route::get('products/all', 'ProductsController@allProducts');
    Route::get('products/{id}/brand', 'ProductsController@productBrand');
    Route::get('products/{id}/category', 'ProductsController@productCategory');
    Route::get('products/{id}/unit', 'ProductsController@productUnit');
    Route::get('products/{id}/user', 'ProductsController@productUser');
    Route::get('products/filter/{column}/{value}', 'ProductsController@allProductsWithFilter');
    Route::post('products/changeStatus', 'ProductsController@changeStatus');
    Route::post('products/deleteAll', 'ProductsController@deleteAll');
    Route::get('products/report', 'ProductsController@report'); //view for remaining quantity
    Route::resource('products', 'ProductsController');

    // slab
    Route::get('slabs/all', 'SlabController@allSlabs');
    Route::resource('slabs', 'SlabController');

    // purchase detail
    Route::resource('purchase', 'PurchaseController');
    // purchase order
    Route::resource('purchaseorder', 'PurchaseOrderController');

    // orderdetail
    Route::resource('orderdetail', 'OrderDetailController');
    // order
    Route::resource('order', 'OrderController');


    // brand
    Route::get('brands/all', 'BrandController@allBrands');
    Route::resource('brands', 'BrandController');

    // unit
    Route::get('units/all', 'UnitController@allUnits');
    Route::resource('units', 'UnitController');

    // category
    Route::get('categories/all', 'CategoryController@allCategories');
    Route::resource('categories', 'CategoryController');

    // business
    Route::get('business/all', 'BusinessController@allBusiness');
    Route::resource('business', 'BusinessController');

    // Recievable Routes
    Route::get('recievables', 'RecievablesController@recievables');
    Route::post('recievableByCustomerId', 'RecievablesController@recievableByCustomerId');
    Route::post('recievableByDate', 'RecievablesController@recievableByDate');
    Route::post('createRecievable', 'RecievablesController@createRecievable');
    Route::post('updateRecievable', 'RecievablesController@updateRecievable');
    Route::post('debitRecievable', 'RecievablesController@debitRecievable');
    Route::post('creditRecievable', 'RecievablesController@creditRecievable');
    Route::post('deleteRecievable', 'RecievablesController@deleteRecievable');

    // payable Routes
    Route::get('payables', 'PayablesController@payables');
    Route::post('payableByVendorId', 'PayablesController@payableByVendorId');
    Route::post('payableByDate', 'PayablesController@payableByDate');
    Route::post('createPayable', 'PayablesController@createPayable');
    Route::post('updatePayable', 'PayablesController@updatePayable');
    Route::post('debitPayable', 'PayablesController@debitPayable');
    Route::post('creditPayable', 'PayablesController@creditPayable');
    Route::post('deletePayable', 'PayablesController@deletePayable');

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
