<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

    Route::macro( 'enhancedResource', function ( $name, $controller ) {

        $restActions = ['menu', 'index', 'create', 'store', 'show/{#}', 'edit/{#}', 'update/{#}', 'destroy/{#}'];

        foreach ( $restActions as $ra ) {
            $action  = str_replace( '/{#}', '', $ra );
            $action2 = str_replace( "#", str_singular( $name ), $ra );
            Route::post( $name . "/" . $action2, $controller . '@' . $action )->name( $name . "." . $action );
        }

    } );


    /** B A S E **/
    /** ************************************************* **/
    Route::get( '/', function () {
        return view( 'app' );
    } )->name( 'base' );

    Route::any( '/logout', function () {
        Auth::logout();
        Cookie::forget( 'laravel_token' );
        Session::forget( 'secured' );
        return redirect()->route( 'base' );
    } );


    Route::group( ['prefix' => 'api'], function () {

        /** S E S S I O N S **/
        /** ************************************************* **/
        Route::group( ['namespace' => 'System'], function () {
            Route::post( 'sessions/check', 'SessionsController@check' )->name( 'session.check' );
            Route::post( 'sessions/attempt', 'SessionsController@attempt' )->name( 'session.attempt' );
            Route::post( 'sessions/attempt2fa', 'SessionsController@attempt2fa' )->name( 'session.attempt2fa' );
            Route::post( 'sessions/logout', 'SessionsController@logout' )->name( 'session.logout' );
        } );

    } );


    Route::get( '/{path?}/{path2?}/{path3?}', function(){
        return view( 'app' );
    } )->where('path', '.*');
