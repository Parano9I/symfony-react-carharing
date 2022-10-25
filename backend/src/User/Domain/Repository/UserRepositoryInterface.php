<?php

namespace App\User\Domain\Repository;

use App\Entity\User;

interface UserRepositoryInterface
{
    public function save(User $entity, bool $flush = false): void;

    public function remove(User $entity, bool $flush = false): void;

    public function getByEmail(string $email): ?User;
}