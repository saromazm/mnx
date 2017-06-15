<?php

    namespace Monoux\Http\Controllers\Management;

    use Illuminate\Http\Request;
    use Jenssegers\Optimus\Optimus;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Management\Company;
    use Monoux\Models\Management\User;
    use Monoux\Models\System\DynamicMenu;

    class CompaniesController extends Controller {


        public function menu( Optimus $optimus ) {
            $companies    = Company::all();
            $companyCells = $companies->map( function ( $item ) use ( $optimus ) {

                $menu = new DynamicMenu( "companies", [], $optimus );
                $menu->id( $item->id );
                $menu->icon( "icon-building07" );
                $menu->label( $item->short_name );
                $menu->description( $item->name );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $companyCells->keyBy( 'id' )];
        }

        public function show( $_companyID, Optimus $optimus ) {
            $companyID = $optimus->decode( $_companyID );
            /** @var Company $company */
            $company = Company::find( $companyID );
            return [
                "data"          => $company,
                "users"         => $company->getContacts(),
                'participation' => $company->getParticipationsObject()
            ];
        }
    }
