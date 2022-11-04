<?php

namespace App\Shared\Domain;

use Doctrine\ORM\Query;

interface PaginationInterface
{
    public function paginate(Query $query, int $numberPage, int $pageSize):array;
}