<?php
    /**
     * File: DatabaseMigration.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   20 Jan, 2017 | 11:5 PM
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

    namespace Monoux\Customizations;

    use DB;
    use Illuminate\Database\Migrations\Migration;

    class DatabaseMigration extends Migration {
        protected $schema;
        protected $tableName;

        public function __construct() {
            $this->schema = DB::connection()->getSchemaBuilder();
            $this->schema->blueprintResolver( function ( $table, $callback ) {
                return new DatabaseBlueprint( $table, $callback );
            } );
        }
    }