<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    protected $table = "agendas";
    protected $fillable = [
        'nome',
        'fone_res',
        'fone_cel',
        'dt_nasc',
        'email',
        'facebook',
        'twitter',
        'instagram'
    ];
}
