<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCashesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cashes', function (Blueprint $table) {
            $table->id();
            $table->string('doc_type')->nullable()->default(null);
            $table->integer('doc_id')->nullable()->default(0);
            $table->integer('customer_id')->nullable()->default(0);
            $table->integer('supplier_id')->nullable()->default(0);
            $table->integer('employee_id')->nullable()->default(0);
            $table->integer('credit')->nullable()->default(0);
            $table->integer('debit')->nullable()->default(0);
            $table->integer('balance')->nullable()->default(0);
            $table->integer('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cashes');
    }
}
