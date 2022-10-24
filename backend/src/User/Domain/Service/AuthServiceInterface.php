<?php

namespace App\User\Domain\Service;


use App\Entity\User;

interface AuthServiceInterface
{
    public function login(User $user): array;

    public function logout(User $user);

    public function refreshToken(string $token);
}