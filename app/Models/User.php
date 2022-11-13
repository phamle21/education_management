<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'address',
        'phone',
        'avatar',
        'role',
        'gender',
        'birthday',
        'email',
        'status',
        'email_verified_at',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'created_at',
        'updated_at'
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function images($type)
    {
        if ($type === "All") {
            $img = Image::where('type', 'User')->get();
        } else {
            $img = Image::where([
                ['type', 'User'],
                ['type_name', $type],
            ])->get();
        }

        return $img;
    }

    public function studyCourse()
    {
        return $this->hasManyThrough(
            Course::class,
            Study::class,
            'user_id',
            'id',
            'id',
            'course_id',
        );
    }

    public function studyInfo()
    {
        $courseOfStudent = $this->studyCourse;

        foreach ($courseOfStudent as $v) {
            $v->image = url(Storage::url($v->image));
            $v['mark'] = $v->mark ? $v->mark : 0;
            $v['finished'] = $v->finished ? $v->finished : 'Unfinished';
            $v['tuition_paid'] = $v->tuition_paid ? $v->tuition_paid : 0;
        }

        return $courseOfStudent;
    }

    public function courseOfTeacher()
    {
        $course_list = Course::where('user_id', $this->id)->get();

        foreach ($course_list as $v) {
            $v->teacher_name = User::withTrashed()->find($v->user_id)->name;
            $v->teacher_avatar = User::withTrashed()->find($v->user_id)->getAvatar();
            $v->image = url(Storage::url($v->image));
            $v->topics;
            $v->totalCourseContent = count(CourseContent::where('course_id', $v->id)->get());
        }

        return $course_list;
    }

    public function getAvatar()
    {
        return url(Storage::url($this->avatar));
    }

    public function getOtherInfor(){
        return UserInformation::where('user_id', $this->id)->get();
    }
}
