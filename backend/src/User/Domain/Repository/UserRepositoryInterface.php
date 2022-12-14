<?php

namespace App\User\Domain\Repository;

use App\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;

interface UserRepositoryInterface
{
    public function save(User $entity, bool $flush = false): void;

    public function remove(User $entity, bool $flush = false): void;

    public function getByEmail(string $email): ?User;

    public function getAll();
}