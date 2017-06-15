<?php
    /**
     * File: UserModelTest.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   2 Apr, 2017 | 3:18 AM
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

    use Doctrine\DBAL\Driver\PDOException;
    use Monoux\Models\Management\User;
    use Tests\TestCase;
    use Illuminate\Foundation\Testing\DatabaseTransactions;

    class UserModelTest extends TestCase {

        use DatabaseTransactions;

        public function setUp() {
            parent::setUp();
        }

        /**
         * @test
         * @expectedException PDOException
         */
        public function empty_model_creation_not_allowed() {
            User::create([]);
        }
    }