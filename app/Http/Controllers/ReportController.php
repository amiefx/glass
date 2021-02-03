<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;

class ReportController extends Controller
{
    public function totalNumberProducts()
    {
        $products = DB::table('products')->count();

        $activeproducts = DB::table('products')->where('is_active', '=', 1)->count();

        return response()->json(['products' => $products, 'activeproducts' => $activeproducts], 200);

    }

    public function totalNumberUsers()
    {
        $users = DB::table('users')->count();

        $activeusers = DB::table('users')->where('is_active', '=', 1)->count();

        return response()->json(['users' => $users, 'activeusers' => $activeusers], 200);
    }

    public function totalNumberSuppliers()
    {
        $suppliers = DB::table('suppliers')->count();

        $activesuppliers = DB::table('suppliers')->where('is_active', '=', 1)->count();

        return response()->json(['suppliers' => $suppliers, 'activesuppliers' => $activesuppliers], 200);
    }

    public function totalNumberCustomers()
    {
        $customers = DB::table('customers')->count();

        $activecustomers = DB::table('customers')->where('is_active', '=', 1)->count();

        return response()->json(['customers' => $customers, 'activecustomers' => $activecustomers], 200);
    }

    public function totalNumberEmployees()
    {
        $employees = DB::table('employees')->count();

        $activeemployees = DB::table('employees')->where('is_active', '=', 1)->count();

        return response()->json(['employees' => $employees, 'activeemployees' => $activeemployees], 200);
    }

    public function totalNumberPurchaseOrders()
    {
        $purchase_orders = DB::table('purchase_orders')->count();

        return response()->json(['purchase_orders' => $purchase_orders], 200);
    }

    public function totalNumberPurchaseOrdersById($id)
    {
        $purchase_order = DB::table('purchase_orders')->where('id', '=', $id)->get();

        return response()->json(['purchase_order' => $purchase_order], 200);
    }

    public function totalNumberPurchaseOrdersBySupplierId($id)
    {
        $count = DB::table('purchase_orders')->where('supplier_id', '=', $id)->count();
        $purchase_order = DB::table('purchase_orders')->where('supplier_id', '=', $id)->get();

        return response()->json(['count' => $count, 'purchase_order' => $purchase_order], 200);
    }

    public function totalNumberPurchaseOrdersByStatus($status)
    {
        $count = DB::table('purchase_orders')->where('status', '=', $status)->count();
        $purchase_orders = DB::table('purchase_orders')->where('status', '=', $status)->get();

        return response()->json(['count' => $count, 'purchase_orders' => $purchase_orders], 200);
    }

    public function totalNumberPurchaseOrdersByDate($date)
    {
        $count = DB::table('purchase_orders')->where('created_at', 'like', "$date%")->count();
        $purchase_orders = DB::table('purchase_orders')->where('created_at', 'like', "$date%")->get();

        return response()->json(['count' => $count, 'purchase_orders' => $purchase_orders], 200);
    }

    public function totalNumberPurchaseItemsByOrderId($id)
    {
        $count = DB::table('purchases')->where('order_id', '=', $id)->count();
        $purchase_orders_items = DB::table('purchases')->where('order_id', '=', $id)->get();

        return response()->json(['count' => $count, 'purchase_orders_items' => $purchase_orders_items], 200);
    }



    public function totalNumberOrders()
    {
        $orders = DB::table('orders')->count();

        return response()->json(['orders' => $orders], 200);
    }

    public function totalNumberOrdersById($id)
    {
        $order = DB::table('orders')->where('id', '=', $id)->get();

        return response()->json(['order' => $order], 200);
    }

    public function totalNumberOrdersByCustomerId($id)
    {
        $count = DB::table('orders')->where('customer_id', '=', $id)->count();
        $order = DB::table('orders')->where('customer_id', '=', $id)->get();

        return response()->json(['count' => $count, 'order' => $order], 200);
    }

    public function totalNumberOrdersByStatus($status)
    {
        $count = DB::table('orders')->where('status', '=', $status)->count();
        $orders = DB::table('orders')->where('status', '=', $status)->get();

        return response()->json(['count' => $count, 'orders' => $orders], 200);
    }

    public function totalNumberOrdersByDate($date)
    {
        $count = DB::table('orders')->where('created_at', 'like', "$date%")->count();
        $orders = DB::table('orders')->where('created_at', 'like', "$date%")->get();

        return response()->json(['count' => $count, 'orders' => $orders], 200);
    }
    
