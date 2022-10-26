<?php

namespace App\Car\Application\DTO;

class CarDTO
{
    public string $model;

    public string $manufacturer;

    public ?string $image = null;

    public string $fuelType;

    public string $transmissionType;

    public int $passengersNumber;

    public float $engineCapacity;

    public function __construct()
    {
    }
}