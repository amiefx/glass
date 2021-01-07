<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ShowRemainingQuantity extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('CREATE VIEW remaining_quantity AS 
        SELECT order_details.product_id, purchases.price, purchases.quantity AS purchase_quantity, order_details.quantity AS sold_quantity, qty_adjustments.quantity as adj_quantity, purchases.quantity-qty_adjustments.quantity+order_details.quantity as remaining_quantity
        FROM order_details, purchases, qty_adjustments
        WHERE order_details.product_id = purchases.product_id AND purchases.product_id = qty_adjustments.product_id');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS remaining_quantity');
    }
}
