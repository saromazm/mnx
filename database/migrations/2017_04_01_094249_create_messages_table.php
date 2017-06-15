<?php
    /**
     * 2017_04_01_094249_create_messages_table.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   01 Apr, 2017 | 09:42 AM
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

    class CreateMessagesTable extends DatabaseMigration {

        protected $tableName = 'messages';

        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            $this->schema->create( $this->tableName, function ( DatabaseBlueprint $table ) {
                $table->increments('id');

                $table->string('title');
                $table->text('content');
                $table->text('notes')->nullable();
                $table->string('priority', 15)->index();
                $table->string('kind', 15)->index();
                $table->string('status', 15)->index()->nullable();
                $table->timestamp('published_at')->nullable();

                $table->author();
                $table->timestampsTz();
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
