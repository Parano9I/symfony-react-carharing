<?php

namespace App\Car\Application\DTO;

class CarsGetAllQueryParamsDTO
{
    public int $page;
    public ?string $manufacturer;
    public ?string $fuelType;

    public function __construct(
        int $page,
        ?string $manufacturer,
        ?string $fuelType
    ) {
        $this->page = $this->setPageNumber($page);
        $this->fuelType = $fuelType;
        $this->manufacturer = $manufacturer;
    }

    private function setPageNumber($page){
        return $page <= 0 ? 1 : $page;
    }


}