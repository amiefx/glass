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
        if ($request->user() && $request->user()->type == 'Admin')
        {
            dd('hello');
            return $next($request);

            exit;
        }

        return response()->json(['error'=> 'Unauthorized to access these content'], 500);
    }
}
