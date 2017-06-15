<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Management\User;
    use Monoux\Models\Management\Company;

    class SecondaryUsersAndCompaniesSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {

            $authors = User::internal()->get();

            factory( Company::class, 150 )->create()->each( function ( $company ) use ( $authors ) {
                factory( User::class, 'full', rand( 2, 5 ) )->create( ['kind' => 'external'] )->each( function ( User $user ) use ( $company, $authors ) {
                    $user->linkCompany( $company );
                    $username = strstr( $user->getAttribute( 'username' ), '@', true ) . "@" . $company->domain;
                    $user->setAttribute( 'username', $username );
                    $user->author_id = $authors->random()->id;
                    $user->save();
                } );
            } );
        }
    }
