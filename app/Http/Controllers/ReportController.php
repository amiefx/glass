<?php

namespace App\Http\Controllers;

use App\Http\Resources\BankResource;
use App\Http\Resources\CashResource;
use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Http\Resources\PurchaseOrderResource;
use App\Http\Resources\PurchaseResource;
use App\Models\Bank;
use App\Models\Cash;
use App\Models\Order;
use App\Models\Payable;
use App\Models\Purchase;
use App\Models\PurchaseOrder;
use App\Models\Receivable;
use Carbon\Carbon;

use App\Http\Resources\InvPurReportResource;
use App\Http\Resources\InvSalReportResource;
use App\Http\Resources\InvReportResource;

class ReportController extends Controller
{

    public function inventory_report(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request->to;
        $from = $request->from;

        $report = DB::select('SELECT pro.id AS id, pro.name, pro.sku, pro.unit_id, pro.alert_quantity AS alert_quantity, SUM(proqty.qty) AS remaining_qty, SUM(proqty.qty)*pro.selling_price AS stock_value
        FROM products AS pro
        LEFT JOIN product_qty_calc AS proqty
        ON pro.id = proqty.product_id
        GROUP BY product_id');


        return response()->json(['report' => InvReportResource::collection($report)], 200);
    }

    public function inventory_sale_report(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request->to;
        $from = $request->from;

        $report = DB::select('SELECT pro.id AS id, pro.name, pro.sku, pro.unit_id, pro.selling_price, pro.alert_quantity AS alert_quantity, SUM(qtysold.totalsold) AS sold_qty, SUM(qtysold.totalsold)*pro.selling_price AS cogs, SUM(pur.quantity) AS purchased_qty, SUM(pur.quantity)*pur.price AS sales_value, SUM(pur.quantity)*pur.price - SUM(qtysold.totalsold)*pro.selling_price AS profit
        FROM products AS pro
        LEFT JOIN total_sold AS qtysold
        ON pro.id = qtysold.product_id
        LEFT JOIN purchases as pur
        ON pur.product_id = pro.id
        GROUP BY pro.id');


        return response()->json(['report' => InvSalReportResource::collection($report)], 200);
    }
    public function inventory_purchase_report(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request->to;
        $from = $request->from;

        $report = DB::select('SELECT pro.id AS id, pro.name, pro.sku, pro.unit_id, pro.selling_price, pro.alert_quantity AS alert_quantity, SUM(pur.quantity) AS purchased_qty, SUM(pur.quantity*pur.price) AS purchase_value
        FROM products AS pro
        LEFT JOIN purchases as pur
        ON pur.product_id = pro.id
        WHERE pur.created_at BETWEEN ? AND ?
        GROUP BY pro.id', [$to, $from]);

        return response()->json(['report' => InvPurReportResource::collection($report)], 200);
    }

    

    public function salesreport(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request[1];
        $from = $request[0];

        if( isset($to) ){
            $to = Carbon::parse($to)->format('Y-m-d') .' 23:59:59' ;
        } else {
            $to = $now;
        }

        if( isset($from) ){
            $from = Carbon::parse($from)->format('Y-m-d') .' 00:00:00' ;
        } else {
            $from = date("Y-01-01");
        }

        // Cards
        $orders = OrderResource::collection(Order::where('created_at', '>=', $from)->where('created_at', '<=', $to)->get());
        $sales = $orders->sum('total');
        $discount = $orders->sum('discount');


        return response()->json([
            'orders' => $orders,
            'sales' => $sales,
            'discount' => $discount,
        ], 200);
    }

    public function purchasesreport(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request[1];
        $from = $request[0];

        if( isset($to) ){
            $to = Carbon::parse($to)->format('Y-m-d') .' 23:59:59' ;
        } else {
            $to = $now;
        }

        if( isset($from) ){
            $from = Carbon::parse($from)->format('Y-m-d') .' 00:00:00' ;
        } else {
            $from = date("Y-01-01");
        }

        // Cards
        $orders = PurchaseOrderResource::collection(PurchaseOrder::where('created_at', '>=', $from)->where('created_at', '<=', $to)->get());
        $purchases = $orders->sum('total');
        $discount = $orders->sum('discount');


        return response()->json([
            'orders' => $orders,
            'purchases' => $purchases,
            'discount' => $discount,
        ], 200);
    }

    public function cashreport(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request[1];
        $from = $request[0];

        if( isset($to) ){
            $to = Carbon::parse($to)->format('Y-m-d') .' 23:59:59' ;
        } else {
            $to = $now;
        }

        if( isset($from) ){
            $from = Carbon::parse($from)->format('Y-m-d') .' 00:00:00' ;
        } else {
            $from = date("Y-01-01");
        }

        // Cards
        $orders = CashResource::collection(Cash::where('created_at', '>=', $from)->where('created_at', '<=', $to)->get());
        $debit = $orders->sum('debit');
        $credit = $orders->sum('credit');
        $balance = $orders->sum('balance');


        return response()->json([
            'orders' => $orders,
            'debit' => $debit,
            'credit' => $credit,
            'balance' => $balance,
        ], 200);
    }

    public function bankreport(Request $request)
    {
        $now = date('Y-m-d');
        $to = $request[1];
        $from = $request[0];

        if( isset($to) ){
            $to = Carbon::parse($to)->format('Y-m-d') .' 23:59:59' ;
        } else {
            $to = $now;
        }

        if( isset($from) ){
            $from = Carbon::parse($from)->format('Y-m-d') .' 00:00:00' ;
        } else {
            $from = date("Y-01-01");
        }

        // Cards
        $orders = BankResource::collection(Bank::where('created_at', '>=', $from)->where('created_at', '<=', $to)->get());
        $debit = $orders->sum('debit');
        $credit = $orders->sum('credit');
        $balance = $orders->sum('balance');


        return response()->json([
            'orders' => $orders,
            'debit' => $debit,
            'credit' => $credit,
            'balance' => $balance,
        ], 200);
    }

    public function dashboardKpis()
    {
      $cash = Cash::all()->sum('balance');
      $bank = Bank::all()->sum('balance');
      $receivables = Receivable::all()->sum('balance');
      $payables = Payable::all()->sum('balance');
      return response()->json(['cash' => $cash, 'bank' => $bank, 'receivables' => $receivables, 'payables' => $payables ], 200);
    }

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
