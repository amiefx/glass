<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQtyAdjustmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qty_adjustments', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id'); 
            $table->integer('product_id');
            $table->integer('quantity')->nullable()->default(null);
            $table->integer('price')->nullable()->default(null);
            $table->foreignId('user_id');
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
        Schema::dropIfExists('qty_adjustments');
    }
}
