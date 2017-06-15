<?php

    namespace Monoux\Http\Controllers\System;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Catalogs\Country;
    use Monoux\Models\Catalogs\FType;
    use Monoux\Models\Catalogs\Timezone;
    use Monoux\Models\Catalogs\Title;
    use Monoux\Models\Management\Module;
    use Monoux\Models\System\Catalog;
    use Monoux\Models\System\DynamicMenu;

    class CatalogsController extends Controller {
        public function menu() {

            $catalogs  = Catalog::all();
            $catalogCells = $catalogs->map( function ( $item ) {


                $menu = new DynamicMenu( "catalogs" );
                $menu->id( "cat_".$item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->name );
                $menu->description( $item->code );
                $menu->kind('dynamic');
                $menu->target('catalogs/menu/'.$item->code);

                return $menu;
            } );

            return ["cells" => $catalogCells->keyBy( 'id' )];
        }

        public function subMenu( $subMenuName ) {
            $selectedMenu = strtolower($subMenuName)."Menu";
            if( method_exists($this, $selectedMenu) ){
                return $this->$selectedMenu();
            }
        }

        public function titlesMenu() {
            $titles  = Title::all();
            $titleCells = $titles->map( function ( $item ) {


                $menu = new DynamicMenu( "titles" );
                $menu->id( $item->id );
                $menu->icon( "icon-master01" );
                $menu->label( $item->name );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $titleCells->keyBy( 'id' )];
        }

        public function countriesMenu() {
            $countries  = Country::all();
            $countryCells = $countries->map( function ( $item ) {


                $menu = new DynamicMenu( "countries" );
                $menu->id( $item->id );
                $menu->icon( "icon-world05" );
                $menu->label( $item->name );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $countryCells->keyBy( 'id' )];
        }

        public function timezonesMenu() {
            $timezones  = Timezone::all();
            $timezoneCells = $timezones->map( function ( $item ) {


                $menu = new DynamicMenu( "timezones" );
                $menu->id( $item->id );
                $menu->icon( "icon-world01" );
                $menu->label( $item->name );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $timezoneCells->keyBy( 'id' )];
        }

        public function modulesMenu() {
            $modules  = Module::all();
            $moduleCells = $modules->map( function ( $item ) {


                $menu = new DynamicMenu( "modules" );
                $menu->id( $item->id );
                $menu->icon( "icon-box03" );
                $menu->label( $item->name );
                $menu->description( $item->code );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $moduleCells->keyBy( 'id' )];
        }

        public function filetypesMenu() {
            $filetypes  = FType::all();
            $filetypeCells = $filetypes->map( function ( $item ) {


                $menu = new DynamicMenu( "filetypes" );
                $menu->id( $item->id );
                $menu->icon( "icon-box03" );
                $menu->label( $item->description );
                $menu->description( $item->extension );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $filetypeCells->keyBy( 'id' )];
        }
    }
