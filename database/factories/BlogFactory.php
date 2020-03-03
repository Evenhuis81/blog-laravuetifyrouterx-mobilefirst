<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Blog;
use Faker\Generator as Faker;

$autoIncrement = autoIncrement();

$factory->define(Blog::class, function (Faker $faker) use ($autoIncrement) {
    $autoIncrement->next();
    return [
        'title' => $faker->text(rand(40,60)),
        'description' => $faker->text(rand(400,600)),
        'owner_id' => floor(($autoIncrement->current()-1) / 10) + 2,
        'created_at' => $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null)
        // updated_at => append in BlogSeeder, created_at + random time, for some of them ....
    ];
});

function autoIncrement() {
    for ($i = 0; $i < 51; $i++) {
        yield $i;
    }
}
