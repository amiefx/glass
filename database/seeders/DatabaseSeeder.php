<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        DB::table('products')->insert([
            'name' => 'green sheet',
            'alert_quantity' => 100,
            'sku' => 10,
            'user_id' => 10,
        ]);


        DB::table('purchases')->insert([
            'order_id' => 1,
            'product_id' => 1,
            'quantity' => 10,
            'price' => 120,
            'is_active' => 1,
            'user_id' => 10,
        ]);

        DB::table('qty_adjustments')->insert([
            'order_id' => 1,
            'product_id' => 1,
            'quantity' => 5,
            'price' => 160, 
            'user_id' => 10,
        ]);

        DB::table('order_details')->insert([
            'order_id' => 1,
            'product_id' => 1,
            'quantity' => 3,
            'price' => 200
        ]);

        DB::table('brands')->insert([
            'id' => 1,
            'name' => 'china'
        ]);

        DB::table('categories')->insert([
            'id' => 1,
            'name' => 'dress',
            'short_code' => 'drs'
        ]);

        DB::table('units')->insert([
            'id' => 1,
            'actual_name' => 'kilogram',
            'short_name' => 'kg'
        ]);

    }
}
