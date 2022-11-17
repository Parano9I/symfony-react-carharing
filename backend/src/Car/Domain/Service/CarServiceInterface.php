<?php

namespace App\Car\Domain\Service;

use App\Car\Application\DTO\CreateCarDTO;
use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Entity\Car;
use App\Entity\User;

interface CarServiceInterface
{

    public function create(array $data, User $user): int;

    public function getAll(CarsGetAllQueryParamsDTO $queryParamsDTO): array;

    public function getAllByUser(User $user): array;

    public function getByIdAndByUserId(User $user, int $id): ?Car;

    public function getAllFilters(): array;
}