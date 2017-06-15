<?php

    namespace Monoux\Http\Controllers\System;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Management\Permission;
    use Monoux\Models\System\DynamicMenu;

    class PermissionsController extends Controller {

        public function menu() {
            $permissions  = Permission::all();
            $permissionCells = $permissions->map( function ( $item ) {


                $menu = new DynamicMenu( "permissions" );
                $menu->id( $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->name );
                $menu->description( $item->description );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $permissionCells->keyBy( 'id' )];
        }

    }
