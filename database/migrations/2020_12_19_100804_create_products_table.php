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
            $table->longText('brand');
            $table->integer('category_id')->nullable()->default(null);
            $table->string('type')->nullable()->default(null);
            $table->boolean('enable_stock')->default(false);
            $table->integer('alert_quantity')->nullable();
            $table->string('sku')->nullable()->default(null);
            $table->string('urdu_sku')->nullable()->default(null);
            $table->integer('selling_price')->nullable()->default(0);
            $table->string('color')->nullable()->default(null);
            $table->boolean('is_active')->default(false);
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
