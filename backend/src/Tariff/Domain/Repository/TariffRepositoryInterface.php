<?php

namespace App\Tariff\Domain\Repository;

use App\Entity\Tariff;

interface TariffRepositoryInterface
{
    public function getAll():array;

    public function save(Tariff $entity, bool $flush = false): void;

    public function remove(Tariff $entity, bool $flush = false): void;

    public function getByName(string $name):?Tariff;
}