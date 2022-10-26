<?php

namespace App\Car\Application\DTO;

use Symfony\Component\Security\Core\User\UserInterface;

class CarDTO
{
    public function __construct(
        public string $model,

        public string $manufacturer,

        public ?string $image,

        public string $fuelType,

        public string $transmissionType,

        public int $passengersNumber,

        public float $engineCapacity,
    ) {
    }
}