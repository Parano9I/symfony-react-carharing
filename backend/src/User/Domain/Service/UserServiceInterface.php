<?php

namespace App\User\Domain\Service;

use App\Entity\User;
use App\User\Application\DTO\CreateUserDTO;
use Symfony\Component\PasswordHasher\Exception\InvalidPasswordException;

interface UserServiceInterface
{
    public function create(CreateUserDTO $dto): User;

    public function getByEmail($email): ?User;

    public function verifyCredentialPassword(User $user, string $plainPassword): ?InvalidPasswordException;

    public function getAll(): array;

    public function changeRole(User $user, string $role): ?User;
}