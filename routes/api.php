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

    // employee
    Route::get('employees/all', 'EmployeeController@allEmployees');
    Route::get('employees/all/active', 'EmployeeController@allActiveEmployees');
    Route::post('employee/changestatus/{id}', 'EmployeeController@changeStatus');
    Route::resource('employees', 'EmployeeController');

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

    // adjust quantity
    Route::resource('qtyadjustments', 'QtyAdjustmentController');

    // slab
    Route::get('slabs/all', 'SlabController@allSlabs');
    Route::resource('slabs', 'SlabController');

    // Cash
    Route::post('cashes/openbl', 'CashController@openbl');
    Route::post('cashes/withdraw', 'CashController@withdraw');
    Route::post('cashes/transfer', 'CashController@transfer');
    Route::get('cashes/balance', 'CashController@balance');
    Route::resource('cashes', 'CashController');

    // Bank
    Route::get('banks/balance', 'BankController@balance');
    Route::resource('banks', 'BankController');

    // Payment
    Route::resource('payments', 'PaymentsController');

    // Receipt
    Route::resource('receipts', 'ReceiptController');

    // purchase detail
    Route::get('penddingpurchasescount', 'PurchaseOrderController@pendingsPurchasesCount');
    Route::get('penddingpurchaseorders', 'PurchaseOrderController@pendingsPurchasesOrders');
    Route::get('purchaseinvoicedetail/{id}', 'PurchaseOrderController@purchase_invoice_detail');
    Route::resource('purchase', 'PurchaseController');

    // purchase order
    Route::resource('purchaseorder', 'PurchaseOrderController');

    // orderdetail
    Route::resource('orderdetail', 'OrderDetailController');

    // order
    Route::get('penddingorderscount', 'OrderController@PenddingOrdersCount');
    Route::get('penddingorders', 'OrderController@PenddingOrders');
    Route::post('ceilling', 'OrderController@ceilling_calculation');
    Route::post('panelling', 'OrderController@panel_calculation');
    Route::post('glass', 'OrderController@glass_calculation');
    Route::get('invoicedetail/{id}', 'OrderController@invoice_detail');
    Route::get('orderbywalkinphone/{id}', 'OrderController@orderByWalkinPhone');
    Route::post('order/approve/{id}', 'OrderController@orderApprove');
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


    // expenses
    Route::resource('expenses', 'ExpenseController');

    // expenses items
    Route::get('expenseitems/allitems', 'ExpenseItemsController@allitems');
    Route::resource('expenseitems', 'ExpenseItemsController');

    // salary
    Route::post('paysalary', 'SalaryController@paySalary');
    Route::resource('salaries', 'SalaryController');


    //reports
    Route::get('report/totalproducts', 'ReportController@totalNumberProducts');
    Route::get('report/totalusers', 'ReportController@totalNumberUsers');
    Route::get('report/totalsuppliers', 'ReportController@totalNumberSuppliers');
    Route::get('report/totalcustomers', 'ReportController@totalNumberCustomers');
    Route::get('report/totalemployees', 'ReportController@totalNumberEmployees');

    Route::get('report/totalpurchasesorders', 'ReportController@totalNumberPurchaseOrders');
    Route::get('report/totalpurchasesordersbyid/{id}', 'ReportController@totalNumberPurchaseOrdersById');
    Route::get('report/totalpurchasesordersbysupplierid/{id}', 'ReportController@totalNumberPurchaseOrdersBySupplierId');
    Route::get('report/totalpurchasesordersbystatus/{status}', 'ReportController@totalNumberPurchaseOrdersByStatus');
    Route::get('report/totalpurchasesordersbydate/{date}', 'ReportController@totalNumberPurchaseOrdersByDate');
    Route::get('report/totalpurchasesitemsbyorderid/{id}', 'ReportController@totalNumberPurchaseItemsByOrderId');

    Route::get('report/totalorders', 'ReportController@totalNumberOrders');
    Route::get('report/totalordersbyid/{id}', 'ReportController@totalNumberOrdersById');
    Route::get('report/totalordersbycustomerid/{id}', 'ReportController@totalNumberOrdersByCustomerId');
    Route::get('report/totalordersbystatus/{status}', 'ReportController@totalNumberOrdersByStatus');
    Route::get('report/totalordersbydate/{date}', 'ReportController@totalNumberOrdersByDate');
    Route::get('report/totalorderitemsbyorderid/{id}', 'ReportController@totalNumberOrderItemsByOrderId');

    Route::get('report/totalrecievables', 'ReportController@totalNumberRecievables');
    Route::get('report/totalrecievablesbyid/{id}', 'ReportController@totalNumberRecievablesById');
    Route::get('report/totalrecievablesbycustomerid/{id}', 'ReportController@totalNumberRecievablesByCustomerId');
    Route::get('report/totalrecievablesbystatus/{status}', 'ReportController@totalNumberRecievablesByStatus');
    Route::get('report/totalrecievablesbytype/{type}', 'ReportController@totalNumberRecievablesByType');
    Route::get('report/totalrecievablesbydate/{date}', 'ReportController@totalNumberRecievablesByDate');
    Route::get('report/totalrecievablesbydocid/{id}', 'ReportController@totalNumberRecievablesByDocId');


    Route::get('report/totalpayables', 'ReportController@totalNumberPayables');
    Route::get('report/totalpayablesbyid/{id}', 'ReportController@totalNumberPayablesById');
    Route::get('report/totalpayablesbysupplierid/{id}', 'ReportController@totalNumberPayablesBySupplierId');
    Route::get('report/totalpayablesbystatus/{status}', 'ReportController@totalNumberPayablesByStatus');
    Route::get('report/totalpayablesbytype/{type}', 'ReportController@totalNumberPayablesByType');
    Route::get('report/totalpayablesbydate/{date}', 'ReportController@totalNumberPayablesByDate');
    Route::get('report/totalpayablesbydocid/{id}', 'ReportController@totalNumberPayablesByDocId');


    Route::get('report/totalbank', 'ReportController@totalNumberBank');
    Route::get('report/totalbankbyid/{id}', 'ReportController@totalNumberBankById');
    Route::get('report/totalbankbysupplierid/{id}', 'ReportController@totalNumberBankBySupplierId');
    Route::get('report/totalbankbycustomerrid/{id}', 'ReportController@totalNumberBankByCustomerId');
    Route::get('report/totalbankbyemployeeid/{id}', 'ReportController@totalNumberBankByEmployeeId');
    Route::get('report/totalbankbydocid/{id}', 'ReportController@totalNumberBankByDocId');
    Route::get('report/totalbankbydoctype/{type}', 'ReportController@totalNumberBankByDocType');
    Route::get('report/totalbankbydate/{date}', 'ReportController@totalNumberBankByDate');

    Route::get('report/totalcash', 'ReportController@totalNumberCash');
    Route::get('report/totalcashbyid/{id}', 'ReportController@totalNumberCashById');
    Route::get('report/totalcashbysupplierid/{id}', 'ReportController@totalNumberCashBySupplierId');
    Route::get('report/totalcashbycustomerrid/{id}', 'ReportController@totalNumberCashByCustomerId');
    Route::get('report/totalcashbyemployeeid/{id}', 'ReportController@totalNumberCashByEmployeeId');
    Route::get('report/totalcashbydocid/{id}', 'ReportController@totalNumberCashByDocId');
    Route::get('report/totalcashbydoctype/{type}', 'ReportController@totalNumberCashByDocType');
    Route::get('report/totalcashbydate/{date}', 'ReportController@totalNumberCashByDate');


    Route::get('report/totalexpensebyid/{id}', 'ReportController@totalNumberExpenseById');
    Route::get('report/totalexpensebydate/{date}', 'ReportController@totalNumberExpenseByDate');
    Route::get('report/totalexpenseitemsbyid/{id}', 'ReportController@totalNumberExpenseItemsById');


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
