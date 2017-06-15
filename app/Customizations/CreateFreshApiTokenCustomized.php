<?php
    /**
     * File: CreateFreshApiTokenCustomized.php | Package: monoux
     *
     * Author:    Miguel Zamora Serrano <mzamoras@backlogics.com>
     * Created:   5 Apr, 2017 | 3:24 PM
     *
     * This file is part of a package and all the information, intellectual
     * and technical concepts contained here are property of their owners.
     * Any kind of use, reproduction, distribution, publication, etc. without
     * express written permission from CapitalMental && BackLogics Technologies
     * is strictly forbidden.
     *
     * CapitalMental && BackLogics Technologies
     * Copyright 2014-present. | All rights reserved.
     */

    namespace Monoux\Customizations;

    use Laravel\Passport\Http\Middleware\CreateFreshApiToken;

    class CreateFreshApiTokenCustomized extends CreateFreshApiToken {
        protected function requestShouldReceiveFreshToken( $request ) {

            return ($request->isMethod('GET') && $request->user($this->guard)) ||
                   ($request->ajax() && session( 'secured', false ) );

        }
    }