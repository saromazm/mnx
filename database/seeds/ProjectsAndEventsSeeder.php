<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Projects\Project;
    use Monoux\Models\Events\Auction;
    use Monoux\Models\Events\Meeting;
    use Monoux\Models\Events\Forum;
    use Monoux\Models\Management\User;
    use Monoux\Models\Management\Company;

    class ProjectsAndEventsSeeder extends Seeder {

        /** @var \Monoux\Utilities\fakerParticipationDates | \Faker\Factory | \Faker\Generator $faker */
        private $faker;

        /** @var \Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection|static[] | array[User] */
        private $usersE;

        /** @var \Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection|static[] | array[User] */
        private $usersI;

        /** @var \Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection|static[] | array[Company] */
        private $ciaE;

        /** @var \Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection|static[]  | array[Company] */
        private $ciaI;

        function __construct() {
            $this->faker = \Faker\Factory::create();
            $this->faker->addProvider( new \Monoux\Utilities\fakerParticipationDates( $this->faker ) );

            $this->usersE = User::external()->get();
            $this->usersI = User::internal()->get();
            $this->ciaE   = Company::whereNotIn( 'id', [1, 2, 3] )->get();
            $this->ciaI   = Company::whereIn( 'id', [1, 2, 3] )->get();
        }

        /**
         * Run the database seeds.
         * @return void
         */
        public function run() {
            $totalProjects = 200;
            $over          = $totalProjects / 4;
            $full          = $totalProjects / 4;
            $empty         = $totalProjects / 4;
            $under         = $totalProjects / 4;

            $this->fullProjects( $full );
            $this->underProjects( $under );
            $this->overProjects( $over );
            factory( Project::class, $empty )->create();

        }

        public function fullProjects( $quantity ) {

            $full = factory( Project::class, $quantity )->create();
            $full->each( function ( Project $project ) {

                $this->faker->initDatePeriod();
                $this->createMeeting( $project, $this->faker->startDatePeriod( '1 hour', '4 hours' ) );
                $this->faker->addSpaceToDatePeriod( '3 days', '7 days' );
                $this->createForum( $project, $this->faker->startDatePeriod( '3 days', '7 days' ) );
                $this->faker->addSpaceToDatePeriod( '1 day', '7 days' );
                $this->createAuction( $project, $this->faker->startDatePeriod( '12 hours', '1 week' ) );
                $this->faker->endDatePeriod();

                $this->addStaff( $project );
                $this->addSuppliers( $project );

            } );
        }

        public function underProjects( $quantity ) {
            $under = factory( Project::class, $quantity )->create();
            $under->each( function ( Project $project ) {

                $this->faker->initDatePeriod();

                $haveMeeting = rand( 0, 1 );
                $haveForum   = rand( 0, 1 );
                $haveAuction = rand( 0, 1 );
                $addPartials = rand( 0, 1 );

                if ( $haveMeeting ) {
                    $mt = $this->createMeeting( $project, $this->faker->startDatePeriod( '1 hour', '4 hours' ) );
                    $this->faker->addSpaceToDatePeriod( '3 days', '7 days' );
                    if ( $addPartials ) {
                        $this->addSuppliers( $mt, 1, 2 );
                    }
                }
                if ( $haveForum ) {
                    $fr = $this->createForum( $project, $this->faker->startDatePeriod( '3 days', '7 days' ) );
                    $this->faker->addSpaceToDatePeriod( '1 day', '7 days' );
                    if ( $addPartials ) {
                        $this->addSuppliers( $fr, 1, 2 );
                    }
                }
                if ( $haveAuction || ( !$haveMeeting && !$haveForum ) ) {
                    $ac = $this->createAuction( $project, $this->faker->startDatePeriod( '12 hours', '1 week' ) );
                    if ( $addPartials ) {
                        $this->addSuppliers( $ac, 1, 2 );
                    }
                }

                $this->faker->endDatePeriod();
                $this->addStaff( $project );

                if ( rand( 0, 1 ) ) {
                    $this->addSuppliers( $project, 1, 2 );
                }

            } );
        }

        public function overProjects( $quantity ) {
            $under = factory( Project::class, $quantity )->create();
            $under->each( function ( Project $project ) {

                $this->faker->initDatePeriod();

                $haveMeeting = rand( 0, 1 );
                $haveForum   = rand( 0, 1 );
                $haveAuction = rand( 0, 1 );
                $addPartials = rand( 0, 1 );


                $this->faker->initDatePeriod();

                $this->createMeeting( $project, $this->faker->startDatePeriod( '1 hour', '4 hours' ) );
                $this->faker->addSpaceToDatePeriod( '3 days', '7 days' );
                $this->createForum( $project, $this->faker->startDatePeriod( '3 days', '7 days' ) );
                $this->faker->addSpaceToDatePeriod( '1 day', '7 days' );
                $this->createAuction( $project, $this->faker->startDatePeriod( '12 hours', '1 week' ) );


                if ( $haveMeeting ) {
                    $mt = $this->createMeeting( $project, $this->faker->startDatePeriod( '1 hour', '4 hours' ) );
                    $this->faker->addSpaceToDatePeriod( '3 days', '7 days' );
                    if ( $addPartials ) {
                        $this->addSuppliers( $mt, 1, 2 );
                    }
                }
                if ( $haveForum ) {
                    $fr = $this->createForum( $project, $this->faker->startDatePeriod( '3 days', '7 days' ) );
                    $this->faker->addSpaceToDatePeriod( '1 day', '7 days' );
                    if ( $addPartials ) {
                        $this->addSuppliers( $fr, 1, 2 );
                    }
                }
                if ( $haveAuction ) {
                    $ac = $this->createAuction( $project, $this->faker->startDatePeriod( '12 hours', '1 week' ) );
                    if ( $addPartials ) {
                        $this->addSuppliers( $ac, 1, 2 );
                    }
                }

                $this->faker->endDatePeriod();
                $this->addStaff( $project );

                if ( rand( 0, 1 ) ) {
                    $this->addSuppliers( $project, 1, 2 );
                }

            } );
        }

        public function createMeeting( $project, $dates ) {
            /** @var Meeting $meeting */
            $meeting = factory( Meeting::class )->create();
            $meeting->setEventDates( $dates );
            $meeting->linkToProject( $project );
            return $meeting;
        }

        public function createForum( $project, $dates ) {
            /** @var Forum $forum */
            $forum = factory( Forum::class )->create();
            $forum->setEventDates( $dates );
            $forum->linkToProject( $project );
            return $forum;
        }

        public function createAuction( $project, $dates ) {
            /** @var Auction $auction */
            $auction = factory( Auction::class )->create();
            $auction->setEventDates( $dates );
            $auction->linkToProject( $project );
            return $auction;
        }


        /**
         * @param Project | Auction | Meeting | Forum $event
         */
        public function addStaff( $event ) {
            $adminCia = rand( 0, 1 );
            $event->subscribeParticipant( $adminCia ? $this->ciaI->random() : $this->usersI->random(), 12 );
        }

        /**
         * @param Project | Auction | Meeting | Forum $event
         * @param int $min
         * @param int $max
         */
        public function addSuppliers( $event, $min = 3, $max = 6 ) {
            $this->ciaE->random( rand( $min, $max ) )->each( function ( Company $cia ) use ( $event ) {
                $event->subscribeParticipant( $cia, 9 );
            } );

            if ( rand( 0, 1 ) ) {
                $this->usersE->random( rand( 1, 2 ) )->each( function ( User $usr ) use ( $event ) {
                    $event->subscribeParticipant( $usr, 9 );
                } );
            }

            if ( rand( 0, 1 ) ) {
                $this->addExtras( $event );
            }
        }

        /**
         * @param Project | Auction | Meeting | Forum $event
         */
        public function addExtras( $event ) {

            $extra = rand( 0, 1 ) ? $this->usersE->random( 3 ) : $this->ciaE->random( 3 );

            if ( rand( 0, 1 ) ) {
                $event->subscribeParticipant( $extra->random(), rand( 10, 11 ) );
                return;
            }

            if ( rand( 0, 1 ) ) {
                $event->subscribeParticipant( $extra->random(), rand( 14, 15 ) );
                return;
            }


            if ( rand( 0, 1 ) ) {
                $event->subscribeParticipant( $extra->random(), rand( 16, 17 ) );
                return;
            }

        }
    }
