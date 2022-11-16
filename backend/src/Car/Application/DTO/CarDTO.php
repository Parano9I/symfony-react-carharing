<?php

namespace App\Car\Application\DTO;

use App\Entity\Tariff;
use App\Entity\User;

class CarDTO
{
    public string $model;

    public string $manufacturer;

    public ?string $image = null;

    public string $fuelType;

    public string $transmissionType;

    public int $passengersNumber;

    public float $engineCapacity;

    public int $tariffId;

    public function __construct()
    {
    }
}