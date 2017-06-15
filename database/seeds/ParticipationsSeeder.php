<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Management\User;
    use Monoux\Models\Projects\Project;
    use Monoux\Models\Events\Auction;
    use Monoux\Models\Events\Meeting;
    use Monoux\Models\Events\Forum;
    use Monoux\Models\Management\Company;

    class ParticipationsSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {

            $projects = Project::all();
            $usersE = User::external()->get();
            $usersI = User::internal()->get();
            $ciasE  = Company::whereNotIn( 'id', [1, 2, 3] );
            $ciasI  = Company::whereIn( 'id', [1, 2, 3] );

            dd( $projects->count() );
        }
    }
