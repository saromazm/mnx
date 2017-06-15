<?php
    /**
     * File: fakerBuildingNames.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   21 Jan, 2017 | 4:42 AM
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

    use Faker\Provider\Base;

    class fakerBuildingNames extends Base {
        protected static $projectNameFormats = [
            '{{buildingPhasesDivisions}} for {{buildingName}}',
            '{{buildingPhases}} for {{buildingName}}',
            '{{buildingName}}: {{buildingPhasesDivisions}}',
            '{{buildingName}}: {{buildingPhases}}'
        ];

        protected static $buildingNameFormats = [
            '{{bName}} {{buildingKind}}',
            '{{bName}} {{buildingComplement}} {{buildingKind}}',
            '{{bName}} {{buildingComplement}} {{buildingPrefix}} {{buildingKind}}',
            '{{bName}} {{buildingPrefix}} {{buildingKind}}',
        ];

        protected static $buildingKind   = [
            'Tower', 'Center', 'Hotel', 'Park', 'State', 'Heights', 'Building', 'Financial', 'Square', 'Plaza', 'Mall', 'Mart', 'Resort',
            'Forum', 'Convention Center', 'Warehouse', 'Townhouse', 'Unit', 'Factory', 'Apartments', 'Hall', 'Arena', 'Auditorium', 'Place',
        ];
        protected static $buildingPrefix = [
            'East', 'North', 'South', 'West', 'Main', 'Super', 'One', 'First',
        ];

        protected static $buildingSuffix = [
            'One', 'First', '',
        ];

        protected static $buildingComplements = [
            'Marina', 'National', 'Colonial', 'International', 'Century', 'Mildred', 'Aloha', 'Cassiopeia',
        ];

        protected static $buildingPhases = [
            'Foundations', 'Excavation', 'Machinery', 'External Works', 'Sewerage Works', 'Signs and Notices', 'Hoarding/Fencing', 'Piling', 'Footing',
            'Ground Beam', 'BackFilling', 'Column', 'Ground Floor Slab', 'Walls', 'Staircase', 'Doors', 'Windows', 'Roofing', 'Elevators'
        ];

        protected static $buildingPhasesDivisions = [
            'Site Work', 'Concrete', 'Masonry', 'Metals', 'Wood and Plastic', 'Thermal and Moisture Prevention', 'Doors and Windows', 'Finishes',
            'Specialities', 'Equipment', 'Furnishing', 'Special Construction', 'Conveying System', 'Mechanical', 'Electrical'
        ];

        public function buildingKind() {
            return static::randomElement( static::$buildingKind );
        }

        public function bName() {
            return ucfirst( $this->random_pronounceable_word( rand( 4, 8 ) ) );
        }

        public function buildingSuffix() {
            return static::randomElement( static::$buildingSuffix );
        }

        public function buildingPrefix() {
            return static::randomElement( static::$buildingPrefix );
        }

        public function buildingComplement() {
            return static::randomElement( static::$buildingComplements );
        }

        public function buildingPhasesDivisions() {
            return static::randomElement( static::$buildingPhasesDivisions );
        }

        public function buildingPhases() {
            return static::randomElement( static::$buildingPhases );
        }

        public function buildingName() {
            $format = static::randomElement( static::$buildingNameFormats );
            return $this->generator->parse( $format );
        }

        public function ProjectName() {
            $format = static::randomElement( static::$projectNameFormats );
            return $this->generator->parse( $format );
        }

        function random_pronounceable_word( $length = 6 ) {

            // consonant sounds
            $cons = [
                // single consonants. Beware of Q, it's often awkward in words
                'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'z',
                // possible combinations excluding those which cannot start a word
                'pt', 'gl', 'gr', 'ch', 'ph', 'ps', 'sh', 'st', 'th', 'wh',
            ];

            // consonant combinations that cannot start a word
            $cons_cant_start = [
                'ck', 'cm',
                'dr', 'ds',
                'ft',
                'gh', 'gn',
                'kr', 'ks',
                'ls', 'lt', 'lr',
                'mp', 'mt', 'ms',
                'ng', 'ns',
                'rd', 'rg', 'rs', 'rt',
                'ss',
                'ts', 'tch',
            ];

            // vowels
            $vows = [
                // single vowels
                'a', 'e', 'i', 'o', 'u', 'y',
                // vowel combinations your language allows
                'ee', 'oa', 'oo',
            ];

            // start by vowel or consonant ?
            $current = ( mt_rand( 0, 1 ) == '0' ? 'cons' : 'vows' );

            $word = '';

            while ( strlen( $word ) < $length ) {

                // After first letter, use all consonant combos
                if ( strlen( $word ) == 2 )
                    $cons = array_merge( $cons, $cons_cant_start );

                // random sign from either $cons or $vows
                $rnd = ${$current}[ mt_rand( 0, count( ${$current} ) - 1 ) ];

                // check if random sign fits in word length
                if ( strlen( $word . $rnd ) <= $length ) {
                    $word .= $rnd;
                    // alternate sounds
                    $current = ( $current == 'cons' ? 'vows' : 'cons' );
                }
            }

            return $word;
        }
    }