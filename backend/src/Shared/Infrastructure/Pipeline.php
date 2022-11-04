<?php

namespace App\Shared\Infrastructure;

use App\Shared\Domain\PipelineInterface;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;

class Pipeline implements PipelineInterface
{
    private QueryBuilder $query;
    private array $callbacks;
    private array|object $params;

    public function send(QueryBuilder $query): PipelineInterface
    {
        $this->query = $query;

        return $this;
    }

    public function through(array $callbacks): PipelineInterface
    {
        $this->callbacks = $callbacks;

        return $this;
    }


    public function thenReturn(): QueryBuilder
    {
        $this->pipe();

        return $this->query;
    }

    public function setParams(object|array $params): PipelineInterface
    {
        $this->params = $params;

        return $this;
    }

    private function pipe(): void
    {
        $query = $this->query;

        foreach ($this->callbacks as $callback) {
            (new $callback())->handle($query, $this->params);
        }

        $this->query = $query;
    }
}