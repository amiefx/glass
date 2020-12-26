<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceivablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receivables', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->integer('doc_id');
            $table->foreignId('customer_id');
            $table->string('description')->nullable()->default(null);
            $table->integer('debit')->default(0);
            $table->integer('credit')->default(0);
            $table->integer('balance')->default(0);
            $table->boolean('status')->default(false);
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
        Schema::dropIfExists('recievables');
    }
}
