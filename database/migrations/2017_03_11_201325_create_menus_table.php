<?php
    /**
     * 2017_03_11_201325_create_menus_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   11 Mar, 2017 | 08:13 PM
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

    class CreateMenusTable extends DatabaseMigration {

        protected $tableName = 'menus';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {
                $table->increments( 'id' );
                $table->string('code')->index();
                $table->string('icon')->nullable();
                $table->string('icon_active')->nullable();
                $table->string('label')->nullable();
                $table->string('description')->nullable();
                $table->string('kind')->nullable();
                $table->string('target')->nullable();
                $table->string('action')->nullable();
                $table->integer('parent_id')->unsigned()->nullable()->index();
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
