<?php
    /**
     * File: factoryHelpers.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   23 Jan, 2017 | 3:1 AM
     *
     * This file is part of a package and all the information, intellectual
     * and technical concepts contained here are property of their owners.
     * Any kind of use, reproduction, distribution, publication, etc. without
     * express written permission from CapitalMental && BackLogics Technologies
     * is strictly forbidden.
     *
     * CapitalMental && BackLogics Technologies
     * Copyright 2014-present. | All rights reserved.
     */


    if ( !function_exists( 'factoryFullMultipleProjects' ) ) {
        function factoryFullMultipleProjects( $times = 1, $associate = true ) {
            $projects = collect( [] );
            $auctions = collect( [] );
            $meetings = collect( [] );
            $forums   = collect( [] );

            $user    = factory( \Monoux\Models\Management\User::class )->create();
            $company = factory( \Monoux\Models\Management\Company::class )->create();

            for ( $i = 0; $i < $times; $i++ ) {
                $events = factoryFullProject( false, $associate, false );
                $projects->push( $events->project );
                $auctions->push( $events->auction );
                $meetings->push( $events->meeting );
                $forums->push( $events->forum );
            }


            return new ParticipationObjects(
                $auctions->toArray(),
                $forums->toArray(),
                $meetings->toArray(),
                $forums->toArray(),
                $user,
                $company
            );
        }
    }

    if ( !function_exists( 'factoryFullProject' ) ) {

        function factoryFullProject( $includeParticipants = true, $associateToProject = false, $returnParticipationObject = true, $_user = null, $_company = null ) {

            $user    = $includeParticipants ? factory( \Monoux\Models\Management\User::class )->create() : $_user;
            $company = $includeParticipants ? factory( \Monoux\Models\Management\Company::class )->create() : $_company;
            $events  = createEvents( $associateToProject );

            $meeting = $events->meeting;
            $forum   = $events->forum;
            $auction = $events->auction;
            $project = $events->project;

            if ( !$returnParticipationObject ) {
                return $events;
            }

            return new ParticipationObjects( $auction, $forum, $meeting, $project, $user, $company );
        }
    }

    if ( !class_exists( 'ParticipationObjects' ) ) {
        class ParticipationObjects {
            /**
             * @var \Monoux\Models\Events\Auction | \Monoux\Models\Events\Auction[]
             */
            public $auction;
            /**
             * @var \Monoux\Models\Events\Forum | \Monoux\Models\Events\Forum []
             */
            public $forum;
            /**
             * @var \Monoux\Models\Events\Meeting | \Monoux\Models\Events\Meeting []
             */
            public $meeting;
            /**
             * @var \Monoux\Models\Projects\Project | \Monoux\Models\Projects\Project []
             */
            public $project;
            /**
             * @var \Monoux\Models\Management\User
             */
            public $user;
            /**
             * @var \Monoux\Models\Management\Company
             */
            public $company;

            /**
             * ParticipationObjects constructor.
             * @param $auction
             * @param $forum
             * @param $meeting
             * @param $project
             * @param $user
             * @param $company
             */
            public function __construct( $auction, $forum, $meeting, $project, $user, $company ) {
                $this->auction = $auction;
                $this->forum   = $forum;
                $this->meeting = $meeting;
                $this->project = $project;
                $this->user    = $user;
                $this->company = $company;
            }
        }
    }

    if ( !function_exists( 'createEvents' ) ) {

        function createEvents( $associate = true ) {
            /** @var \Monoux\Utilities\fakerParticipationDates | \Faker\Factory | \Faker\Generator $faker */
            $faker = \Faker\Factory::create();
            $faker->addProvider( new \Monoux\Utilities\fakerParticipationDates( $faker ) );

            /** @var \Monoux\Models\Events\Meeting $meeting */
            $meeting = factory( \Monoux\Models\Events\Meeting::class )->create();
            /** @var \Monoux\Models\Events\Forum $forum */
            $forum = factory( \Monoux\Models\Events\Forum::class )->create();
            /** @var \Monoux\Models\Events\Auction $auction */
            $auction = factory( \Monoux\Models\Events\Auction::class )->create();

            //$meeting->setEventDates( $faker->datePeriod( '-2 month', '2 month', '4 hours', '1 hour' ) );
            //$forum->setEventDates( $faker->continueDatePeriod( '1 hour', '2 days', '7 days', '3 day' ) );
            //$auction->setEventDates( $faker->continueDatePeriod( '1 day', '7 days', '7 days', '1 day' ) );

            /** @var \Monoux\Models\Projects\Project $project */
            $project = factory( \Monoux\Models\Projects\Project::class )->create();

            if ( $associate ) {
                $meeting->linkToProject( $project );
                $forum->linkToProject( $project );
                $auction->linkToProject( $project );
            }

            return (object)[
                'project' => $project,
                'auction' => $auction,
                'forum'   => $forum,
                'meeting' => $meeting,
            ];
        }

    }

    if ( !function_exists( 'userFullData' ) ) {

        function getFirstNames( $gender = 'male', Faker\Generator $faker ) {
            return collect( [$faker->firstName( $gender ), $faker->firstName( $gender )] );
        }

        function getLastNames( Faker\Generator $faker ) {
            return collect( [$faker->lastName, $faker->lastName] );
        }

        /**
         * @param \Illuminate\Support\Collection $first
         * @param \Illuminate\Support\Collection $last
         * @param  $lastNamesQuantity
         * @return string
         */
        function getPreferred( $first, $last, $lastNamesQuantity ) {
            $preferredName = $first->random( rand( 1, 2 ) )->implode( ' ' );
            $preferredLast = $last->random( rand( 1, 2 ) )->implode( ' ' );
            return implode( " ", [$preferredName, $lastNamesQuantity > 1 ? $last->implode( ' ' ) : $preferredLast] );
        }

        /**
         * @param \Illuminate\Support\Collection $first
         * @param \Illuminate\Support\Collection $last
         * @param \Illuminate\Support\Collection $separators
         * @param bool $internal
         * @param Faker\Generator $faker
         * @return string
         */
        function getUsername( $first, $last, $separators, $internal, $faker ) {

            $internalDomains = collect( $GLOBALS[ 'domains' ] );

            $nameSource     = rand( 0, 1 ) ? $first->implode( ' ' ) : $first->random( 1 )->implode( ' ' );
            $lastSource     = rand( 0, 1 ) ? $last->implode( ' ' ) : $last->first();
            $usernameBase   = collect( [rand( 0, 1 ) ? $nameSource : $nameSource[ 0 ], $lastSource] );
            $usernameParsed = $usernameBase->implode( ' ' );
            $usernameParsed = str_replace( " ", $separators->random(), $usernameParsed );
            $usernameParsed = cleanWord( $usernameParsed );
            $domain         = $internal ? $internalDomains->random() : $faker->domainName;
            return strtolower( $usernameParsed . "@" . $domain );
        }

        function userFullData( Faker\Generator $faker, $internal = false ) {

            $separators = collect( $GLOBALS[ 'domainSeparators' ] );
            $genders    = collect( $GLOBALS[ 'genders' ] );

            $finalData = collect( [] );

            $personGender     = $genders->random();
            $firstNames_array = getFirstNames( $personGender, $faker );
            $lastNames_array  = getLastNames( $faker );

            $namesQuantity     = rand( 1, 2 );
            $lastNamesQuantity = rand( 1, 2 );
            $username          = getUsername( $firstNames_array, $lastNames_array, $separators, $internal, $faker );

            $finalData->put( 'gender', $personGender );
            $finalData->put( 'first_names', $firstNames_array->random( $namesQuantity )->implode( ' ' ) );
            $finalData->put( 'last_names', $lastNames_array->random( $lastNamesQuantity )->implode( ' ' ) );
            $finalData->put( 'preferred_name', getPreferred( $firstNames_array, $lastNames_array, $lastNamesQuantity ) );
            $finalData->put( 'username', $username );
            $finalData->put( 'bday', $faker->dateTimeBetween( '-65 years', '-17 years' ) );
            $finalData->put( 'author_id', 1 );
            return $finalData->toArray();
        }
    }

    if ( !function_exists( 'companyData' ) ) {
        function companyData( Faker\Generator $faker ) {

            $finalData = collect( [] );

            $company      = $faker->company;
            $companyWords = collect( explode( " ", $company ) );
            $validWords   = $companyWords->reject( function ( $val ) {
                return str_contains( $val, [
                    ' and ', 'LLC', 'Group', 'PLC', 'Sons', 'Inc', 'Ltd'
                ] );
            } );
            $shortName    = cleanWord( $validWords->random( rand( 1, $validWords->count() ) )->implode( " " ) );

            $finalData->put( 'name', $company );
            $finalData->put( 'shortName', str_replace( ",", "", $shortName ) );
            $finalData->put( 'domain', domainWord( $shortName ) );
            $finalData->put( 'code', strtolower( str_replace( " ", '', $finalData->get( 'shortName' ) ) ) );
            return $finalData->toArray();
        }
    }

    if ( !function_exists( 'cleanWord' ) ) {
        function cleanWord( $word ) {
            return str_replace( ["'", '"', "`", "´"], "", $word );
        }
    }

    if ( !function_exists( 'domainWord' ) ) {
        function domainWord( $word ) {
            $domains    = collect( ['.com', '.net', '.org', '.com.mx', '.mx', '.us', '.io', '.gov', '.gob.mx'] );
            $separators = collect( ['-', '_', ''] );
            $word       = str_replace( ",", "", $word );
            $domain     = strtolower( str_replace( [" ", '.', "-"], $separators->random(), $word ) );
            return $domain . $domains->random();
        }
    }