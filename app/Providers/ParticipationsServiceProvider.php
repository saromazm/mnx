<?php

    namespace Monoux\Providers;

    use Illuminate\Database\Eloquent\Relations\Relation;
    use Illuminate\Support\ServiceProvider;
    use Monoux\Models\Management\User;
    use Monoux\Models\Management\Contact;
    use Monoux\Models\Management\Company;
    use Monoux\Models\Projects\Project;
    use Monoux\Models\Events\Auction;
    use Monoux\Models\Events\Forum;
    use Monoux\Models\Events\Meeting;
    use Monoux\Models\Events\Event;

    class ParticipationsServiceProvider extends ServiceProvider {
        /**
         * Bootstrap the application services.
         *
         * @return void
         */
        public function boot() {
            Relation::morphMap(
                [
                    'project' => Project::class,
                    'auction' => Auction::class,
                    'forum'   => Forum::class,
                    'meeting' => Meeting::class,
                    'company' => Company::class,
                    'event'   => Event::class,
                    'user'    => User::class,
                    'contact' => Contact::class,
                ]
            );
        }

        /**
         * Register the application services.
         *
         * @return void
         */
        public function register() {
            //
        }
    }
