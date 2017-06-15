<?php
    /**
     * 2017_04_02_233203_create_invoices_table.php | Package: monoux
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

    class CreateInvoicesTable extends DatabaseMigration {

        protected $tableName = 'invoices';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {
                $table->increments( 'id' );

                $table->integer( 'customer_id' )->unsigned()->nullable()->index();
                $table->integer( 'contract_id' )->unsigned()->nullable()->index();
                $table->integer( 'address_id' )->unsigned()->nullable()->index();
                $table->integer( 'phone_id' )->unsigned()->nullable()->index();

                $table->string( 'vat_name' )->nullable();
                $table->string( 'vat_code', 50 )->nullable();

                $table->text( 'notes' )->nullable();
                $table->string( 'status', 15 )->index();

                $table->timestamp( 'valid_since' )->nullable();
                $table->timestamp( 'published_at' )->nullable();

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
