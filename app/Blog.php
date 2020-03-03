<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title', 'description', 'owner_id'
    ];

    // One to Many relation (inverse)
    public function author()
    {
        return $this->belongsTo('App/User');
    }
}
