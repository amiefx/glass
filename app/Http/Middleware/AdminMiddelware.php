<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminMiddelware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
<<<<<<< HEAD
        if ($request->user() && ($request->user()->type == 'Admin'))
        {
            return $next($request);            
        }
        
=======
        if ($request->user() && $request->user()->type == 'Admin')
        {
            dd('hello');
            return $next($request);

            exit;
        }

>>>>>>> 50d568ccb6e158a57db227e6fc93277706474b29
        return response()->json(['error'=> 'Unauthorized to access these content'], 500);
    }
}
