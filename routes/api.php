<?php

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');    
});



// use Illuminate\Http\Request;

// Route::group(['prefix' => 'auth'], function() {
//     Route::post('signin', 'AuthController@');
//     Route::post('signout', 'SignOutController');

//     Route::get('me', 'MeController');
// });

// Route::post('blogs', 'BlogController@store');
Route::get('blogs', 'BlogController@index');
// Route::delete('blogs/{id}', 'BlogController@destroy');

// Route::get('categories', 'CategoryController@index');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
