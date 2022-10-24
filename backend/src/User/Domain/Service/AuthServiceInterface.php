<?php

namespace App\User\Domain\Service;


interface AuthServiceInterface
{
    public function login(array $data): array;

    public function logout(string $token);

    public function refreshToken(string $token);
}