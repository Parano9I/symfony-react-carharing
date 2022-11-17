<?php

namespace App\Car\Domain\Repository;

use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Entity\Car;
use App\Entity\User;
use Doctrine\ORM\Query;

interface CarRepositoryInterface
{
    public function save(Car $entity, bool $flush = false): void;

    public function remove(Car $entity, bool $flush = false): void;

    public function getAll(CarsGetAllQueryParamsDTO $queryParamsDTO): array;

    public function getAllByUser(User $user): array;

    public function getById(int $id): ?Car;

    public function getDistinctValueByField(string $fieldName):array;

}