<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use JWTAuth;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  ...$guards
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                return redirect(RouteServiceProvider::HOME);
            }
        }

        return $next($request);

        // try {
        //     $user = JWTAuth::parseToken()->authenticate();
        // } catch (Exception $e) {
        //     if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
        //         return response()->json(['status' => 'Token is Invalid']);
        //     }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
        //         return response()->json(['status' => 'Token is Expired']);
        //     }else{
        //         return response()->json(['status' => 'Authorization Token not found']);
        //     }
        // }
        // return $next($request);
        
    }
}
