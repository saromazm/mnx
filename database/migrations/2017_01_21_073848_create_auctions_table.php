<?php
    /**
     * 2017_01_21_073848_create_auctions_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   21 Jan, 2017 | 07:38 AM
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

    class CreateAuctionsTable extends DatabaseMigration {

        protected $tableName = 'auctions';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {

                $table->eventableStuffBasics();
                $table->string( 'kind', 10 )->default( 'Reverse' );
                $table->indexableForeignKey( 'rules_id' );
                $table->eventableStuffRelations();
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
