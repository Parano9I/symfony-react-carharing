<?php

namespace App\Car\Application\DTO;

class CarsGetAllQueryParamsDTO
{
    public int $page;
    public ?array $manufacturer;
    public ?array $fuelType;
    public ?array $transmissionType;
    public ?array $passengers;
    public int $tariffId;

    public function __construct(
        int $page,
        ?string $manufacturer,
        ?string $fuelType,
        ?string $transmissionType,
        ?string $passengers,
        ?int $tariffId
    ) {
        $this->page = $this->setPageNumber($page);
        $this->fuelType = $this->setArrayParams($fuelType);
        $this->manufacturer = $this->setArrayParams($manufacturer);
        $this->tariffId = $tariffId;
    }

    private function setArrayParams(?string $params):?array {
        if(is_null($params)){
            return null;
        }

        return explode(',', $params);
    }

    private function setPageNumber($page){
        return $page <= 0 ? 1 : $page;
    }


}