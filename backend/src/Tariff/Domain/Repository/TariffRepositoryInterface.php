<?php

namespace App\Tariff\Domain\Repository;

interface TariffRepositoryInterface
{
    public function getAll():array;
}