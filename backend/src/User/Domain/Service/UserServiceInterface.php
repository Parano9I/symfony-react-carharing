<?php

namespace App\User\Domain\Service;

use App\Entity\User;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Component\PasswordHasher\Exception\InvalidPasswordException;

interface UserServiceInterface
{
    public function create(array $data): User;

    public function getByEmail($email): ?User;

    public function verifyCredentialPassword(User $user, string $plainPassword): ?InvalidPasswordException;

    public function getAll(): array;
}