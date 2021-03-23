<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBankDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_details', function (Blueprint $table) {
            $table->id();
            $table->string('bank_name');
            $table->string('bank_short_name');
            $table->string('Branch')->nullable()->default(null);
            $table->string('Branch_code')->nullable()->default(null);
            $table->string('bank_address')->nullable()->default(null);
            $table->string('account_number');
            $table->string('account_title');
            $table->string('account_type')->nullable()->default(null);
            $table->string('kin')->nullable()->default(null);
            $table->string('cnic')->nullable()->default(null);
            $table->integer('status')->default(0);
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
        Schema::dropIfExists('bank_details');
    }
}
