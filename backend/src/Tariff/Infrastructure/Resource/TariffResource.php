<?php

namespace App\Tariff\Infrastructure\Resource;

use App\Shared\Domain\AbstractResource;

class TariffResource extends AbstractResource
{

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
        ];
    }
}