<?php

namespace App\Tariff\Domain\Service;

use App\Entity\Tariff;
use App\Tariff\Application\DTO\CreateTariffDTO;

interface TariffServiceInterface
{
    public function create(CreateTariffDTO $dto):int;

    public function getAll():array;

    public function getById(int $id):Tariff;

    public function getByName(string $name):?Tariff;
}