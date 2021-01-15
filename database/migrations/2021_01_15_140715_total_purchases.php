<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TotalPurchases extends Migration
{
    public function up()
    {
        DB::statement('CREATE VIEW total_purchases AS
        SELECT purchases.product_id, SUM(purchases.quantity) AS totalpurchased
        FROM purchases GROUP BY purchases.product_id');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS total_purchases');
    }
}
