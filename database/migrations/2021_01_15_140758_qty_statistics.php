<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class QtyStatistics extends Migration
{
    public function up()
    {
        DB::statement('CREATE VIEW qty_statistics AS
        SELECT p.product_id AS product_id ,p.totalpurchased AS totalpurchased, COALESCE(s.totalsold,0) AS totalsold, 
        COALESCE(a.totaladjusted,0) AS totaladjusted, COALESCE(totalpurchased - (totalsold+totaladjusted),0) AS totalremaining
        FROM total_purchases AS p
        LEFT JOIN total_sold AS s ON s.product_id=p.product_id
        LEFT JOIN total_adjustment AS a ON s.product_id=a.product_id');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS qty_statistics');
    }
}
