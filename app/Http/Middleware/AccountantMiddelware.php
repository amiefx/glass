<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AccountantMiddelware
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
        if ($request->user() && ($request->user()->type == 'Accountant' || $request->user()->type == 'Admin'))
        {
            return $next($request);            
        }
        return response()->json(['error'=> 'Unauthorized to access these content'], 500);
    }
}
