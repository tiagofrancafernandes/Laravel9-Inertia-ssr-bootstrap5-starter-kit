<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $requiredFields = [
            'role_name',
        ];

        $rules = [
            'role_name' => 'min:3|max:125|string',
            'selectedPermissions' => 'array|exists:permissions,name',
        ];

        if ($this->method() == 'POST') {
            foreach ($rules as $field => $rule) {
                if (in_array($field, $requiredFields)) {
                    $rules[$field] .= '|required';
                }
            }
        }

        return $rules;
    }
}
