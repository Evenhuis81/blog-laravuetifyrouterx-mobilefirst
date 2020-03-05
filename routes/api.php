<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function() {
    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');

    Route::get('me', 'MeController');
});

// Route::post('blogs', 'BlogController@store');
Route::get('blogs', 'BlogController@index');
// Route::delete('blogs/{id}', 'BlogController@destroy');

// Route::get('categories', 'CategoryController@index');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
