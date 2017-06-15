<?php
    /**
     * File: functions.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   22 Jan, 2017 | 1:19 AM
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

    if ( !function_exists( 'isModel' ) ) {
        function isModel( $object ) {
            return $object instanceof \Illuminate\Database\Eloquent\Model;
        }
    }

    if ( !function_exists( 'getObjectID' ) ) {
        function getObjectID( $object ) {
            return $object instanceof \Illuminate\Database\Eloquent\Model
                ? $object->getAttribute( 'id' )
                : $object;
        }
    }

    if ( !function_exists( 'ifIsArray' ) ) {
        function ifIsArray( $object, $trueCondition, $falseCondition ) {
            return is_array( $object ) ? $trueCondition : $falseCondition;
        }
    }


    if ( !function_exists( 'miniMorphArray' ) ) {
        function miniMorphArray( $key, $object, $class = null, $extras = [] ) {
            return array_merge( is_array( $class ) ? $class : $extras, [
                "{$key}_id"   => isModel( $object ) ? $object->id : $object,
                "{$key}_type" => minifyClass( $object )
            ] );
        }
    }

    if ( !function_exists( 'morphArray' ) ) {
        function morphArray( $key, $object, $class = null, $extras = [] ) {
            return array_merge( is_array( $class ) ? $class : $extras, [
                "{$key}_id"   => isModel( $object ) ? $object->id : $object,
                "{$key}_type" => is_array( $class ) ? get_class( $object ) : $class
            ] );
        }
    }


    if ( !function_exists( 'minifyClass' ) ) {
        function minifyClass( $classString ) {
            $class = is_string( $classString ) ? $classString : get_class( $classString );
            return strtolower( class_basename( $class ) );
        }
    }

    if ( !function_exists( 'morphWhere' ) ) {
        function morphWhere( $name, $object, $class = null ) {

            $data = miniMorphClassName( $name, $object, $class );
            $cols = $data->columns;
            $val  = $data->values;

            return function ( $query ) use ( $cols, $val ) {
                /** @var \Illuminate\Database\Query\Builder $query */
                $query->where( $cols->type, $val->type );
                if ( is_array( $val->id ) ) {
                    return $query->whereIn( $cols->id, $val->id );
                }
                return $query->where( $cols->id, $val->id );
            };
        }
    }

    if ( !function_exists( 'selectIF' ) ) {
        function selectIF( $select, $if, $then, $as = null ) {
            return \DB::raw( "if({$select}, {$if}, {$then})" . ( $as ? " as {$as}" : '' ) );
        }
    }

    if ( !function_exists( 'miniMorphClassName' ) ) {
        function miniMorphClassName( $morphName, $objectOrClass, $class ) {
            $nameParts   = explode( ':', $morphName );
            $namePrefix  = $nameParts[ 0 ];
            $morphClass  = is_array( $objectOrClass ) ? $class : get_class( $objectOrClass );
            $morphingIDS = is_array( $objectOrClass ) ? $objectOrClass : getObjectID( $objectOrClass );

            if ( array_search( 'mini', $nameParts ) !== false ) {
                $morphClass = minifyClass( $morphClass );
            }
            return (object)[
                'columns' => (object)[
                    "id"   => "{$namePrefix}_id",
                    "type" => "{$namePrefix}_type",
                ],
                'values'  => (object)[
                    "id"   => $morphingIDS,
                    "type" => $morphClass,
                ]
            ];
        }
    }

    if ( !function_exists( 'datesArray' ) ) {
        function datesArray( $start, $end ) {
            return [
                "starts_at" => $start,
                "ends_at"   => $end
            ];
        }
    }

    if ( !function_exists( "withoutTrashedClosure" ) ) {
        function withoutTrashedClosure( $pivotName ) {
            return function ( \Illuminate\Database\Eloquent\Builder $query ) use ( $pivotName ) {
                return $query->whereNull( "{$pivotName}.deleted_at" );//->orWhere( "{$pivotName}.deleted_at",'>',\Carbon\Carbon::now());
            };
        }
    }

    if ( !function_exists( "expiredClosure" ) ) {
        function expiredClosure( $pivotName, $includeExpired = false ) {
            return function ( \Illuminate\Database\Eloquent\Builder $query ) use ( $pivotName, $includeExpired ) {
                if ( $includeExpired ) {
                    return $query->where( "{$pivotName}.id", ">", 0 );
                }
                return $query->whereNull( "{$pivotName}.expired_at" )
                    ->orWhere( "{$pivotName}.expired_at", ">", \Carbon\Carbon::now() );
            };
        }
    }

    if ( !function_exists( "trashedClosure" ) ) {
        function trashedClosure( $pivotName, $includeTrashed = false ) {
            return function ( \Illuminate\Database\Eloquent\Builder $query ) use ( $pivotName, $includeTrashed ) {
                if ( $includeTrashed ) {
                    return $query->where( "{$pivotName}.id", ">", 0 );
                }
                return $query->whereNull( "{$pivotName}.deleted_at" );
            };
        }
    }


