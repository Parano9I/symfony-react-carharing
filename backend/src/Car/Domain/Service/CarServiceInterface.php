<?php

namespace App\Car\Domain\Service;

use App\Car\Application\DTO\CarDTO;
use Symfony\Component\Security\Core\User\UserInterface;

interface CarServiceInterface
{

    public function create(CarDTO $carDTO, UserInterface $user): int;

    public function getAll(): array;
}