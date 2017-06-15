<?php
    /**
     * File: DatabaseBlueprint.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   20 Jan, 2017 | 11:4 PM
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

    use Illuminate\Database\Schema\Blueprint;

    class DatabaseBlueprint extends Blueprint {
        public function miniMorphs( $name, $length = 20, $indexName = null ) {
            $this->unsignedInteger( "{$name}_id" )->nullable();
            $this->string( "{$name}_type", $length )->nullable();
            $this->index( ["{$name}_id", "{$name}_type"], $indexName )->nullable();
        }

        public function startEnd() {
            $this->timestampTz( 'starts_at' )->nullable();
            $this->timestampTz( 'ends_at' )->nullable();
        }

        public function author( $key = 'author_id' ) {
            $this->unsignedInteger( $key )->index()->nullable();
        }

        public function authorPivot() {
            $this->unsignedInteger( 'assigned_by' )->index()->nullable();
        }

        public function indexableForeignKey( $name ) {
            $this->unsignedInteger( $name )->index()->nullable();
        }

        public function eventableStuffBasics() {
            $this->increments( 'id' );
            $this->string( 'title' )->nullable();
            $this->text( 'description' )->nullable();
            $this->text( 'notes' )->nullable();
            $this->string( 'status', 15 )->index()->nullable();
        }

        public function eventableStuffRelations() {
            $this->unsignedInteger( 'project_id' )->index()->nullable();
            $this->author();
        }

        public function eventableStuffTiming() {
            $this->time( 'length' )->nullable();
            $this->startEnd();
            $this->timestampsTz();
            $this->softDeletesTz();
        }
    }