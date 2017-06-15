<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    Route::macro( 'enhancedResource', function ( $name, $controller ) {

        $restActions = ['menu', 'index: ', 'create', 'store', 'show:{#}', 'edit/{#}', 'update/{#}', 'destroy/{#}'];

        foreach ( $restActions as $ra ) {
            $actionParts = explode( ':', $ra );
            $routeName   = $actionParts[ 0 ];
            $routeUrl    = array_get( $actionParts, 1, false );

            $action  = str_replace( '/{#}', '', $routeName );
            $action2 = str_replace( "#", str_singular( $name ), $routeUrl ?: $ra  );
            Route::post( $name . "/" . $action2, $controller . '@' . $action )->name( $name . "." . $action );
        }

    } );


    Route::group( ['middleware' => 'auth:api'], function () {

        /** M E N U S **/
        /** ************************************************* **/
        Route::post( 'menus', 'System\MenusController@baseMenu' )->name( 'menus.base' );

        /** S Y S T E M  **/
        /** ************************************************* **/
        Route::enhancedResource( 'roles', 'System\RolesController' );
        Route::enhancedResource( 'permissions', 'System\PermissionsController' );
        Route::enhancedResource( 'modules', 'System\ModulesController' );


        /** C A T A L O G S **/
        /** ************************************************* **/
        Route::enhancedResource( 'catalogs', 'System\CatalogsController' );
        Route::post( 'catalogs/menu/{submenu}', 'System\CatalogsController@subMenu' )->name( 'catalogs.submenu' );

        /** M A N A G E M E N T **/
        /** ************************************************* **/
        Route::enhancedResource( 'users', 'Management\UsersController' );
        Route::post( 'users/participations', 'Management\UsersController@participations' )->name( 'user.participations' );

        Route::enhancedResource( 'companies', 'Management\CompaniesController' );


        /** F I N A N C I A L **/
        /** ************************************************* **/
        Route::enhancedResource( 'customers', 'Financial\CustomersController' );
        Route::enhancedResource( 'contracts', 'Financial\ContractsController' );
        Route::enhancedResource( 'invoices', 'Financial\InvoicesController' );
        Route::enhancedResource( 'plans', 'Financial\PlansController' );
        Route::enhancedResource( 'discounts', 'Financial\DiscountsController' );


        /** M E S S A G I N G **/
        /** ************************************************* **/
        Route::enhancedResource( 'messages', 'Messaging\MessagesController' );
        Route::enhancedResource( 'notifications', 'Messaging\NotificationsController' );

        /** T E S T I N G **/
        /** ************************************************* **/
        Route::post( 'testing', 'Testing\TestingController@menu' )->name( 'testing.menu' );
        Route::post( 'testing/{test}', 'Testing\TestingController@show' )->name( 'testing.show' );

    } );
