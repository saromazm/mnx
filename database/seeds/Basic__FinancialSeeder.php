<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Management\Company;

    use Monoux\Models\Financial\Customer;
    use Monoux\Models\Financial\Contract;
    use Monoux\Models\Financial\Invoice;
    use Monoux\Models\Financial\Plan;
    use Monoux\Models\Financial\Discount;

    class Basic__FinancialSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {

            //Plans && Discounts
            factory( Plan::class, 15 )->create();
            factory( Discount::class, 10 )->create();


            $companies = Company::whereNotIn( 'id', [1, 2, 3] )->get();
            $total     = $companies->count();

            // Customers
            $customers = $companies->random( round( $total * .3 ) )->each( function ( $item ) {
                factory( Customer::class )->create( ['company_id' => $item->id] );
            } );


        }
    }
