<?php
    /**
     * 2017_04_02_233156_create_contracts_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   02 Apr, 2017 | 11:31 PM
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

    class CreateContractsTable extends DatabaseMigration {

        protected $tableName = 'contracts';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {
                $table->increments( 'id' );

                $table->integer('customer_id')->unsigned()->nullable()->index();
                $table->text('notes')->nullable();
                $table->string('status', 15)->index()->nullable();

                $table->timestamp('accepted_at')->nullable();
                $table->timestamp('valid_since')->nullable();
                $table->timestamp('valid_to')->nullable();

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
