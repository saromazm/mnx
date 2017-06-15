<?php

    namespace Monoux\Http\Controllers\Financial;

    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Financial\Discount;
    use Monoux\Models\System\DynamicMenu;

    class DiscountsController extends Controller {

        public function menu() {
            $discounts  = Discount::all();
            $discountCells = $discounts->map( function ( $item ) {


                $menu = new DynamicMenu( "discounts" );
                $menu->id( $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->title );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $discountCells->keyBy( 'id' )];
        }

    }
