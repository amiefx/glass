<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Recievablesbyphone extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('CREATE VIEW recievablesbyphone AS
        SELECT ord.id, ord.customer_id, sum(ord.sub_total) AS sub_total, sum(ord.total) AS total, sum(ord.amount_recieved) AS amount_recieved, ord.walkin_name, ord.walkin_phone, sum(rec.debit) AS debit, sum(rec.credit) AS credit, sum(rec.balance) as balance
        FROM orders as ord
        LEFT JOIN recievables as rec
        ON rec.doc_id = ord.id
        GROUP BY ord.walkin_phone');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS recievablesbyphone');
    }
}
