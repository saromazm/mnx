<?php
    /**
     * 2017_01_21_073848_create_contacts_table.php | Package: monoux
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

    class CreateContactsTable extends DatabaseMigration {

        protected $tableName = 'contacts';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {

                $table->increments( 'id' );
                $table->unsignedSmallInteger( 'title_id' )->nullable()->index();
                $table->string( 'first_names' )->nullable();
                $table->string( 'last_names' )->nullable();
                $table->string( 'preferred_name' )->nullable();
                $table->string( 'gender', 10 )->default( 'Male' )->index();
                $table->date( 'bday' )->nullable();

                $table->unsignedInteger( 'author_id' )->nullable()->index();
                $table->timestamps();
                $table->softDeletes();

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
