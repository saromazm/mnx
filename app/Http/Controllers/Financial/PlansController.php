<?php

    namespace Monoux\Http\Controllers\Financial;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Financial\Plan;
    use Monoux\Models\System\DynamicMenu;

    class PlansController extends Controller {

        public function menu() {
            $plans  = Plan::all();
            $planCells = $plans->map( function ( $item ) {


                $menu = new DynamicMenu( "plans" );
                $menu->id( $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->title );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $planCells->keyBy( 'id' )];
        }

    }
