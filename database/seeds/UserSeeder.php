<?php

use App\User;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        
        // factory(User::class,6)->create();
        User::create([
            'firstname' => 'Admin',
            'email' => 'admin@admin.nl',
            'password' => bcrypt('admin'),
            'role' => 1
        ]);
        User::create([
            'firstname' => 'Author',
            'email' => 'author@author.nl',
            'password' => bcrypt('author'),
            'role' => 2
        ]);
        foreach (range(3, 6) as $steps) {
            User::create([
                'firstname' => $faker->firstName(rand(0,1) ? 'male' : 'female'),
                'lastname' => $faker->lastName,
                'email' => $faker->unique()->safeEmail,
                'password' => bcrypt($faker->password),
                'role' => 2
            ]);
        };
        User::create([
            'firstname' => 'Reader',
            'email' => 'reader@reader.nl',
            'password' => bcrypt('reader'),
            'role' => 3
        ]);
        foreach (range(8, 21) as $steps) {
            User::create([
                'firstname' => $faker->firstName(rand(0,1) ? 'male' : 'female'),
                'lastname' => $faker->lastName,
                'email' => $faker->unique()->safeEmail,
                'password' => bcrypt($faker->password),
                'role' => 3
            ]);
        };
    }
}