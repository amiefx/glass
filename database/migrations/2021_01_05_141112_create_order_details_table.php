<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id'); 
            $table->integer('product_id');
            $table->float('quantity')->nullable()->default(null);
            $table->integer('price')->nullable()->default(null); 
            $table->string('g_height')->nullable()->default(null);
            $table->string('g_width')->nullable()->default(null);
            $table->string('g_number')->nullable()->default(null);
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
        Schema::dropIfExists('order_details');
    }
}
