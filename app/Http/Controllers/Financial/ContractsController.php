<?php

    namespace Monoux\Http\Controllers\Financial;

    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Financial\Contract;
    use Monoux\Models\System\DynamicMenu;

    class ContractsController extends Controller {

        public function menu() {
            $contracts  = Contract::all();
            $contractCells = $contracts->map( function ( $item ) {


                $menu = new DynamicMenu( "contracts" );
                $menu->id( $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->title );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $contractCells->keyBy( 'id' )];
        }

    }
