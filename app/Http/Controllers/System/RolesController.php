<?php

    namespace Monoux\Http\Controllers\System;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Management\Role;
    use Monoux\Models\System\DynamicMenu;

    class RolesController extends Controller {

        public function menu() {
            $roles  = Role::all();
            $roleCells = $roles->map( function ( $item ) {


                $menu = new DynamicMenu( "roles" );
                $menu->id( $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->name );
                $menu->description( $item->description );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $roleCells->keyBy( 'id' )];
        }

    }
