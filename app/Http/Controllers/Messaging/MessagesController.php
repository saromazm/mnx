<?php

    namespace Monoux\Http\Controllers\Messaging;

    use Illuminate\Http\Request;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Messaging\Message;
    use Monoux\Models\System\DynamicMenu;

    class MessagesController extends Controller {

        public function menu() {
            $messages     = Message::all();
            $messageCells = $messages->map( function ( $item ) {


                $menu = new DynamicMenu( "messages" );
                $menu->id( "msg_" . $item->id );
                $menu->icon( "icon-books01" );
                $menu->label( $item->title );
                $menu->description( $item->code );
                $menu->kind( 'dynamic' );
                $menu->target( 'messages/' . $item->code . 'Menu' );

                return $menu;
            } );

            return ["cells" => $messageCells->keyBy( 'id' )];
        }

    }
