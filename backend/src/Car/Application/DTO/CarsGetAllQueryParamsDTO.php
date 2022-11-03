<?php

namespace App\Car\Application\DTO;

class CarsGetAllQueryParamsDTO
{
    public int $page = 1;
    public string $manufacturer;
}