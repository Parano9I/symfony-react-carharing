<?php

namespace App\User\Domain\Service;


use App\Entity\User;
use Gesdinet\JWTRefreshTokenBundle\Exception\UnknownUserFromRefreshTokenException;

interface AuthServiceInterface
{
    public function login(User $user): array;

    public function logout(User $user): ?UnknownUserFromRefreshTokenException;
}