<?php

namespace App\User\Infrastructure\Service;

use App\User\Domain\Service\AuthServiceInterface;

class AuthService implements AuthServiceInterface
{
    public function login(array $data): array
    {
        return [];
    }

    public function logout(string $token)
    {
        return null;
    }

    public function refreshToken(string $token)
    {
        return null;
    }
}