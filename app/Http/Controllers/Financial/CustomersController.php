<?php

    namespace Monoux\Http\Controllers\Financial;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Management\Company;
    use Monoux\Models\Financial\Customer;
    use Monoux\Models\System\DynamicMenu;

    class CustomersController extends Controller {

        public function menu() {
            $customers  = Company::join('customers','company_id','companies.id')->get();
            $customerCells = $customers->map( function ( $item ) {

                $menu = new DynamicMenu( "customers" );
                $menu->id( $item->id );
                $menu->icon( "icon-user15" );
                $menu->label( $item->name );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $customerCells->keyBy( 'id' )];
        }

    }
