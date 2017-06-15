<?php

    use Illuminate\Database\Seeder;

    class DatabaseSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {

            //Clean the database
            $this->cleanDatabase();

            //Create Main Users and Main Companies
            $this->call( 'MainUsersAndCompaniesSeeder' );
            $this->call( 'SecondaryUsersAndCompaniesSeeder' );

            //Create Catalogs
            $this->call( 'SystemCatalogsSeeder' );

            //Participations
            $this->call( 'ProjectsAndEventsSeeder' );


            //Create individual elements
            foreach ( $this->gatherFiles() as $file ){
                $this->call($file);
            }

            Artisan::call('passport:install');
            //$this->run("artisan passport:install");
        }

        public function gatherFiles() {
            $seeders = [];
            foreach ( glob( __DIR__ . '/*Basic__*.php' ) as $filename ) {
                $fName = basename( $filename );
                $t     = explode( ".", $fName );
                $class = ucfirst( $t[ 0 ] );
                array_push( $seeders, $class );
            }
            return $seeders;
        }


        private function cleanDatabase() {
            DB::statement( 'SET FOREIGN_KEY_CHECKS=0' );
            $tables = DB::connection()->getDoctrineSchemaManager()->listTableNames();

            foreach ( $tables as $table ) {
                if ( str_contains( $table, 'oauth' ) || str_contains( $table, 'migrations' ) ) {
                    return;
                }
                DB::table( $table )->truncate();
            }

            DB::statement( 'SET FOREIGN_KEY_CHECKS=1' );
        }

    }
