<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TotalSold extends Migration
{
    public function up()
    {
        DB::statement('CREATE VIEW total_sold AS
        SELECT order_details.product_id, SUM(order_details.quantity) AS totalsold
        FROM order_details GROUP BY order_details.product_id');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS total_sold');
    }
}
