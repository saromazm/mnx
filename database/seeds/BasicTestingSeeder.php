<?php

    use Illuminate\Database\Seeder;

    class BasicTestingSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {
            /** @var \Monoux\Models\Management\User $user */
            $user    = factory( \Monoux\Models\Management\User::class )->create();
            $company = factory( \Monoux\Models\Management\Company::class )->create();
            $user->linkCompany( $company );

            for ( $i = 0; $i < 20; $i++ ) {
                $joined = $i < 10;
                $events = factoryFullProject( false, $joined, true );
                if ( $joined ) {
                    if ( rand( 0, 1 ) ) {
                        if ( rand( 0, 1 ) ) {
                            $events->project->subscribeParticipant( $user );
                        } else {
                            $events->auction->subscribeParticipant( $user );
                        }

                    } else {
                        if ( rand( 0, 1 ) ) {
                            $events->project->subscribeParticipant( $company );
                        } else {
                            $events->forum->subscribeParticipant( $company );
                        }

                    }
                } else {
                    if ( rand( 0, 1 ) ) {
                        if ( rand( 0, 1 ) ) {
                            $events->auction->subscribeParticipant( $company );
                        } else {
                            $events->forum->subscribeParticipant( $user );
                        }

                    } else {
                        if ( rand( 0, 1 ) ) {
                            $events->forum->subscribeParticipant( $company );
                        } else {
                            $events->meeting->subscribeParticipant( $company );
                        }
                    }
                }
            }
            /* $companies = createEvents();
             $projects  = factory( \Monoux\Models\Management\Company::class, 10 )->create();
             //$  = factory(\Monoux\Models\Management\Company::class,10)->create();
             $e = factoryFullProject();*/
        }
    }
