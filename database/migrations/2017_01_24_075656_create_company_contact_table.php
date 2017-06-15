<?php
    /**
     * 2017_01_24_075656_create_company_contact_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   24 Jan, 2017 | 07:56 AM
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

    class CreateCompanyContactTable extends DatabaseMigration {

        protected $tableName = 'company_contact';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {

                $table->increments( 'id' );

                $table->unsignedInteger( 'contact_id' )->index()->nullable();
                $table->unsignedInteger( 'company_id' )->index()->nullable();
                $table->unsignedInteger( 'hierarchy_id' )->index()->nullable();
                $table->author('assigned_by');
                $table->timestamp('expired_at')->nullable();
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
