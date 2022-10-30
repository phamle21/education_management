<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $time = $this->faker->dateTime();
        return [
            'name' => $this->faker->name,
            'description' => $this->faker->text,
            'content' => $this->faker->text(250),
            'start' => $time,
            'end' => Carbon::parse($time)->addDays(90),
            'quantity' => $this->faker->numberBetween($min = 10, $max = 30),
            'tuition' => $this->faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 10000000),
            'user_id' => User::all()->random()->id,
            'image' => 'courses/i9XP6QAnYx9nos4I3FYDsprmhPcWcFM3seReT4qn.jpg',
        ];
    }
}
