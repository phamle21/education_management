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
            'description' => $this->faker->name,
            'content' => $this->faker->text,
            'start' => $time,
            'end' => Carbon::parse($time)->addDays(90),
            'quantity' => $this->faker->numberBetween($min = 10, $max = 30),
            'tuition' => $this->faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 10000000),
            'user_id' => User::all()->random()->id,
            'image' => 'https://miro.medium.com/max/828/0*SWo_aX0tT-LNtLzB',
        ];
    }
}
