<?php
    /**
     * File: factoryTest.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   24 Jan, 2017 | 10:14 PM
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
    use Illuminate\Foundation\Testing\WithoutMiddleware;
    use Illuminate\Foundation\Testing\DatabaseMigrations;
    use Illuminate\Foundation\Testing\DatabaseTransactions;
    use Monoux\Models\Management\User;
    use Monoux\Models\Management\Contact;
    use Monoux\Models\Management\Company;
    use Monoux\Models\Projects\Project;
    use Monoux\Models\Events\Auction;
    use Monoux\Models\Events\Forum;
    use Monoux\Models\Events\Meeting;
    use Monoux\Models\Events\Event;

    class factoryTest extends TestCase {

        //use DatabaseTransactions;

        /** @test */
        public function test_factories() {
            $contact = factory( Contact::class )->create();
            $user    = factory( User::class )->create();
            $company = factory( Company::class )->create();
            $project = factory( Project::class )->create();
            $auction = factory( Auction::class )->create();
            $forum   = factory( Forum::class )->create();
            $meeting = factory( Meeting::class )->create();


            $this->assertEquals( $user->id, User::latest()->first()->id );
            //$this->assertEquals( $contact->id, Contact::latest()->first()->id );
            $this->assertEquals( $company->id, Company::latest()->first()->id );
            $this->assertEquals( $project->id, Project::latest()->first()->id );
            $this->assertEquals( $auction->id, Auction::latest()->first()->id );
            $this->assertEquals( $forum->id, Forum::latest()->first()->id );
            $this->assertEquals( $meeting->id, Meeting::latest()->first()->id );
        }

        /** @test */
        public function full_project_creation() {
            $elements = factoryFullProject();

            self::assertNotEmpty( $elements->auction );
        }

        /** @test */
        public function author_gets_automatically_set() {

            $user    = factory( User::class )->create();
            $contact = factory( Contact::class )->create();
            $company = factory( Company::class )->create();
            $project = factory( Project::class )->create();
            $auction = factory( Auction::class )->create();
            $forum   = factory( Forum::class )->create();
            $meeting = factory( Meeting::class )->create();

            self::assertEquals( 1, $user->author_id );
            self::assertEquals( 1, $contact->author_id );
            self::assertEquals( 1, $company->author_id );
            self::assertEquals( 1, $project->author_id );
            self::assertEquals( 1, $auction->author_id );
            self::assertEquals( 1, $forum->author_id );
            self::assertEquals( 1, $meeting->author_id );
        }


        /** @test */
        public function contact_links_to_company() {
            $e       = factoryFullProject();
            $contact = $e->user->getContact();
            $contact->linkCompany( $e->company );
            $contact->linkCompany( $e->company );

            self::assertEquals( 1, $contact->companiesCount(), "Count of companies" );
        }

        /** @test */
        public function contact_unlinks_from_company() {
            $e       = factoryFullProject();
            $contact = $e->user->getContact();
            $contact->linkCompany( $e->company );
            $contact->linkCompany( $e->company );

            self::assertEquals( 1, $contact->companiesCount(), "Count of companies = 1" );
            $contact->unlinkCompany( $e->company );
            self::assertEquals( 0, $contact->companiesCount(), "Count of companies = 0" );
        }

        /** @test */
        public function user_links_to_company() {
            $e = factoryFullProject();
            $e->user->linkCompany( $e->company );
            $e->user->linkCompany( $e->company );

            self::assertEquals( 1, $e->user->companiesCount() );
        }

        /** @test */
        public function user_unlinks_from_company() {

            $e = factoryFullProject();
            $e->user->linkCompany( $e->company );
            $e->user->linkCompany( $e->company );

            self::assertEquals( 1, $e->user->fresh()->companiesCount() );

            $e->user->unlinkCompany( $e->company );

            self::assertEquals( 0, $e->user->fresh()->companiesCount() );
        }


        /** @test */
        public function project_sets_owner() {
            /** @var Project $project */
            $project = factory( Project::class )->create();
            $company = factory( Company::class )->create();

            $project->setOwner( $company );
            self::assertEquals( $company->id, $project->getOwner()->id );

            $project->leaveOwner();
            self::assertEquals( null, $project->getOwner() );
        }


        /** @test */
        public function auction_becomes_part_of_a_project() {
            /** @var Project $project */
            /** @var Auction $auction */
            $project = factory( Project::class )->create();
            $auction = factory( Auction::class )->create();

            $auction->linkToProject( $project );
            $auction->linkToProject( $project );

            self::assertEquals( $project->id, $auction->getProject()->id );
            self::assertTrue( $auction->doesBelongToProject( $project ) );

            $auction->leaveProject();
            self::assertEquals( null, $auction->getProject() );
        }


        /** @test */
        public function users_subscribes_to_a_project() {
            /** @var Project $project */
            /** @var User $user */
            $project = factory( Project::class )->create();
            $user    = factory( User::class )->create();

            $user->subscribeTo( $project );
            $user->subscribeTo( $project );

            self::assertEquals( 1, $user->participationsCount() );
            self::assertTrue( $user->isSubscribedTo( $project ) );
        }

        /** @test */
        public function users_unsubscribes_to_a_project() {
            /** @var Project $project */
            /** @var User $user */
            $project = factory( Project::class )->create();
            $user    = factory( User::class )->create();

            $user->subscribeTo( $project );
            self::assertEquals( 1, $user->participationsCount() );
            self::assertTrue( $user->isSubscribedTo( $project ) );

            $user->unsubscribeFrom( $project );
            self::assertEquals( 0, $user->participationsCount() );
            self::assertFalse( $user->isSubscribedTo( $project ) );
        }


        /** @test */
        public function project_adds_participant() {
            /** @var Project $project */
            /** @var User $user */
            /** @var User $user1 */
            $project = factory( Project::class )->create();
            $user    = factory( User::class )->create();
            $user1   = factory( User::class )->create();

            $user->subscribeTo( $project );
            $project->subscribeParticipant( $user1 );

            self::assertEquals( 2, $project->participantsCount() );

        }

        /** @test */
        public function project_removes_participant() {
            /** @var Project $project */
            /** @var User $user */
            /** @var User $user1 */
            $project = factory( Project::class )->create();
            $user    = factory( User::class )->create();
            $user1   = factory( User::class )->create();

            $user->subscribeTo( $project );
            $project->subscribeParticipant( $user1 );
            $project->unsubscribeParticipant( $user );

            self::assertEquals( 1, $project->participantsCount() );
        }


        /** @test */
        public function all_events_get_participants_subscribed() {
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
        }


        /** @test */
        public function all_participants_subscribes_to_all_events() {
            $e = factoryFullProject();

            $e->user->subscribeTo( $e->auction );
            $e->user->subscribeTo( $e->forum );
            $e->user->subscribeTo( $e->meeting );

            $e->company->subscribeTo( $e->auction );
            $e->company->subscribeTo( $e->forum );
            $e->company->subscribeTo( $e->meeting );

            self::assertEquals( 3, $e->user->participationsCount() );
            self::assertEquals( 3, $e->company->participationsCount() );
        }


        /** @test */
        public function project_associates_events() {
            $e = factoryFullProject();

            $e->project->associateEvent( $e->auction );
            $e->project->associateEvent( $e->forum );
            $e->project->associateEvent( $e->meeting );

            self::assertEquals( 3, $e->project->events()->count() );
        }


        /** @test */
        public function project_dissociates_all_events_individually() {
            $e = factoryFullProject();

            $e->project->associateEvent( $e->auction );
            $e->project->associateEvent( $e->forum );
            $e->project->associateEvent( $e->meeting );

            self::assertEquals( 3, $e->project->events()->count() );

            $e->project->dissociateEvent( $e->auction );
            $e->project->dissociateEvent( $e->forum );
            $e->project->dissociateEvent( $e->meeting );

            self::assertEquals( 0, $e->project->events()->count() );
        }

        /** @test */
        public function project_dissociates_all_events_at_once() {
            $e = factoryFullProject();

            $e->project->associateEvent( $e->auction );
            $e->project->associateEvent( $e->forum );
            $e->project->associateEvent( $e->meeting );

            self::assertEquals( 3, $e->project->eventsCount() );

            $e->project->dissociateAllEvents();

            self::assertEquals( 0, $e->project->eventsCount() );
        }


        /** @test */
        public function events_get_partial_participation() {
            $e = factoryFullProject();

            $e->auction->linkToProject( $e->project );
            $e->auction->subscribeParticipant( $e->user );
            $e->auction->subscribeParticipant( $e->company );

            /** @var \Monoux\Models\Events\Participation $userParticipation */
            $userParticipation = $e->user->participations()->where( miniMorphArray( 'event', $e->auction->getVirtualEvent() ) )->first();
            //dd($userParticipation);
            self::assertEquals( 'partial', $userParticipation->type );
        }


        /** @test */
        public function events_deletes_partial_participations_when_subscribes_fully_to_a_project() {
            $e = factoryFullProject();

            $e->auction->linkToProject( $e->project );
            $e->auction->subscribeParticipant( $e->user );
            $e->auction->subscribeParticipant( $e->company );

            /** @var \Monoux\Models\Events\Participation $userParticipation */
            $userParticipation = $e->user->participations()->where( miniMorphArray( 'event', $e->auction->getVirtualEvent() ) )->first();
            self::assertEquals( 'partial', $userParticipation->type );

            $e->project->subscribeParticipant( $e->user );

            $userParticipation = $e->user->participations()->where( miniMorphArray( 'event', $e->auction->getVirtualEvent() ) )->first();
            self::assertNull( $userParticipation );
        }


        /** @test */
        public function user_gets_composed_participations() {
            $e = factoryFullProject();
            $e->user->linkCompany( $e->company );

            $e->user->subscribeTo($e->meeting);
            $e->company->subscribeTo($e->auction);
            //dd($e->user->participations()->toSql());
            self::assertEquals(2, $e->user->participationsCount());

        }


        /** @test */
        public function user_has_automatic_author() {
            $e = factoryFullProject();
            $e->user->author();

            self::assertEquals( 1, $e->user->getAuthor()->id );
        }


        /** @test */
        public function project_updates_dates_adding_events() {
            $e = factoryFullProject();
            $e->project->associateEvent( $e->auction );
            $e->project->associateEvent( $e->meeting );

            self::assertEquals( $e->meeting->starts_at , $e->project->starts_at );
        }



    }
