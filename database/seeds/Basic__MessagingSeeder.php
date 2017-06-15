<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Messaging\Notification;
    use Monoux\Models\Messaging\Message;

    class Basic__MessagingSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {
            $systemNotifications     = 10;
            $projectNotifications    = 10;
            $individualNotifications = 10;

            $systemMessages = 10;
            $accountMessage= 10;

            /** N O T I F I C A T I O N S **/
            /** ************************************************* **/
            factory( Notification::class, $systemNotifications )->create( [
                'kind' => 'System'
            ] );

            factory( Notification::class, $projectNotifications )->create( [
                'kind' => 'Project'
            ] );

            factory( Notification::class, $individualNotifications )->create( [
                'kind' => 'Individual'
            ] );

            /** M E S S A G E S **/
            /** ************************************************* **/
            factory( Message::class, $systemMessages )->create([
                'kind' => 'System'
            ]);

            factory( Message::class, $accountMessage )->create([
                'kind' => 'System'
            ]);
        }
    }
