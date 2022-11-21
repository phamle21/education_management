<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/topics",
     *      operationId="getTopicsList",
     *      tags={"Topics"},
     *      summary="Get Topics list",
     *      description="Returns Topics list",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function index()
    {
        $topics = Topic::all();

        $response = [
            'status' => 'success',
            'msg' => 'Lấy thành công danh sách danh mục!',
            'data' => $topics
        ];
        return response()->json($response);
    }

    /**
     * @OA\Post(
     *      path="/api/topics",
     *      operationId="createNewTopics",
     *      tags={"Topics"},
     *      summary="Create Topic",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="name",
     *            description="Name of topic",
     *            example="Danh muc 1",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function store(Request $request)
    {
        $response = [];
        $add = Topic::create([
            'name' => $request->name
        ]);

        if ($add) {

            $response = [
                'status' => 'success',
                'msg' => 'Thêm danh mục thành công',
                'data' => $add
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Thêm danh mục thất bại!!',
            ];
        }

        return response()->json($response);
    }

    /**
     * @OA\Get(
     *      path="/api/topics/{id}",
     *      operationId="getTopicDetails",
     *      tags={"Topics"},
     *      summary="Get details of Topic",
     *      description="Returns Topic details",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="topic_id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function show($id)
    {
        if (Topic::where('id', $id)->exists()) {
            $topic = Topic::find($id);

            $response = [
                'status' => 'success',
                'msg' => 'Lấy thành công chi tiết danh mục!',
                'data' => $topic
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Danh mục không tồn tại'
            ];
        }
        return response()->json($response);
    }

    /**
     * @OA\Post(
     *      path="/api/topics/{id}",
     *      operationId="pdateTopics",
     *      tags={"Topics"},
     *      summary="Update Topic",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="id of topic",
     *            example="1",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function update(Request $request, $id)
    {
        $response = [];
        if (Topic::where('id', $id)->exists()) {
            $update = Topic::find($id)->update([
                'name' => $request->name,
            ]);

            if ($update) {

                $topics = Topic::all();

                $response = [
                    'status' => 'success',
                    'msg' => 'Update "' . $request->name . '" completed.',
                    'data' => $topics
                ];
            } else {
                $response = [
                    'status' => 'failed',
                    'msg' => 'Update "' . $request->name . '" failed',
                ];
            }
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Danh mục không tồn tại'
            ];
        }
        return response()->json($response);
    }

    /**
     * @OA\Delete(
     *      path="/api/topics/{id}",
     *      operationId="deleteTopic",
     *      tags={"Topics"},
     *      summary="Delete topics",
     *      description="Returns status delete",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="topic_id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function destroy($id)
    {
        if (Topic::where('id', $id)->exists()) {

            $topic = Topic::find($id);

            $response = [];

            if ($topic->delete()) {

                $response = [
                    'status' => 'success',
                    'msg' => 'Delete topic completed'
                ];
            } else {
                $response = [
                    'status' => 'failed',
                    'msg' => 'Delete topic failed'
                ];
            }
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Khóa học không tồn tại'
            ];
        }

        return response()->json($response);
    }
}
