<?php
namespace App\Car\Domain\Repository;

use App\Entity\Car;

interface CarRepositoryInterface
{
    public function save(Car $entity, bool $flush = false): void;

    public function remove(Car $entity, bool $flush = false): void;

    public function getAll():array;
}