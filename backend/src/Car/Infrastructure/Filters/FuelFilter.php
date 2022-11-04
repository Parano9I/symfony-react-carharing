<?php

namespace App\Car\Infrastructure\Filters;

use App\Shared\Domain\FilterInterface;
use Doctrine\ORM\QueryBuilder;

class FuelFilter implements FilterInterface
{
    public function handle(QueryBuilder $query, object|array $params): void
    {
        if (!is_null($params->fuelType)) {
            $query = $query->andWhere('c.fuelType =:fuel')
                ->setParameter('fuel', $params->fuelType);
        }
    }
}