<?php

    namespace Monoux\Http\Controllers\System;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Management\Module;
    use Monoux\Models\System\DynamicMenu;

    class ModulesController extends Controller {

        public function menu() {
            $modules  = Module::all();
            $moduleCells = $modules->map( function ( $item ) {


                $menu = new DynamicMenu( "modules" );
                $menu->id( $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->name );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $moduleCells->keyBy( 'id' )];
        }

    }
