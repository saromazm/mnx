<?php
    /**
     * File: ParticipationTest.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   6 Feb, 2017 | 6:9 PM
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

    use Tests\TestCase;
    use Illuminate\Foundation\Testing\DatabaseTransactions;

    class ParticipationTest extends TestCase {

        //use DatabaseTransactions;

        public function setUp() {
            parent::setUp();
        }

        /** @test */
        public function user_subscribes_to_project() {
            $e = factoryFullProject();
            $e->user->subscribeTo( $e->project );
            self::assertEquals( 1, $e->user->participationsCount() );
        }

        /** @test */
        public function user_subscribes_to_events() {
            $e = factoryFullProject();
            $e->user->subscribeTo( $e->auction );
            $e->user->subscribeTo( $e->forum );
            $e->user->subscribeTo( $e->meeting );
            self::assertEquals( 3, $e->user->participationsCount() );
        }

        /** @test */
        public function company_subscribes_to_project() {
            $e = factoryFullProject();
            $e->company->subscribeTo( $e->project );
            self::assertEquals( 1, $e->company->participationsCount() );
        }

        /** @test */
        public function company_subscribes_to_events() {
            $e = factoryFullProject();
            $e->company->subscribeTo( $e->auction );
            $e->company->subscribeTo( $e->forum );
            $e->company->subscribeTo( $e->meeting );
            self::assertEquals( 3, $e->company->participationsCount() );
        }

        /** @test */
        public function user_and_its_company_subscribes_to_project() {
            $e = factoryFullProject();

            $e->company->subscribeTo( $e->project );
            $e->user->subscribeTo( $e->project );
            $e->user->linkCompany( $e->company );

            self::assertEquals( 2, $e->user->participationsCount() );
            self::assertEquals( 2, $e->project->participantsCount() );
        }

        /** @test */
        public function user_and_its_company_subscribes_to_events() {
            $e = factoryFullProject();

            $e->company->subscribeTo( $e->auction );
            $e->company->subscribeTo( $e->forum );
            $e->company->subscribeTo( $e->meeting );
            $e->user->subscribeTo( $e->auction );
            $e->user->subscribeTo( $e->forum );
            $e->user->subscribeTo( $e->meeting );
            $e->user->linkCompany( $e->company );

            self::assertEquals( 6, $e->user->participationsCount() );
            self::assertEquals( 2, $e->auction->participantsCount() );
            self::assertEquals( 2, $e->forum->participantsCount() );
            self::assertEquals( 2, $e->meeting->participantsCount() );
        }

        /** @test */
        public function user_unsubscribes_project() {
            $e = factoryFullProject();

            $e->user->subscribeTo( $e->project );

            self::assertEquals( 1, $e->user->participationsCount() );
            self::assertEquals( 1, $e->project->participantsCount() );

            $e->user->unsubscribeFrom( $e->project );

            self::assertEquals( 0, $e->user->participationsCount() );
            self::assertEquals( 0, $e->project->participantsCount() );
        }

        /** @test */
        public function user_unsubscribes_events() {
            $e = factoryFullProject();

            $e->user->subscribeTo( $e->auction );
            $e->user->subscribeTo( $e->forum );
            $e->user->subscribeTo( $e->meeting );

            self::assertEquals( 3, $e->user->participationsCount() );
            self::assertEquals( 1, $e->auction->participantsCount() );
            self::assertEquals( 1, $e->forum->participantsCount() );
            self::assertEquals( 1, $e->meeting->participantsCount() );

            $e->user->unsubscribeFrom( $e->auction );

            self::assertEquals( 2, $e->user->participationsCount() );
            self::assertEquals( 0, $e->auction->participantsCount() );
            self::assertEquals( 1, $e->forum->participantsCount() );
            self::assertEquals( 1, $e->meeting->participantsCount() );
        }

        /** @test */
        public function company_unsubscribes_project() {
            $e = factoryFullProject();

            $e->company->subscribeTo( $e->project );

            self::assertEquals( 1, $e->company->participationsCount() );
            self::assertEquals( 1, $e->project->participantsCount() );

            $e->company->unsubscribeFrom( $e->project );

            self::assertEquals( 0, $e->company->participationsCount() );
            self::assertEquals( 0, $e->project->participantsCount() );
        }

        /** @test */
        public function company_unsubscribes_events() {
            $e = factoryFullProject();

            $e->company->subscribeTo( $e->auction );
            $e->company->subscribeTo( $e->forum );
            $e->company->subscribeTo( $e->meeting );

            self::assertEquals( 3, $e->company->participationsCount() );
            self::assertEquals( 1, $e->auction->participantsCount() );
            self::assertEquals( 1, $e->forum->participantsCount() );
            self::assertEquals( 1, $e->meeting->participantsCount() );

            $e->company->unsubscribeFrom( $e->auction );

            self::assertEquals( 2, $e->company->participationsCount() );
            self::assertEquals( 0, $e->auction->participantsCount() );
            self::assertEquals( 1, $e->forum->participantsCount() );
            self::assertEquals( 1, $e->meeting->participantsCount() );
        }

        /** @test */
        public function project_unsubscribes_participant() {
            $e = factoryFullProject();

            $e->project->subscribeParticipant( $e->user );

            self::assertEquals( 1, $e->user->participationsCount() );
            self::assertEquals( 1, $e->project->participantsCount() );

            $e->project->unsubscribeParticipant( $e->user );

            self::assertEquals( 0, $e->user->participationsCount() );
            self::assertEquals( 0, $e->project->participantsCount() );

        }

        /** @test */
        public function events_unsubscribes_participant() {
            $e = factoryFullProject();

            $e->auction->subscribeParticipant( $e->user );
            $e->forum->subscribeParticipant( $e->user );
            $e->meeting->subscribeParticipant( $e->user );

            self::assertEquals( 3, $e->user->participationsCount() );
            self::assertEquals( 1, $e->auction->participantsCount() );
            self::assertEquals( 1, $e->forum->participantsCount() );
            self::assertEquals( 1, $e->meeting->participantsCount() );

            $e->auction->unsubscribeParticipant( $e->user );

            self::assertEquals( 2, $e->user->participationsCount() );
            self::assertEquals( 0, $e->auction->participantsCount() );
            self::assertEquals( 1, $e->forum->participantsCount() );
            self::assertEquals( 1, $e->meeting->participantsCount() );
        }

        /** @test */
        public function project_unsubscribes_all_participants() {
            $e = factoryFullProject();

            $e->project->subscribeParticipant( $e->user );
            $e->project->subscribeParticipant( $e->company );

            self::assertEquals( 2, $e->project->participantsCount() );
            self::assertEquals( 1, $e->user->participationsCount() );
            self::assertEquals( 1, $e->company->participationsCount() );

            $e->project->unsubscribeAllParticipants();

            self::assertEquals( 0, $e->project->participantsCount() );
            self::assertEquals( 0, $e->user->participationsCount() );
            self::assertEquals( 0, $e->company->participationsCount() );
        }

        /** @test */
        public function events_unsubscribes_all_participants() {
            $e = factoryFullProject();

            $e->auction->subscribeParticipant( $e->user );
            $e->auction->subscribeParticipant( $e->company );
            $e->forum->subscribeParticipant( $e->user );
            $e->forum->subscribeParticipant( $e->company );
            $e->meeting->subscribeParticipant( $e->user );
            $e->meeting->subscribeParticipant( $e->company );

            self::assertEquals( 2, $e->auction->participantsCount() );
            self::assertEquals( 2, $e->forum->participantsCount() );
            self::assertEquals( 2, $e->meeting->participantsCount() );
            self::assertEquals( 3, $e->user->participationsCount() );
            self::assertEquals( 3, $e->company->participationsCount() );

            $e->auction->unsubscribeAllParticipants();
            $e->forum->unsubscribeAllParticipants();
            $e->meeting->unsubscribeAllParticipants();

            self::assertEquals( 0, $e->auction->participantsCount() );
            self::assertEquals( 0, $e->forum->participantsCount() );
            self::assertEquals( 0, $e->meeting->participantsCount() );
            self::assertEquals( 0, $e->user->participationsCount() );
            self::assertEquals( 0, $e->company->participationsCount() );
        }

        /** @test */
        public function check_if_user_is_subscribed_to_a_project() {
            $e = factoryFullProject();
            $e->user->subscribeTo( $e->project );

            self::assertTrue( $e->user->isSubscribedTo( $e->project ) );
            self::assertFalse( $e->user->isSubscribedTo( $e->auction ) );
        }

        /** @test */
        public function check_if_company_is_subscribed_to_a_project() {
            $e = factoryFullProject();
            $e->company->subscribeTo( $e->project );

            self::assertTrue( $e->company->isSubscribedTo( $e->project ) );
            self::assertFalse( $e->company->isSubscribedTo( $e->auction ) );
        }

        /** @test */
        public function check_if_project_has_a_specific_participant() {
            $e = factoryFullProject();

            $e->project->subscribeParticipant( $e->user );

            self::assertTrue( $e->project->isParticipating( $e->user ) );
            self::assertFalse( $e->project->isParticipating( $e->company ) );
        }

        /** @test */
        public function check_if_event_has_a_specific_participant() {
            $e = factoryFullProject();

            $e->auction->subscribeParticipant( $e->company );

            self::assertTrue( $e->auction->isParticipating( $e->company ) );
            self::assertFalse( $e->auction->isParticipating( $e->user ) );
        }

        /** @test */
        public function check_if_event_or_project_has_participants() {
            $e = factoryFullProject();
            $e->project->subscribeParticipant( $e->company );
            $e->auction->subscribeParticipant( $e->company );

            self::assertTrue( $e->project->isParticipating( $e->company ) );
            self::assertFalse( $e->project->isParticipating( $e->user ) );
            self::assertTrue( $e->auction->isParticipating( $e->company ) );
            self::assertFalse( $e->auction->isParticipating( $e->user ) );
        }

        /** @test */
        public function check_if_project_has_any_participants() {
            $e = factoryFullProject();
            $e->project->subscribeParticipant( $e->user );
            self::assertTrue( $e->project->haveParticipants() );
            $e->project->unsubscribeAllParticipants();
            self::assertFalse( $e->project->haveParticipants() );
        }

        /** @test */
        public function check_if_event_has_any_participants() {
            $e = factoryFullProject();
            $e->auction->subscribeParticipant( $e->user );
            self::assertTrue( $e->auction->haveParticipants() );
            $e->auction->unsubscribeAllParticipants();
            self::assertFalse( $e->auction->haveParticipants() );
        }

        /** @_test */
        public function project_gets_participants() {
            $e = factoryFullProject();
            $e->project->subscribeParticipant( $e->user );

            self::assertTrue( $e->user->is( $e->project->getParticipants()->first() ) );
        }

        /** @_test */
        public function events_gets_participants() {
            $e = factoryFullProject();
            $e->auction->subscribeParticipant( $e->user );

            self::assertTrue( $e->user->is( $e->auction->getParticipants()->first() ) );
        }


        /** @_test */
        public function user_gets_participation_project() {
            $e = factoryFullProject();
            $e->project->subscribeParticipant( $e->user );

            $participationProject = $e->user->getParticipations()->first()->getProject();
            self::assertTrue( $e->project->is( $participationProject ) );
        }

        /** @_test */
        public function user_gets_participation_event() {
            $e = factoryFullProject();
            $e->auction->linkToProject($e->project);
            $e->auction->subscribeParticipant( $e->user );

            $participationProject = $e->user->getParticipations()->first();
            dd( $participationProject->event()->with('project')->get() );
            self::assertTrue( $e->auction->is( $participationProject ) );
        }

    }