<?php
    /**
     * File: fakerParticipationDates.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   22 Jan, 2017 | 9:59 PM
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

    namespace Monoux\Utilities;

    //use Carbon\Carbon;
    //use Faker\Generator;
    use Faker\Provider\Base;

    /**
     * Class fakerParticipationDates
     * @package Monoux\Utilities
     */
    class fakerParticipationDates extends Base {


        protected static $currentPeriodEnd;
        protected static $pendingEnd;

        protected static $usableDate   = null;
        protected static $startBetween = [
            'from' => '-6 months',
            'to'   => '6 months',
        ];

        public function initDatePeriod( $from = '-6 months', $to = '6 months' ) {
            static::$startBetween[ 'from' ] = $from;
            static::$startBetween[ 'to' ]   = $to;
            static::$usableDate             = null;
        }


        public function startDatePeriod( $minDuration, $maxDuration ) {
            if ( !static::$usableDate ) {
                static::$usableDate = $this->generator->dateTimeBetween( static::$startBetween[ 'from' ], static::$startBetween[ 'to' ] );
            }

            $start  = static::$usableDate;
            $minEnd = date_add( clone static::$usableDate, date_interval_create_from_date_string( $minDuration ) );
            $maxEnd = date_add( clone static::$usableDate, date_interval_create_from_date_string( $maxDuration ) );
            $end    = $this->generator->dateTimeBetween( $minEnd, $maxEnd );

            static::$usableDate = $end;

            return [
                "starts_at" => $start,
                'ends_at'   => $end
            ];
        }

        public function addSpaceToDatePeriod( $minSpace, $maxSpace = null ) {
            if ( !$maxSpace ) {
                static::$usableDate = $this->generator->dateTimeBetween( static::$usableDate, $minSpace );
                return;
            }
            $minEnd = date_add( clone static::$usableDate, date_interval_create_from_date_string( $minSpace ) );
            $maxEnd = date_add( clone static::$usableDate, date_interval_create_from_date_string( $maxSpace ) );
            static::$usableDate = $this->generator->dateTimeBetween( $minEnd, $maxEnd );
        }

        public function endDatePeriod() {
            return $this->initDatePeriod();
        }




       /* public function datePeriodEnd() {
            return static::$pendingEnd;
        }

        public function datePeriodStart( $startFrom, $startTo, $maxLen, $minLen = '1 minute' ) {
            $res                = $this->datePeriod( $startFrom, $startTo, $maxLen, $minLen );
            static::$pendingEnd = $res[ 'ends_at' ];
            return $res[ 'starts_at' ];
        }

        public function datePeriod( $startFrom, $startTo, $maxLen, $minLen = '1 minute' ) {

            $start  = $this->generator->dateTimeBetween( $startFrom, $startTo );
            $minEnd = $this->addToDate( $start, $minLen );
            $maxEnd = $this->addToDate( $start, $maxLen );

            static::$currentPeriodEnd = $this->generator->dateTimeBetween( $minEnd, $maxEnd );

            return [
                'starts_at' => $start,
                'ends_at'   => static::$currentPeriodEnd
            ];
        }

        public function continueDatePeriod( $minSpace, $maxSpace, $maxLen, $minLen = '1 minute' ) {
            $minStart = $this->addToDate( static::$currentPeriodEnd, $minSpace );
            $maxStart = $this->addToDate( static::$currentPeriodEnd, $maxSpace );
            $start    = $this->generator->dateTimeBetween( $minStart, $maxStart );

            $minEnd = $this->addToDate( $start, $minLen );
            $maxEnd = $this->addToDate( $start, $maxLen );

            static::$currentPeriodEnd = $this->generator->dateTimeBetween( $minEnd, $maxEnd );

            return [
                'starts_at' => $start,
                'ends_at'   => static::$currentPeriodEnd
            ];
        }

        private function addToDate( $date, $add ) {
            $newDate = clone $date;
            return date_add( $newDate, date_interval_create_from_date_string( $add ) );
        }*/


    }