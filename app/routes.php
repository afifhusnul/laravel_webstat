<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/*Route::get('/', function()
{
	return View::make('graph');
});
*/

Route::get('/', array('as' => 'home', 'uses' => 'HomeController@index'));
Route::get('cpu', array('as' => 'cpu', 'uses' => 'CpuController@index'));
Route::get('/cpu/palsu', array('as' => '/cpu/palsu', 'uses' => 'CpuController@palsu'));
Route::get('/cpu/koplo', array('as' => '/cpu/koplo', 'uses' => 'CpuController@koplo'));

Route::get('opo', array('as' => 'opo', 'uses' => 'OpoController@index'));
Route::get('/opo/test', array('as' => 'opo/test', 'uses' => 'OpoController@tt'));
Route::get('/opo/palsu', array('as' => 'opo/palsu', 'uses' => 'OpoController@pal'));

//Route::get('opo', function() {
//    return Response::json(array('name' => 'Badut'));
//});
