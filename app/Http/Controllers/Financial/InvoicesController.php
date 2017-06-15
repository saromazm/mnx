<?php

    namespace Monoux\Http\Controllers\Financial;

    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Financial\Invoice;
    use Monoux\Models\System\DynamicMenu;

    class InvoicesController extends Controller {

        public function menu() {
            $invoices  = Invoice::all();
            $invoiceCells = $invoices->map( function ( $item ) {


                $menu = new DynamicMenu( "invoices" );
                $menu->id( $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->title );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $invoiceCells->keyBy( 'id' )];
        }

    }
