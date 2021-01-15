<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TotalAdjustment extends Migration
{
    public function up()
    {
        DB::statement('CREATE VIEW total_adjustment AS
        SELECT qty_adjustments.product_id, SUM(qty_adjustments.quantity) AS totaladjusted
        FROM qty_adjustments GROUP BY qty_adjustments.product_id');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS total_adjustment');
    }
}
