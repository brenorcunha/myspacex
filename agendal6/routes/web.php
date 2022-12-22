<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', function () {
    return view('home');
})->name('home')->middleware('auth');

Route::resource('agenda', 'AgendaController');

#Indica metodo index que está no agendacontroller, vai apontar pro metodo que chama o agenda index.
#Teriam de ser criadas todas as rotas manualmente.
#Route::get('/agenda', 'AgendaController@index')->name('agenda.index');
#Simplificando, assim ele cria todas as rotas automaticamente: 
