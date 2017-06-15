<?php

    namespace Monoux\Http\Controllers\Messaging;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Messaging\Notification;
    use Monoux\Models\System\DynamicMenu;

    class NotificationsController extends Controller {

        public function menu() {
            $notifications     = Notification::all();
            $notificationCells = $notifications->map( function ( $item ) {


                $menu = new DynamicMenu( "notifications" );
                $menu->id( "ntf_" . $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->title );
                $menu->description( $item->code );
                $menu->kind( 'dynamic' );
                $menu->target( 'notifications/' . $item->code . 'Menu' );

                return $menu;
            } );

            return ["cells" => $notificationCells->keyBy( 'id' )];
        }

    }