    public function totalNumberOrderItemsByOrderId($id)
    {
        $count = DB::table('order_details')->where('order_id', '=', $id)->count();
        $orders_items = DB::table('order_details')->where('order_id', '=', $id)->get();

        return response()->json(['count' => $count, 'orders_items' => $orders_items], 200);
    }




    public function totalNumberRecievables()
    {
        $recievables = DB::table('recievables')->count();

        return response()->json(['recievables' => $recievables], 200);
    }

    public function totalNumberRecievablesById($id)
    {
        $recievables = DB::table('recievables')->where('id', '=', $id)->get();

        return response()->json(['recievables' => $recievables], 200);
    }

    public function totalNumberRecievablesByCustomerId($id)
    {
        $count = DB::table('recievables')->where('customer_id', '=', $id)->count();
        $recievables = DB::table('recievables')->where('customer_id', '=', $id)->get();

        return response()->json(['count' => $count, 'recievables' => $recievables], 200);
    }

    public function totalNumberRecievablesByStatus($status)
    {
        $count = DB::table('recievables')->where('status', '=', $status)->count();
        $recievables = DB::table('recievables')->where('status', '=', $status)->get();

        return response()->json(['count' => $count, 'recievables' => $recievables], 200);
    }

    public function totalNumberRecievablesByType($type)
    {
        $count = DB::table('recievables')->where('type', '=', $type)->count();
        $recievables = DB::table('recievables')->where('type', '=', $type)->get();

        return response()->json(['count' => $count, 'recievables' => $recievables], 200);
    }

    public function totalNumberRecievablesByDate($date)
    {
        $count = DB::table('recievables')->where('created_at', 'like', "$date%")->count();
        $recievables = DB::table('recievables')->where('created_at', 'like', "$date%")->get();

        return response()->json(['count' => $count, 'recievables' => $recievables], 200);
    }
    
    public function totalNumberRecievablesByDocId($id)
    {
        $count = DB::table('recievables')->where('doc_id', '=', $id)->count();
        $recievables = DB::table('recievables')->where('doc_id', '=', $id)->get();

        return response()->json(['count' => $count, 'recievables' => $recievables], 200);
    }


    

    public function totalNumberPayables()
    {
        $payables = DB::table('payables')->count();

        return response()->json(['payables' => $payables], 200);
    }

    public function totalNumberPayablesById($id)
    {
        $payables = DB::table('payables')->where('id', '=', $id)->get();

        return response()->json(['payables' => $payables], 200);
    }

    public function totalNumberPayablesBySupplierId($id)
    {
        $count = DB::table('payables')->where('supplier_id', '=', $id)->count();
        $payables = DB::table('payables')->where('supplier_id', '=', $id)->get();

        return response()->json(['count' => $count, 'payables' => $payables], 200);
    }

    public function totalNumberPayablesByStatus($status)
    {
        $count = DB::table('payables')->where('status', '=', $status)->count();
        $payables = DB::table('payables')->where('status', '=', $status)->get();

        return response()->json(['count' => $count, 'payables' => $payables], 200);
    }

    public function totalNumberPayablesByType($type)
    {
        $count = DB::table('payables')->where('type', '=', $type)->count();
        $payables = DB::table('payables')->where('type', '=', $type)->get();

        return response()->json(['count' => $count, 'payables' => $payables], 200);
    }

    public function totalNumberPayablesByDate($date)
    {
        $count = DB::table('payables')->where('created_at', 'like', "$date%")->count();
        $payables = DB::table('payables')->where('created_at', 'like', "$date%")->get();

        return response()->json(['count' => $count, 'payables' => $payables], 200);
    }
    
    public function totalNumberPayablesByDocId($id)
    {
        $count = DB::table('payables')->where('doc_id', '=', $id)->count();
        $payables = DB::table('payables')->where('doc_id', '=', $id)->get();

        return response()->json(['count' => $count, 'payables' => $payables], 200);
    }




    //bank
    public function totalNumberBank()
    {
        $banks = DB::table('banks')->count();
        return response()->json(['banks' => $banks], 200);
    }

    public function totalNumberBankById($id)
    {
        $bank = DB::table('banks')->where('id', '=', $id)->get();
        return response()->json(['bank' => $bank], 200);
    }

    public function totalNumberBankBySupplierId($id)
    {
        $count = DB::table('banks')->where('supplier_id', '=', $id)->count();
        $banks = DB::table('banks')->where('supplier_id', '=', $id)->get();
        return response()->json(['count' => $count, 'banks' => $banks], 200);
    }

