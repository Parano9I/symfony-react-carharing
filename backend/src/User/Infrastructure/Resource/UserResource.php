<?php

namespace App\User\Infrastructure\Resource;

use App\Shared\Domain\AbstractResource;

class UserResource extends AbstractResource
{
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'first_name' => $this->firstName,
            'last_name' => $this->lastName,
            'email' => $this->email,
            'phone' => $this->phone,
            'roles' => $this->roles,
        ];
    }
}