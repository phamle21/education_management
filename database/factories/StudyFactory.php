<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Study>
 */
class StudyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $course = Course::find(Course::all()->random()->id);
        return [
            'course_id' => Course::all()->random()->id,
            'user_id' => User::all()->random()->id,
            'tuition_paid' => $this->faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 10000000),
        ];
    }
}
