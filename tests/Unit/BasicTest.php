<?php
    /**
     * File: BasicTest.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   30 Jan, 2017 | 6:58 AM
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
    namespace Tests\Unit;

    use Carbon\Carbon;
    use Monoux\Models\Events\Auction;
    use Monoux\Models\Events\Forum;
    use Monoux\Models\Events\Meeting;
    use Monoux\Models\Management\Company;
    use Monoux\Models\Management\Contact;
    use Monoux\Models\Management\User;
    use Monoux\Models\Projects\Project;
    use Tests\TestCase;
    use Illuminate\Foundation\Testing\DatabaseTransactions;

    class BasicTest extends TestCase {

        //use DatabaseTransactions;


        /** @test */
        public function preBasic() {
            /** @var Project $proj */
            /** @var Auction $auc */
            $proj = factory( Project::class )->create();
            $auc  = factory( Auction::class )->create();
            $auc->setEventDates( Carbon::now(), Carbon::now()->addDays( 8 ) );
        }


        /** @test */
        public function basic1() {
            $e = factoryFullProject();
            $e->auction->linkToProject( $e->project );
            $e->auction->subscribeParticipant( $e->user );
            $e->auction->setEventDates( Carbon::now(), Carbon::now()->addDays( 8 ) );

            //dd($e->auction->getProject());
            self::assertNotEmpty( $e->project );
            self::assertEquals( $e->auction->getProject()->id, $e->project->id );
            self::assertTrue( $e->auction->doesBelongToProject( $e->project ) );
        }


        /** @test */
        public function Basic2() {

            /**
             * @var Auction $auction
             * @var Forum $forum
             * @var Meeting $meeting
             * @var Project $project
             * @var User $user
             * @var Company $company
             */
            factory(Contact::class)->create();
            $auction = factory( Auction::class )->create();
            $forum   = factory( Forum::class )->create();
            $meeting = factory( Meeting::class )->create();
            $project = factory( Project::class )->create();
            $user    = factory( User::class )->create();
            $user2    = factory( User::class )->create();
            $company = factory( Company::class )->create();

            $user->linkCompany( $company );
            $company->linkUser( $user );
            // dd($user->getCompanies()->first(), $company);
            self::assertEquals( 1, $company->contactsCount() );
            self::assertEquals( $user->getCompanies()->first()->id, $company->id );
            self::assertEquals( 1, $user->participationsCount() );
        }

    }

