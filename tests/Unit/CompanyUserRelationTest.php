<?php
    /**
     * File: CompanyUserRelationTest.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   1 Feb, 2017 | 10:6 PM
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

    use Illuminate\Database\Eloquent\Model;
    use Monoux\Models\Management\Company;
    use Monoux\Models\Management\Contact;
    use Monoux\Models\Management\User;
    use Tests\TestCase;
    use Illuminate\Foundation\Testing\DatabaseTransactions;

    class CompanyUserRelationTest extends TestCase {

        //use DatabaseTransactions;

        public function setUp() {
            parent::setUp();
        }


        /** @test */
        public function company_links_contacts() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 2 )->create();
            $companies = factory( Company::class, 1 )->create();

            $companies[0]->linkContact( $users[0]->contact_id );
            $companies[0]->linkContact( $users[1]->contact_id );

            self::assertEquals( 2, $companies[0]->contactsCount() );
            self::assertEquals( 2, $companies[0]->usersCount() );
            self::assertTrue( $users[0]->is( $companies[0]->getUsers()->first() ) );
            self::assertTrue( $users[1]->is( $companies[0]->getUsers()->last() ) );

        }


        /** @test */
        public function company_links_users() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 2 )->create();
            $companies = factory( Company::class, 1 )->create();

            $companies[0]->linkUser( $users[0] );
            $companies[0]->linkUser( $users[1] );

            self::assertEquals( 2, $companies[0]->contactsCount() );
            self::assertEquals( 2, $companies[0]->usersCount() );
            self::assertTrue( $users[0]->is( $companies[0]->getUsers()->first() ) );
            self::assertTrue( $users[1]->is( $companies[0]->getUsers()->last() ) );
        }


        /** @test */
        public function company_unlinks_user() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 2 )->create();
            $companies = factory( Company::class, 1 )->create();

            $companies[0]->linkUser( $users[0] );
            $companies[0]->linkUser( $users[1] );

            $companies[0]->unlinkUser( $users[0] );

            self::assertEquals( 1, $companies[0]->contactsCount() );
            self::assertEquals( 1, $companies[0]->usersCount() );
            self::assertTrue( $users[1]->is( $companies[0]->getUsers()->first() ) );
            self::assertTrue( $users[1]->is( $companies[0]->getUsers()->last() ) );

        }


        /** @test */
        public function company_unlinks_contact() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 2 )->create();
            $companies = factory( Company::class, 1 )->create();

            $companies[0]->linkContact( $users[0]->contact_id );
            $companies[0]->linkContact( $users[1]->contact_id );

            $companies[0]->unlinkContact( $users[0]->contact_id );

            self::assertEquals( 1, $companies[0]->contactsCount() );
            self::assertEquals( 1, $companies[0]->usersCount() );
            self::assertTrue( $users[1]->contact->is( $companies[0]->getContacts()->first() ) );
            self::assertTrue( $users[1]->contact->is( $companies[0]->getContacts()->last() ) );

        }


        /** @test */
        public function contact_links_company() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 1 )->create();
            $companies = factory( Company::class, 2 )->create();

            $users[0]->contact->linkCompany($companies[0]);
            $users[0]->contact->linkCompany($companies[1]);

            self::assertEquals( 2, $users[0]->contact->companiesCount() );
            self::assertTrue( $companies[0]->is( $users[0]->contact->getCompanies()->first() )  );
            self::assertTrue( $companies[1]->is( $users[0]->contact->getCompanies()->last() )  );
        }


        /** @test */
        public function contact_unlinks_company() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 1 )->create();
            $companies = factory( Company::class, 2 )->create();

            $users[0]->contact->linkCompany($companies[0]);
            $users[0]->contact->linkCompany($companies[1]);

            $users[0]->contact->unlinkCompany( $companies[0] );

            self::assertEquals( 1, $users[0]->contact->companiesCount() );
            self::assertTrue( $companies[1]->is( $users[0]->contact->getCompanies()->first() )  );
            self::assertTrue( $companies[1]->is( $users[0]->contact->getCompanies()->last() )  );
        }


        /** @test */
        public function user_links_company() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 1 )->create();
            $companies = factory( Company::class, 2 )->create();

            $users[0]->linkCompany($companies[0]);
            $users[0]->linkCompany($companies[1]);

            self::assertEquals( 2, $users[0]->companiesCount() );
            self::assertTrue( $companies[0]->is( $users[0]->getCompanies()->first() )  );
            self::assertTrue( $companies[1]->is( $users[0]->getCompanies()->last() )  );

        }


        /** @test */
        public function user_unlinks_company() {
            /** @var User[] $users */
            /** @var Company[] $companies */
            /** @var Contact $contact0 */
            /** @var Contact $contact2 */
            $users     = factory( User::class, 1 )->create();
            $companies = factory( Company::class, 2 )->create();

            $users[0]->linkCompany($companies[0]);
            $users[0]->linkCompany($companies[1]);

            $users[0]->unlinkCompany( $companies[0] );

            self::assertEquals( 1, $users[0]->companiesCount() );
            self::assertTrue( $companies[1]->is( $users[0]->getCompanies()->first() )  );
            self::assertTrue( $companies[1]->is( $users[0]->getCompanies()->last() )  );

        }

    }