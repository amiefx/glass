<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->integer('unit_id')->nullable()->default(null);
            $table->integer('brand_id')->nullable()->default(null);
            $table->integer('category_id')->nullable()->default(null); 
            $table->tinyInteger('enable_stock')->default(0);
            $table->integer('alert_quantity');
            $table->string('sku'); 
            $table->integer('selling_price')->default(0);
            $table->string('length')->nullable()->default(null);
            $table->string('height')->nullable()->default(null);
            $table->string('width')->nullable()->default(null);
            $table->string('thickness')->nullable()->default(null);
            $table->string('weight')->nullable()->default(null);
            $table->string('size')->nullable()->default(null);
            $table->string('color')->nullable()->default(null);
            $table->tinyInteger('is_active')->default(1);
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
        Schema::dropIfExists('products');
    }
}
