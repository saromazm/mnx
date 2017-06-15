<?php
    /**
     * 2017_01_22_044205_create_participations_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   22 Jan, 2017 | 04:42 AM
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

    use Monoux\Customizations\DatabaseBlueprint;
    use Monoux\Customizations\DatabaseMigration;

    class CreateParticipationsTable extends DatabaseMigration {

        protected $tableName = 'participations';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {

                $table->increments( 'id' );
                $table->string( 'type', 10 )->index()->nullable();
                $table->miniMorphs( 'event', 20 );
                $table->miniMorphs( 'participant', 20 );
                //$table->unsignedInteger( 'project_id' )->index()->nullable();
                $table->unsignedInteger( 'role_id' )->index()->nullable();
                $table->unsignedInteger( 'assigned_by' )->index()->nullable();
                $table->timestampsTz();
                $table->softDeletesTz();

            } );
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down() {
            $this->schema->disableForeignKeyConstraints();
            $this->schema->drop( $this->tableName );
            $this->schema->enableForeignKeyConstraints();
        }
    }
