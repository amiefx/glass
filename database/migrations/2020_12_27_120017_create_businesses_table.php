<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->string('email')->nullable()->default(null);
            $table->string('phone')->nullable()->default(null);
            $table->string('whatsapp')->nullable()->default(null); 
            $table->string('country')->nullable()->default(null);
            $table->string('city')->nullable()->default(null);
            $table->string('zipcode')->nullable()->default(null);
            $table->string('address');
            $table->string('logo')->nullable()->default(null);
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
        Schema::dropIfExists('business');
    }
}
