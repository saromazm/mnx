<?php
    /**
     * 2017_04_02_233210_create_discounts_table.php | Package: monoux
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

    class CreateDiscountsTable extends DatabaseMigration {

        protected $tableName = 'discounts';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {
                $table->increments( 'id' );

                $table->string('code', 30);
                $table->string('title');
                $table->text('description');
                $table->text('notes')->nullable();

                $table->string('kind', 15)->nullable()->index();
                $table->integer('limit')->nullable();
                $table->integer('amount');
                $table->string('status', 15)->nullable()->index();

                $table->datetime('valid_since')->nullable();
                $table->datetime('valid_to')->nullable();
                $table->timestamp('published_at')->nullable();

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
