<?php

namespace App\Car\Domain\Repository;

use App\Entity\Car;
use App\Entity\User;

interface CarRepositoryInterface
{
    public function save(Car $entity, bool $flush = false): void;

    public function remove(Car $entity, bool $flush = false): void;

    public function getAll(): array;

    public function getAllByUser(User $user): array;

    public function getById(int $id): ?Car;
}