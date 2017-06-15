<?php

    namespace Monoux\Http\Controllers\Testing;

    use Illuminate\Http\Request;
    use Jenssegers\Optimus\Optimus;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\System\DynamicMenu;
    use Illuminate\Support\Facades\File;

    class TestingController extends Controller {

        public function menu(Optimus $optimus) {

            $testing = collect( ['Fonts', 'Components'] );

            $testCells = $testing->map( function ( $item, $index ) use ($optimus) {
                $menu = new DynamicMenu( "tests", [], $optimus  );
                $menu->id( $index + 1 );
                $menu->label( $item );
                $menu->code(strtolower($item));
                $menu->description("");
                $menu->icon('icon-development12');
                $menu->iconActive('icon-development11');
                $menu->target("testing/". strtolower($item));

                return $menu;
            } );

            return ["cells" => $testCells->keyBy('id')];
        }

        public function show( $test, Optimus $optimus ) {
            $selectedTest = strtolower($test);
            if( method_exists($this, $selectedTest) ){
                return $this->$selectedTest($optimus);
            }
        }

        public function fonts(  ) {
            $contents = File::get( base_path() . '/public/css/app.css' );
            preg_match_all( "/(?<=\\.)(anticon-.*)(?=[:before|\\b])/uiU", $contents, $antIcon );
            preg_match_all( "/(?<=\\.)(icon-.*)(?=:before)/uiU", $contents, $linesCM );
            preg_match_all( "/(?<=\\.)(icon[\\.\\w]+?)(?=:before)/uiU", $contents, $linesSemantic );

            $res = collect( array_collapse( [ $linesSemantic[0], $linesCM[0] , $antIcon[0]] ));
            return [ 'lines' => $res->toArray()];
        }
    }
