<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id');
            $table->integer('sub_total')->default(0);
            $table->integer('discount')->nullable()->default(0);
            $table->integer('total')->default(0);
            $table->integer('amount_recieved')->nullable()->default(0);
            $table->integer('polish')->nullable()->default(0);
            $table->json('note')->nullable()->default(null);
            $table->string('status')->nullable()->default(null);
            $table->string('walkin_name')->nullable()->default(null);
            $table->string('walkin_phone')->nullable()->default(null);
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
        Schema::dropIfExists('orders');
    }
}
