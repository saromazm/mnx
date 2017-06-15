<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Support\Support;
    use Monoux\Models\Support\Ticket;

    class Basic__SupportSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {

            $tickets  = 10;
            $supports = 10;

            factory( Support::class, $supports )->create();
            factory( Ticket::class, $tickets )->create();
        }
    }
