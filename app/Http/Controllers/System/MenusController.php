<?php

    namespace Monoux\Http\Controllers\System;

    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\System\Menu;

    class MenusController extends Controller {

        public function baseMenu() {
            $menus  = Menu::all();
            /** @var $groups \Illuminate\Database\Eloquent\Collection */
            $groups = $menus->groupBy( 'parent_id' )->map( function ( $group, $key ) {
                /** @var $group \Illuminate\Database\Eloquent\Collection */
                //dd($group->keyBy('id')->all());
                return [
                    'id'    => $key,
                    //'cells' => $group->all(),
                    'cells' => $group->keyBy('id')->all()
                ];
            } );
            return ['menus' => $groups->toArray()];
        }

        public function all( $menu ) {
            $cn = new CatalogsController();
            return $cn->menu();
        }
    }
