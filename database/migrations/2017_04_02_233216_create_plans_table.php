<?php
    /**
     * 2017_04_02_233216_create_plans_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   02 Apr, 2017 | 11:32 PM
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

    class CreatePlansTable extends DatabaseMigration {

        protected $tableName = 'plans';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {
                $table->increments( 'id' );

                $table->string( 'title' );
                $table->string( 'code', 30 )->index();
                $table->string( 'description' )->nullable();
                $table->string( 'recurrence' )->nullable();
                $table->text( 'notes' )->nullable();

                $table->integer( 'price' );
                $table->integer( 'events' )->nullable();
                $table->integer( 'support' )->nullable();
                $table->integer( 'users' )->nullable();
                $table->string( 'status', 15 )->default( 'active' )->index();

                $table->datetime( 'valid_since' )->index();
                $table->datetime( 'valid_to' )->nullable()->index();

                $table->author();
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
