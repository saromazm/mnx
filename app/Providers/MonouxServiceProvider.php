<?php

    namespace Monoux\Providers;

    use Illuminate\Support\ServiceProvider;

    class MonouxServiceProvider extends ServiceProvider {
        /**
         * Bootstrap the application services.
         *
         * @return void
         */
        public function boot() {
            //
        }

        /**
         * Register the application services.
         *
         * @return void
         */
        public function register() {
            //Testing Helper Files
            if ( $this->app->environment() != 'production' ) {
                foreach ( glob( app_path() . '/Helpers/Test/*.php' ) as $filename ) {
                    /** @noinspection PhpIncludeInspection */
                    require_once( $filename );
                }
            }
            //Global Helper Files
            foreach ( glob( app_path() . '/Helpers/*.php' ) as $filename ) {
                /** @noinspection PhpIncludeInspection */
                require_once( $filename );
            }
        }
    }
