<?php

namespace App\Car\Infrastructure\Resource;

use App\Shared\Domain\Resource\AbstractResource;

class CarResource extends AbstractResource
{

    public function toArray(): array
    {
        return [
            'model' => $this->model,
            'manufacturer' => $this->manufacturer,
            'image' => $this->image,
            'options' => [
                'fuelType' => $this->fuelType,
                'transmissionType' => $this->transmissionType,
                'passengersNumber' => $this->passengersNumber,
                'engineCapacity' => $this->engineCapacity
            ]
        ];
    }
}