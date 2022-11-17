<?php

namespace App\Car\Infrastructure\Filters;

use App\Shared\Domain\FilterInterface;
use Doctrine\ORM\QueryBuilder;

class TariffFilter implements FilterInterface
{

    public function handle(QueryBuilder $query, object|array $params): void
    {
        if(!is_null($params->tariffId)){
            $query = $query->andWhere('c.tariff = :id')
                ->setParameter('id', (string) $params->tariffId);
        }
    }
}