    public function totalNumberBankByCustomerId($id)
    {
        $count = DB::table('banks')->where('customer_id', '=', $id)->count();
        $banks = DB::table('banks')->where('customer_id', '=', $id)->get();
        return response()->json(['count' => $count, 'banks' => $banks], 200);
    }

    public function totalNumberBankByEmployeeId($id)
    {
        $count = DB::table('banks')->where('employee_id', '=', $id)->count();
        $banks = DB::table('banks')->where('employee_id', '=', $id)->get();
        return response()->json(['count' => $count, 'banks' => $banks], 200);
    }

    public function totalNumberBankByDocType($type)
    {
        $count = DB::table('banks')->where('doc_type', '=', $type)->count();
        $banks = DB::table('banks')->where('doc_type', '=', $type)->get();

        return response()->json(['count' => $count, 'ban$banks' => $banks], 200);
    }

    public function totalNumberBankByDate($date)
    {
        $count = DB::table('banks')->where('created_at', 'like', "$date%")->count();
        $banks = DB::table('banks')->where('created_at', 'like', "$date%")->get();

        return response()->json(['count' => $count, 'banks' => $banks], 200);
    }
    
    public function totalNumberBankByDocId($id)
    {
        $count = DB::table('banks')->where('doc_id', '=', $id)->count();
        $banks = DB::table('banks')->where('doc_id', '=', $id)->get();

        return response()->json(['count' => $count, 'banks' => $banks], 200);
    }



    //cash
    public function totalNumberCash()
    {
        $cashes = DB::table('cashes')->count();
        return response()->json(['cashes' => $cashes], 200);
    }

    public function totalNumberCashById($id)
    {
        $cashe = DB::table('cashes')->where('id', '=', $id)->get();
        return response()->json(['cashe' => $cashe], 200);
    }

    public function totalNumberCashBySupplierId($id)
    {
        $count = DB::table('cashes')->where('supplier_id', '=', $id)->count();
        $cashes = DB::table('cashes')->where('supplier_id', '=', $id)->get();
        return response()->json(['count' => $count, 'cashes' => $cashes], 200);
    }

    public function totalNumberCashByCustomerId($id)
    {
        $count = DB::table('cashes')->where('customer_id', '=', $id)->count();
        $cashes = DB::table('cashes')->where('customer_id', '=', $id)->get();
        return response()->json(['count' => $count, 'cashes' => $cashes], 200);
    }

    public function totalNumberCashByEmployeeId($id)
    {
        $count = DB::table('cashes')->where('employee_id', '=', $id)->count();
        $cash = DB::table('cashes')->where('employee_id', '=', $id)->get();
        return response()->json(['count' => $count, 'cash' => $cash], 200);
    }

    public function totalNumberCashByDocType($type)
    {
        $count = DB::table('cashes')->where('doc_type', '=', $type)->count();
        $cashes = DB::table('cashes')->where('doc_type', '=', $type)->get();

        return response()->json(['count' => $count, 'cashes' => $cashes], 200);
    }

    public function totalNumberCashByDate($date)
    {
        $count = DB::table('cashes')->where('created_at', 'like', "$date%")->count();
        $cashes = DB::table('cashes')->where('created_at', 'like', "$date%")->get();

        return response()->json(['count' => $count, 'cashes' => $cashes], 200);
    }
    
    public function totalNumberCashByDocId($id)
    {
        $count = DB::table('cashes')->where('doc_id', '=', $id)->count();
        $cashes = DB::table('cashes')->where('doc_id', '=', $id)->get();

        return response()->json(['count' => $count, 'cashes' => $cashes], 200);
    }


    //expenses
    public function totalNumberExpenseById($id)
    {
        $count = DB::table('expenses')->where('id', '=', $id)->count();
        $expense = DB::table('expenses')->where('id', '=', $id)->get();

        return response()->json(['count' => $count, 'expense' => $expense], 200);
    }

    public function totalNumberExpenseByDate($date)
    {
        $count = DB::table('expenses')->where('created_at', 'like', "$date%")->count();
        $expenses = DB::table('expenses')->where('created_at', 'like', "$date%")->get();

        return response()->json(['count' => $count, 'expenses' => $expenses], 200);
    }
    
    public function totalNumberExpenseItemsById($id)
    {
        $count = DB::table('expense_items')->where('id', '=', $id)->count();
        $expense_items = DB::table('expense_items')->where('id', '=', $id)->get();

        return response()->json(['count' => $count, 'expense_items' => $expense_items], 200);
    }



}
