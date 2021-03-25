<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payables', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->integer('doc_id')->nullable()->default(null);
            $table->foreignId('supplier_id');
            $table->string('description')->nullable()->default(null);
            $table->integer('debit')->nullable()->default(0);
            $table->integer('credit')->nullable()->default(0);
            $table->integer('balance')->nullable()->default(0);
            $table->boolean('status')->default(false);
            $table->string('imageurl')->nullable()->default(null);
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
        Schema::dropIfExists('payables');
    }
}
