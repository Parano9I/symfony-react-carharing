<?php

namespace App\Shared\Infrastructure;

use App\Shared\Domain\PaginationInterface;
use Doctrine\ORM\Query;
use Doctrine\ORM\Tools\Pagination\Paginator;

final class Pagination implements PaginationInterface
{

    public function paginate(Query $query, int $numberPage, int $pageSize): array
    {
        $paginator = new Paginator($query);
        $totalItems = count($paginator);
        $pagesCount = ceil($totalItems / $pageSize);
        $paginator
            ->getQuery()
            ->setFirstResult($pageSize * ($numberPage - 1))
            ->setMaxResults($pageSize);

        $data = $paginator->getQuery()->getResult();

        return [
            'data' => $data,
            'pagination' => [
                'pageCount' => $pagesCount,
                'numberPage' => $numberPage,
                'prevNumberPage' => $this->getPrevNumberPage($numberPage),
                'nextNumberPage' => $this->getNextNumberPage($pagesCount, $numberPage),
            ]
        ];
    }

    private function getPrevNumberPage(int $numberPage): ?int
    {
        $prevNumberPage = $numberPage - 1;

        if ($prevNumberPage <= 0) {
            return null;
        }

        return $prevNumberPage;
    }

    private function getNextNumberPage(int $pagesCount, int $numberPage): ?int
    {
        $nextNumberPage = $numberPage + 1;
        return $nextNumberPage > $pagesCount ? null : $nextNumberPage;
    }
}