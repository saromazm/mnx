<?php

    namespace Monoux\Http\Middleware;

    use Closure;

    class TwoFactorAuth {
        /**
         * Handle an incoming request.
         *
         * @param  \Illuminate\Http\Request $request
         * @param  \Closure $next
         * @return mixed
         */
        public function handle( $request, Closure $next, $guard = null ) {
            return response("Invalid Token", 403);
            //dd($this,"dd",func_get_args());
            /*if($guard){

            }
            return $next( $request );*/
        }
    }
