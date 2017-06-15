<?php
    /**
     * File: CustomMigrationCreator.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   20 Jan, 2017 | 10:56 PM
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

    namespace Monoux\Customizations;

    use Illuminate\Database\Migrations\MigrationCreator;

    class CustomMigrationCreator extends MigrationCreator {

        public function stubPath() {
            return base_path() . "/resources/stubs/migration/";
        }

        protected function ensureMigrationDoesntAlreadyExist( $name ) {
            if ( class_exists( $className = $this->getClassName( $name ), false ) ) {
                throw new \InvalidArgumentException( "A $className migration already exists." );
            }
        }

        protected function populateStub( $name, $stub, $table ) {
            $stub = str_replace( 'DummyDate', date( "d M, Y | h:i A" ), $stub );
            $stub = str_replace( 'DummyFilename', $this->getDatePrefix() . '_' . $name . '.php', $stub );
            return parent::populateStub( $name, $stub, $table );
        }
    }