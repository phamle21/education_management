<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Schedule>
 */
class ScheduleFactory extends Factory
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
            'date_time_start' => $this->faker->dateTimeBetween($startDate = $course->start, $endDate = $course->end, $timezone = null),
            'date_time_end' => $this->faker->dateTimeBetween($startDate = $course->start, $endDate = $course->end, $timezone = null),
            'course_id' => Course::all()->random()->id,
            'location' => $this->faker->address                             ,
        ];
    }
}
