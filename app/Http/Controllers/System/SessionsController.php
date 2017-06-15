<?php
    /**
     *
     *  File: SessionsController.php | Package: Monoux
     *
     *  Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     *  Created:   03 Sep, 2016 | 12:20 AM
     *
     *  This file is part of a package and all the information, intellectual
     *  and technical concepts contained here are property of their owners.
     *  Any kind of use, reproduction, distribution, publication, etc. without
     *  express written permission from CapitalMental && BackLogics Technologies
     *  is strictly forbidden.
     *
     *  CapitalMental && BackLogics Technologies
     *  Copyright 2014-present. | All rights reserved.
     *
     *
     *
     */

    namespace Monoux\Http\Controllers\System;

    use Monoux\Http\Controllers\Controller;
    use Auth;
    use PragmaRX\Google2FA\Google2FA;
    use Monoux\Models\Management\User;

    class SessionsController extends Controller {

        // Response Status Codes
        const OK          = 200;
        const WRONG_PASS  = 401;
        const WRONG_TOKEN = 403;
        const SIGNED_IN   = 202;
        const SECURED     = 200;

        /** @var User|null */
        protected $user = null;

        /** @var Auth|null */
        protected $auth = null;

        /** @var Google2FA|null */
        protected $g2fa = null;

        protected $username   = null;
        protected $password   = null;
        protected $g2fa_token = null;

        private $company = null;

        function __construct() {
            $this->auth    = auth();
            $this->user    = $this->auth->user();
            $this->g2fa    = new Google2FA();
            $this->company = env( 'APP_CIA', 'CapitalMental' );
        }


        public function check() {

            if ( $this->isUsers2FAuthenticated() && $this->isUserSingedIn()) {
                return $this->response( 200, true, false );
            }

            if ( $this->isUserSingedIn() ) {
                return $this->response( 202, false, true );
            }

            return $this->response( 0, false, false );
        }


        public function attempt() {

            if ( $this->isTryingToSignIn() && $this->canBeSignedIn() ) {
                return $this->response( self::SIGNED_IN, false, true );
            }

            return $this->response( self::WRONG_PASS, false, false );
        }

        public function attempt2fa() {

            if ( $this->isTryingTo2FAuthenticate() && $this->canBe2FAuthenticated() ) {
                session()->put( 'secured', true );
                return $this->response( self::SECURED, true, true );
            }

            return $this->response( self::WRONG_TOKEN, false, false );
        }

        public function logout(  ) {

            session()->forget( 'secured' );
            $this->auth->logout();

            return $this->response( 401, false, false );
        }

        /** ************************************************* **/

        private function canBeSignedIn(  ) {
            return  $this->auth->attempt( ['username' => $this->username, 'password' => $this->password] );
        }

        private function canBe2FAuthenticated(  ) {
            return $this->g2fa->verifyKey( $this->auth->user()->g2fa_token, $this->g2fa_token );
        }

        private function isTryingToSignIn() {
            $this->username = request( 'username', false );
            $this->password = request( 'password', false );
            return $this->username && $this->password;
        }

        private function isTryingTo2FAuthenticate() {
            $this->g2fa_token = request( 'token', false );
            return $this->g2fa_token;
        }

        private function isUserSingedIn() {
            return $this->auth->check();
        }

        private function isUsers2FAuthenticated() {
            return session( 'secured', false );
        }

        public function response( $status, $user = false, $qrCode = false ) {

            $usr = $this->auth->user();

            return response( [
                'status' => $status,
                'user'   => $user ? $this->auth->user() : null,
                'qrCode' => $qrCode ? $this->g2fa->getQRCodeUrl( $this->company, $usr->username, $usr->g2fa_token )
                    : null
            ], 200 );
        }
    }