<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Management\User;
    use Monoux\Models\Management\Contact;
    use Monoux\Models\Management\Company;

    class MainUsersAndCompaniesSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {
            $this->allMightyUser();
            $this->allMightyCompanies();
        }

        protected function allMightyUser() {
            return factory( User::class )->create( [
                    'username'   => 'mzamoras@backlogics.com',
                    'status'     => 'active',
                    'kind'       => "internal",
                    'author_id'  => 1,
                    'contact_id' => factory( Contact::class )->create( [
                            'first_names'    => "System Admin",
                            'last_names'     => "CapitalMental",
                            'preferred_name' => "All Mighty",
                            'gender'         => 'male',
                        ] )->id
                ] );
        }

        protected function allMightyCompanies() {

            $companiesData = [
                ['Capital Mental S.A. de C.V.', 'CapitalMental', 'capitalmental', 'capitalmental.com'],
                ['Monoux S.A. de C.V.', 'Monoux', 'monoux', 'monoux.com'],
                ['BackLogics S.A. de C.V.', 'BackLogics', 'backlogics', 'backlogics.com'],
            ];

            foreach ( $companiesData as $ciaInfo ) {

                $company = factory( Company::class )->create( [
                    'name'       => $ciaInfo[ 0 ],
                    'short_name' => $ciaInfo[ 1 ],
                    'code'       => $ciaInfo[ 2 ],
                    'domain'     => $ciaInfo[ 3 ],
                    'author_id'  => 1,
                ] );

                factory( User::class, 'full', rand( 5, 15 ) )->create( ['kind' => 'internal'] )->each( function ( User $user ) use ( $company ) {
                        $user->linkCompany( $company );
                        $username = strstr( $user->getAttribute( 'username' ), '@', true ) . "@" . $company->domain;
                        $user->setAttribute( 'username', $username );
                        $user->save();
                    } );
            }
        }
    }
