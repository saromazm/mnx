<?php

    use Illuminate\Database\Seeder;
    use Monoux\Models\Management\Role;
    use Monoux\Models\Management\Module;
    use Monoux\Models\Management\Permission;
    use Monoux\Models\Catalogs\Title;
    use Monoux\Models\System\Catalog;
    use Monoux\Models\Catalogs\FType;
    use Monoux\Models\Catalogs\Timezone;
    use Monoux\Models\Catalogs\Country;
    use Monoux\Models\System\Menu;

    class SystemCatalogsSeeder extends Seeder {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run() {

            $this->countries();

            $this->timezones();

            foreach ( $this->baeMenus() as $menu ) {
                factory( Menu::class )->create(
                    [
                        'code'      => $menu[ 1 ],
                        'label'     => $menu[ 4 ],
                        'kind'      => $menu[ 3 ],
                        'icon'      => $menu[ 2 ],
                        'target'    => $menu[ 5 ],
                        'parent_id' => $menu[ 6 ],
                    ]
                );
            }

            foreach ( $this->baseCatalogsNames() as $key => $value ) {
                Catalog::create( [
                    'code' => $key,
                    'name' => $value
                ] );
            }

            foreach ( $this->baseTitlesNames() as $key => $value ) {
                Title::create( [
                    'name' => $value,
                    'code' => $key
                ] );
            }

            foreach ( $this->baseFiletypes() as $fType ) {
                FType::create( [
                    'extension'   => $fType[ 0 ],
                    'description' => $fType[ 1 ]
                ] );
            }

            foreach ( $this->baseModules() as $index ) {

                Module::create( [
                    'name'        => $index,
                    'code'        => strtolower( $index ),
                    'description' => 'Module ' . $index . ' description'
                ] );
            }

            foreach ( $this->baseRolesNames( 'global' ) as $key => $value ) {
                Role::create( [
                    'code'        => $key,
                    'name'        => $value,
                    'kind'        => 'global',
                    'description' => 'The Description of ' . $value,
                    'status'      => 'active'
                ] );
            }

            foreach ( $this->baseRolesNames( 'participation' ) as $key => $value ) {
                Role::create( [
                    'code'        => $key,
                    'name'        => $value,
                    'kind'        => 'participation',
                    'description' => 'The Description of ' . $value,
                    'status'      => 'active'
                ] );
            }

            $this->permissions();

        }

        /** C R E A T O R S **/
        /** ************************************************* **/

        private function countries() {
            $file  = Storage::disk( 'root' )->get( "database/catalogs/countriesData.csv" );
            $lines = explode( "\n", $file );
            array_shift( $lines );

            foreach ( $lines as $l => $line ) {

                $fields = explode( ",", str_replace( '"', '', $line ) );
                Country::create( [
                    "name"      => $fields[ 0 ],
                    "code"      => $fields[ 1 ],
                    "code3"     => $fields[ 2 ],
                    "area_code" => $fields[ 8 ],
                ] );
            }
        }

        private function timezones() {
            $fileTZ  = Storage::disk( 'root' )->get( "database/catalogs/timezones.txt" );
            $linesTZ = explode( "\n", $fileTZ );

            foreach ( $linesTZ as $ltz => $lineTZ ) {
                $fieldsTZ = explode( "\t", $lineTZ );

                Timezone::create( [
                    "name"         => $fieldsTZ[ 1 ],
                    "country_code" => $fieldsTZ[ 0 ]
                ] );
            }
        }

        public function permissions() {

            $modules = Module::all();

            foreach ( $modules as $module ) {
                foreach ( $this->basePermissions() as $permissionName ) {

                    if ( rand( 0, 1 ) ) {
                        $permission = Permission::create( [
                            'name'        => $permissionName,
                            'description' => 'Permission ' . $permissionName . ' for Module ' . $module->name . ' description',
                            'module_id'   => $module->id
                        ] );

                        /** @var Role $role */
                        foreach ( Role::globals()->get() as $role ) {
                            if ( rand( 0, 1 ) ) {
                                $role->grantPermission( $permission );
                            }
                        }
                    }
                }
            }
        }

        /** C A T A L O G   B A S E S **/
        /** ************************************************* **/

        private function baeMenus() {
            return [
                [1, 'home', 'icon-home05', '', 'Home', 'testing/fonts', 0],

                [2, 'dashboard', 'icon-dashboard01', '', 'Dashboard', '', 1],
                [3, 'messages', 'icon-message05', '', 'Messages', '', 1],
                [4, 'support', 'icon-lifesaver01', '', 'Support', '', 1],
                [5, 'calendar', 'icon-calendar04', '', 'Calendar', '', 1],
                [6, 'management', 'icon-tie01', '', 'Management', '', 1],
                [7, 'financial', 'icon-finance01', '', 'Financial', '', 1],
                [8, 'purchases', 'icon-receipt05', '', 'Purchases', '', 1],
                [9, 'my_account', 'icon-profile09', '', 'My Account', '', 1],
                [10, 'testing', 'icon-medical05', '', 'Testing', '', 1],
                [11, 'about', 'icon-sunglasses01', '', 'About', '', 1],

                [12, 'users', 'icon-user13', 'dynamic', 'Users', '', 6],
                [13, 'companies', 'icon-building05', 'dynamic', 'Companies', '', 6],
                [14, 'roles', 'icon-group05', 'dynamic', 'Roles', '', 6],
                [15, 'permissions', 'icon-checklist05', 'dynamic', 'Permissions', '', 6],
                [16, 'modules', 'icon-module01', 'dynamic', 'Modules', '', 6],
                [17, 'catalogs', 'icon-books01', 'dynamic', 'Catalogs', '', 6],
                [18, 'agreements', 'icon-agreement01', 'dynamic', 'Agreements', '', 6],

                [19, 'inbox', '', 'dynamic', 'Inbox', 'messages/menu', 3],
                [20, 'outbox', '', '', 'Outbox', '', 3],
                [21, 'favs', 'icon-star01', '', 'Favs', '', 3],
                [22, 'trashed', 'icon-trash01', '', 'Trashed', '', 3],
                [23, 'notifications', 'icon-sms01', '', 'Notifications', '', 3],

                [24, 'faq', 'icon-notifications03', '', 'Faq', '', 4],
                [25, 'tickets', '', '', 'Tickets', '', 4],
                [26, 'follow_up', 'icon-headset01', '', 'Follow Up', '', 4],
                [27, 'reports', 'icon-user11', '', 'Reports', '', 4],
                [28, 'suggestions', 'icon-wand01', '', 'Suggestions', '', 4],
                [29, 'maintenance', 'icon-underconstruction01', '', 'Maintenance', '', 4],
                [30, 'system_status', 'icon-network03', '', 'System Status', '', 4],
                [31, 'logs', 'icon-human50', '', 'Logs', '', 4],

                [32, 'customers', 'icon-user15', 'dynamic', 'Customers', '', 7],
                [33, 'invoices', 'icon-receipt01', 'dynamic', 'Invoices', '', 7],
                [34, 'contracts', 'icon-agreement01', 'dynamic', 'Contracts', '', 7],
                [35, 'discounts', 'icon-finance05', 'dynamic', 'Discounts', '', 7],
                [36, 'plans', 'icon-finance05', 'dynamic', 'Plans', '', 7],

                [37, 'rfi', '', '', 'RFI', '', 8],
                [38, 'rfq', '', '', 'RFQ', '', 8],
                [39, 'reverse_auctions', 'icon-auction01', '', 'Reverse Auction', '', 8],
                [40, 'project', 'icon-briefcase11', 'dynamic', 'Projects', '', 8],
            ];
        }

        private function baseCatalogsNames() {

            $catalog[ 'titles' ]    = "Titles";
            $catalog[ 'filetypes' ] = "Filetypes";
            $catalog[ 'countries' ] = "Countries";
            $catalog[ 'timezones' ] = "Timezones";
            $catalog[ 'modules' ]   = "Modules";
            $catalog[ 'timezones' ] = "Timezones";

            return $catalog;
        }

        private function baseTitlesNames() {

            $title[ 'mr' ]   = "Mr.";
            $title[ 'mrs' ]  = "Mrs.";
            $title[ 'miss' ] = "Miss";
            $title[ 'dr' ]   = "Dr.";
            $title[ 'md' ]   = "M.D.";
            $title[ 'phd' ]  = "Ph.D.";
            $title[ 'eng' ]  = "Eng.";
            $title[ 'mba' ]  = "M.B.A";

            return $title;
        }

        private function baseFiletypes() {
            return [
                ['xls', 'Excel Spreadsheet'],
                ['xlsx', 'Excel Spreadsheet'],
                ['csv', 'Comma Separated Values'],
                ['doc', 'Word Document'],
                ['docx', 'Word Document'],
                ['pdf', 'Adobe Portable Document Format'],
                ['jpg', 'JPG Image'],
                ['gif', 'GIF Image'],
                ['png', 'PNG Image'],
                ['psd', 'Photoshop Document'],
                ['svg', 'SVG Scalable Vector Graphics'],
                ['html', 'HTML File'],
                ['htm', 'HTM File'],
                ['swf', 'Shockwave Flash File'],
                ['avi', 'Avi File'],
                ['mov', 'Mov File'],
                ['mp3', 'MP3 File'],
                ['mp4', 'MP4 File'],
                ['zip', 'Zip Compressed File'],
                ['rar', 'Rar Compressed File']
            ];
        }

        private function baseModules() {
            return ['Users', 'Companies', 'Messages', 'Notifications', 'Tickets', 'Herarchy', 'Projects', 'Auctions'];
        }

        private function baseRolesNames( $kind ) {

            if ( $kind == 'global' ) {
                $role[ 'sadmin' ]      = "Super Administrator";
                $role[ 'admin' ]       = "Administrator";
                $role[ 'guest' ]       = "Guest";
                $role[ 'test' ]        = "Testing";
                $role[ 'audit' ]       = "Auditor";
                $role[ 'observer' ]    = "Observer";
                $role[ 'demo' ]        = "Demo";
                $role[ 'staff_admin' ] = "Staff Administrator";
            } else {
                $role[ 'supplier' ]       = "Supplier";
                $role[ 'blind_observer' ] = "Blind Observer";
                $role[ 'full_observer' ]  = "Full Observer";
                $role[ 'staff' ]          = "Staff";
                $role[ 'owner' ]          = "Owner";
                $role[ 'advisor' ]        = "Advisor";
                $role[ 'shared_owner' ]   = "Shared Owner";
                $role[ 'contractor' ]     = "Contractor";
                $role[ 'owner_rep' ]      = "Owner Representative";
            }
            return $role;
        }

        private function basePermissions() {
            return [
                'add',
                'edit',
                'delete',
                'modify_all',
                'modify_own',
                'observe',
                'manage',
                'post',
                'compose',
                'full_delete'
            ];
        }

    }
