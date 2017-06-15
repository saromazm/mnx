<?php

    /*
    |--------------------------------------------------------------------------
    | Model Factories
    |--------------------------------------------------------------------------
    |
    | Here you may define all of your model factories. Model factories give
    | you a convenient way to create models for testing and seeding your
    | database. Just tell the factory how a default model should look.
    |
    */
    use \Monoux\Models\Management\User;
    use \Monoux\Models\Management\Contact;
    use \Monoux\Models\Management\Company;
    use Monoux\Models\Projects\Project;
    use Monoux\Models\Events\Auction;
    use Monoux\Models\Events\Forum;
    use Monoux\Models\Events\Meeting;
    use Monoux\Utilities\fakerBuildingNames;
    use Monoux\Utilities\fakerParticipationDates;

    use Monoux\Models\Messaging\Message;
    use Monoux\Models\Messaging\Notification;

    use Monoux\Models\Support\Ticket;
    use Monoux\Models\Support\Support;

    use Monoux\Models\Financial\Customer;
    use Monoux\Models\Financial\Plan;
    use Monoux\Models\Financial\Invoice;
    use Monoux\Models\Financial\Discount;
    use Monoux\Models\Financial\Contract;

    $GLOBALS[ 'user_status' ]      = Config::get( 'testingData.status' );
    $GLOBALS[ 'user_kinds' ]       = Config::get( 'testingData.userKinds' );
    $GLOBALS[ 'domainSeparators' ] = Config::get( 'testingData.domainsSeparators' );
    $GLOBALS[ 'genders' ]          = Config::get( 'testingData.genders' );
    $GLOBALS[ 'domains' ]          = Config::get( 'testingData.domains' );
    $GLOBALS[ '2faToken' ]         = Config::get( 'testingData.2faToken' );


    /** U S E R S  **/
    /** ************************************************* **/

    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    $factory->define( User::class, function ( Faker\Generator $faker, $attributes = [] ) {

        $contact = array_has( $attributes, 'contact_id' ) ? $attributes[ 'contact_id' ]
            : factory( Contact::class )->create()->id;

        return [
            'username'       => strtolower( $faker->userName . "@" . 'capitalmental.com' ),
            'password'       => bcrypt( 'my.querty' ),
            'status'         => $faker->randomElement( $GLOBALS[ 'user_status' ] ),
            'kind'           => $faker->randomElement( $GLOBALS[ 'user_kinds' ] ),
            'active_token'   => str_random( 10 ),
            'g2fa_token'     => $GLOBALS[ '2faToken' ],
            'remember_token' => str_random( 10 ),
            'author_id'      => 1,
            'contact_id'     => $contact

        ];
    } );

    $factory->defineAs( User::class, 'full', function ( Faker\Generator $faker, $attributes = [] ) {

        $isInternal = array_get( $attributes, 'kind', 'external' ) === 'internal';
        $fullData   = userFullData( $faker, $isInternal );

        return [
            'username'       => $fullData[ 'username' ],
            'password'       => bcrypt( 'my.querty' ),
            'status'         => $faker->randomElement( $GLOBALS[ 'user_status' ] ),
            'kind'           => $faker->randomElement( $GLOBALS[ 'user_kinds' ] ),
            'active_token'   => str_random( 10 ),
            'g2fa_token'     => $GLOBALS[ '2faToken' ],
            'remember_token' => str_random( 10 ),
            'author_id'      => 1,
            'contact_id'     => factory( Contact::class )->create( [
                'first_names'    => $fullData[ 'first_names' ],
                'last_names'     => $fullData[ 'last_names' ],
                'preferred_name' => $fullData[ 'preferred_name' ],
                'gender'         => $fullData[ 'gender' ],
                'bday'           => $fullData[ 'bday' ],
                'author_id'      => $fullData[ 'author_id' ],
            ] )->id
        ];
    } );

    /** C O N T A C T S **/
    /** ************************************************* **/

    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    $factory->define( Contact::class, function ( Faker\Generator $faker ) {
        return [
            'first_names' => $faker->firstName,
            'last_names'  => $faker->lastName,
            'bday'        => $faker->dateTimeBetween( '-65 years', '-17 years' )
        ];
    } );


    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    $factory->define( Company::class, function ( Faker\Generator $faker ) {
        $companyData = companyData( $faker );

        return [
            'name'       => $companyData[ 'name' ],
            'short_name' => $companyData[ 'shortName' ],
            'domain'     => $companyData[ 'domain' ],
            'code'       => $companyData[ 'code' ],
        ];
    } );


    /** P R O J E C T S  A N D  E V E N T S **/
    /** ************************************************* **/

    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    $factory->define( Project::class, function ( Faker\Generator $faker ) {
        /** @var fakerBuildingNames $faker */
        $faker->addProvider( new fakerBuildingNames( $faker ) );
        $faker->dateTimeBetween();
        return [
            'title'       => $faker->buildingName(),
            'description' => $faker->buildingPhases(),
        ];
    } );

    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    $factory->define( Auction::class, function ( Faker\Generator $faker ) {
        /** @var fakerParticipationDates $faker */
        $faker->addProvider( new fakerParticipationDates( $faker ) );
        //$faker->setBase( \Carbon\Carbon::now()->addMonths(3) );
        return [
            'title'       => $faker->sentence( 5 ),
            'description' => $faker->paragraph( 5 ),
            //'starts_at'   => $faker->datePeriodStart( '-2 months', '2 months', '7 days', '2 days' ),
            //'ends_at'     => $faker->datePeriodEnd()
        ];
    } );

    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    $factory->define( Forum::class, function ( Faker\Generator $faker ) {
        /** @var fakerParticipationDates $faker */
        $faker->addProvider( new fakerParticipationDates( $faker ) );
        //$faker->setBase( \Carbon\Carbon::now()->addMonths(3) );
        return [
            'title'       => $faker->sentence( 5 ),
            'description' => $faker->paragraph( 5 ),
            //'starts_at'   => $faker->datePeriodStart( '-2 months', '2 months', '7 days', '1 days' ),
            //'ends_at'     => $faker->datePeriodEnd()
        ];
    } );

    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    $factory->define( Meeting::class, function ( Faker\Generator $faker ) {
        /** @var fakerParticipationDates $faker */
        $faker->addProvider( new fakerParticipationDates( $faker ) );
        //$faker->setBase( \Carbon\Carbon::now()->addMonths(3) );
        return [
            'title'       => $faker->sentence( 5 ),
            'description' => $faker->paragraph( 5 ),
            //'starts_at'   => $faker->datePeriodStart( '-2 months', '2 months', '3 hours', '1 hour' ),
            //'ends_at'     => $faker->datePeriodEnd()
        ];
    } );

    /**
     * M E N U S   D E F A U L T
     * ---------------------------------------
     */
    $factory->define( Monoux\Models\System\Menu::class, function ( Faker\Generator $faker ) {
        return [

        ];
    } );


    /** C A T A L O G S **/
    /** ************************************************* **/
    $factory->define( \Monoux\Models\Catalogs\Timezone::class, function ( Faker\Generator $faker ) {
        return [

        ];
    } );

    $factory->define( \Monoux\Models\Catalogs\Country::class, function ( Faker\Generator $faker ) {
        return [

        ];
    } );


    /** M E S S A G I N G **/
    /** ************************************************* **/

    $factory->define( Message::class, function ( Faker\Generator $faker ) {
        $messagesOpts = ['Auction', 'Account', 'System'];
        $priorityOpts = ['HG', 'MD', 'LW', 'R'];
        //--> $priorityOpts = ['HG', 'MD', 'LW', 'R'];

        return [
            'title'     => $this->faker->realText( 80 ),
            'content'   => $this->faker->text(),
            'kind'      => $this->faker->randomElement( $messagesOpts ),
            'priority'  => $this->faker->randomElement( $priorityOpts ),
            'author_id' => User::internal()->get()->random()->id
        ];
    } );

    $factory->define( Notification::class, function ( Faker\Generator $faker ) {
        $notificationOpts = ['Auction', 'Individual', 'System', 'Project'];
        $priorityOpts     = ['HG', 'MD', 'LW', 'R'];
        return [
            'title'     => $faker->realText( 80 ),
            'content'   => $faker->text(),
            'kind'      => $faker->randomElement( $notificationOpts ),
            'priority'  => $faker->randomElement( $priorityOpts ),
            'author_id' => User::internal()->get()->random()->id
        ];
    } );


    /** S U P P O R T **/
    /** ************************************************* **/

    $factory->define( Support::class, function ( Faker\Generator $faker ) {
        $supportOptions = ['Support', 'Reminder', 'FollowUp', 'Error', 'Bug', 'Suggestion', 'Opinion'];
        $statusOptions  = ['Open', 'Closed', 'Cancelled'];
        $priorityOpts   = ['HG', 'MD', 'LW', 'R'];
        return [
            'title'    => $faker->realText( 80 ),
            'content'  => $faker->realText( 380 ),
            'kind'     => $faker->randomElement( $supportOptions ),
            'status'   => $faker->randomElement( $statusOptions ),
            'priority' => $faker->randomElement( $priorityOpts ),
        ];
    } );

    $factory->define( Ticket::class, function ( Faker\Generator $faker ) {
        $ticketsOptions = ['Error', 'Bug', 'Revision'];
        $statusOptions  = ['Open', 'Closed', 'Cancelled'];
        $priorityOpts   = ['HG', 'MD', 'LW', 'R'];
        return [
            'title'    => $faker->realText( 80 ),
            'content'  => $faker->realText( 380 ),
            'kind'     => $faker->randomElement( $ticketsOptions ),
            'status'   => $faker->randomElement( $statusOptions ),
            'priority' => $faker->randomElement( $priorityOpts ),
        ];
    } );


    /** F I N A N C I A L **/
    /** ************************************************* **/

    $factory->define( Customer::class, function ( Faker\Generator $faker, $attributes = [] ) {
        $company_id = array_has( $attributes, 'company_id' ) ? $attributes[ 'company_id' ]
            : factory( Company::class )->create()->id;

        $statusOptions = ['Open', 'Closed', 'Cancelled'];

        return [
            'company_id' => $company_id
        ];

    } );

    $factory->define( Contract::class, function ( Faker\Generator $faker, $attributes = [] ) {

        $customer_id = array_has( $attributes, 'customer_id' ) ? Customer::find( $attributes[ 'customer_id' ] )->id
            : factory( Customer::class )->create()->id;

        $statusOptions = ['Active', 'Pending', 'Cancelled', 'Upgraded'];

        return [
            'customer_id' => $customer_id,
            'notes'       => $faker->optional()->realText( 200 ),
            'status'      => $faker->randomElement( $statusOptions ),
            'valid_since' => $faker->dateTimeBetween( '-6 months', '1 month' ),
            'valid_to'    => $faker->optional()->dateTimeBetween( '6 months', '2 years' ),
        ];
    } );

    $factory->define( Invoice::class, function ( Faker\Generator $faker, $attributes = [] ) {

        $company_id = array_has( $attributes, 'company_id' ) ? Company::find( $attributes[ 'company_id' ] )->id
            : factory( Company::class )->create()->id;

        /** @var Customer $customer */
        $customer = Customer::whereCompanyId( $company_id )->first()
            ?: factory( Customer::class )->create( [
                'company_id' => $company_id
            ] );

        /** @var Contract $customer */
        $contract = Contract::whereCustomerId( $customer->id )->first()
            ?: factory( Contract::class )->create( [
                'customer_id' => $customer->id
            ] );

        $statusOptions = ['Active', 'Draft', 'Cancelled'];

        return [
            'customer_id'  => $customer->id,
            'contract_id'  => $contract->id,
            'vat_code'     => strtoupper( $faker->bothify( '????######??#' ) ),
            'notes'        => $faker->optional()->paragraph( 3 ),
            'status'       => $faker->randomElement( $statusOptions ),
            'valid_since'  => $faker->dateTimeBetween( '-6 months', '1 month' ),
            'published_at' => $faker->optional()->dateTimeBetween( '6 months', '2 years' ),
        ];
    } );

    $factory->define( Discount::class, function ( Faker\Generator $faker ) {
        $discounts     = ['Christmas', 'New Year', 'Thanks Giving', 'First Timers'];
        $statusOptions = ['Active', 'Cancelled', 'Over'];
        $kinds         = ['money', 'events', 'users', 'support', 'percentage'];

        return [
            'code'        => strtoupper( $faker->bothify( "?????##-??#" ) ),
            'title'       => "Discount for " . $faker->randomElement( $discounts ),
            'description' => $faker->paragraph( 5 ),
            'kind'        => $faker->randomElement( $kinds ),
            'limit'       => $faker->numberBetween( 10, 50 ),
            'amount'      => $faker->numberBetween( 10, 30 ),
            'status'      => $faker->randomElement( $statusOptions ),
            'valid_since' => $faker->dateTimeBetween( '-6 months', '1 month' ),
            'valid_to'    => $faker->dateTimeBetween( 'now', '1 month' ),
        ];
    } );

    $factory->define( Plan::class, function ( Faker\Generator $faker ) {

        $namePre       = ["Pro", "Small Business", "Custom", "Enterprise", 'Personal', "StartUp"];
        $nameSuf       = [
            "International",
            "Commercial",
            "Seasonal",
            "Promotional",
            "for Mexico",
            "for Americas",
            "for Europe"
        ];
        $recurrence    = ["Monthly", "Annual", "OneTime", "Six Months"];
        $statusOptions = ['Active', 'Cancelled', 'Expired'];

        return [
            'title'       => $faker->randomElement( $namePre ) . " Plan " . $faker->randomElement( $nameSuf ),
            'code'        => strtoupper( $faker->bothify( "????" ) ),
            'recurrence'  => $faker->randomElement( $recurrence ),
            'price'       => $faker->numberBetween( 10, 200 ),
            'events'      => $faker->numberBetween( 10, 200 ),
            'support'     => $faker->numberBetween( 5, 20 ),
            'users'       => $faker->numberBetween( 2, 10 ),
            'status'      => $faker->randomElement( $statusOptions ),
            'valid_since' => $faker->dateTimeBetween( '-6 months', '1 month' ),
            'valid_to'    => $faker->optional()->dateTimeBetween( '6 months', '2 years' ),
        ];
    } );