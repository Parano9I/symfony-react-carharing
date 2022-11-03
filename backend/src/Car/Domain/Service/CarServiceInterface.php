<?php

namespace App\Car\Domain\Service;

use App\Car\Application\DTO\CarDTO;
use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Entity\Car;
use App\Entity\User;

interface CarServiceInterface
{

    public function create(CarDTO $carDTO, User $user): int;

    public function getAll(CarsGetAllQueryParamsDTO $queryParamsDTO): array;

    public function getAllByUser(User $user): array;

    public function getByIdAndByUserId(User $user, int $id): ?Car;
}