<?php

namespace App\Shared\Domain;

use Doctrine\ORM\QueryBuilder;

interface FilterInterface
{
    public function handle(QueryBuilder $query, array|object $params): void;
}