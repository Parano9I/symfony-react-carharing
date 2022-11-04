<?php

namespace App\Car\Infrastructure\Filters;

use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Shared\Domain\FilterInterface;
use Doctrine\ORM\QueryBuilder;

class ManufacturerFilter implements FilterInterface
{

    public function handle(QueryBuilder $query, array|object $params): void
    {
        if(!is_null($params->manufacturer)){
           $query = $query->andWhere('c.manufacturer =:manufacturer')
               ->setParameter('manufacturer', $params->manufacturer);
        }
    }
}