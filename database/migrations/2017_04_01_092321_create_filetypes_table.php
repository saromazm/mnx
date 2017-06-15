<?php
    /**
     * 2017_04_01_092321_create_filetypes_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   01 Apr, 2017 | 09:23 AM
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

    class CreateFiletypesTable extends DatabaseMigration {

        protected $tableName = 'filetypes';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {
                $table->increments( 'id' );
                $table->string( 'extension', 10 )->index()->unique();
                $table->string( 'icon' )->nullable();
                $table->text( 'description' )->nullable();
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
