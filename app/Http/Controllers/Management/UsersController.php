<?php

    namespace Monoux\Http\Controllers\Management;

    use Hashids\Hashids;
    use Jenssegers\Optimus\Optimus;
    use Monoux\Http\Controllers\Controller;
    use Monoux\Models\Management\Role;
    use Monoux\Models\Management\User;
    use Monoux\Models\System\DynamicMenu;

    class UsersController extends Controller {



        public function menu( Optimus $optimus ) {
            $users     = User::orderBy( 'id' )->get();
            $userCells = $users->map( function ( $item ) use ( $optimus ) {

                $isMale = $item->contact->gender === 'male';

                $menu = new DynamicMenu( "users", [], $optimus );
                $menu->id( $item->id );
                $menu->icon( $isMale ? '10' : '08', $isMale ? '09' : '07', 'icon-user' );
                $menu->label( $item->contact->first_names );
                $menu->description( $item->username );
                $menu->target();

                return $menu;
            } );

            return ["cells" => $userCells->keyBy( 'id' )];
        }

        public function show( $_user, Optimus $optimus ) {
            /** @var User $user */
            $user = User::find( $optimus->decode( $_user ) );
            $hash = new Hashids( "this is the word my.querty", 10 );

            $classParts = explode( "\\", strtolower( User::class ) );
            array_shift( $classParts );
            array_shift( $classParts );
            //dd( Role::all() );
            return [
                "roles" => Role::globals()->get(),
                "data"          => $user,
                "other"         => $classParts,
                "participation" => $user->getParticipationsObject(),
                "companies"     => $user->contact->getCompanies()
            ];
        }

        public function participations() {
            /** @var User $user */
            $user = auth()->user();
            return [
                "participation" => $user->getParticipationsObject()
            ];
        }

    }
