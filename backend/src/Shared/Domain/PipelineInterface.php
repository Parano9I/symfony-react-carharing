<?php

namespace App\Shared\Domain;

use Doctrine\ORM\QueryBuilder;

interface PipelineInterface
{
    public function send(QueryBuilder $query):self;

    public function through(array $callbacks):self;

    public function thenReturn():QueryBuilder;

    public function setParams(array|object $params):self;
}