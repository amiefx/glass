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
            $table->enum('type', ['Single', 'Variable']);
            $table->integer('unit_id')->nullable()->default(null);
            $table->integer('brand_id')->nullable()->default(null);
            $table->integer('category_id')->nullable()->default(null);
            $table->integer('tax')->nullable()->default(null);
            $table->enum('tax_type', ['inclusive', 'exclusive']);
            $table->tinyInteger('enable_stock')->default(0);
            $table->integer('alert_quantity');
            $table->string('sku');
            $table->enum('barcode_type', ['C39', 'C128', 'EAN13', 'EAN8', 'UPCA', 'UPCE'])->nullable()->default('C128');
            $table->tinyInteger('enable_serial_no')->default(0);
            $table->string('weight')->nullable()->default(null);
            $table->Integer('created_by');
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
