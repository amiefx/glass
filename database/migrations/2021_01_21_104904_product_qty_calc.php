<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ProductQtyCalc extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('CREATE VIEW product_qty_calc AS
        SELECT product_id, totalpurchased AS qty
        FROM total_purchases

        union all

        SELECT product_id, totalsold * (-1) AS qty
        FROM total_sold

        union all

        SELECT product_id, totaladjusted AS qty
        FROM total_adjustment'
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS product_qty_calc');
    }
}
