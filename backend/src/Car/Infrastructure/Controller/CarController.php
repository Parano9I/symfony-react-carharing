<?php

namespace App\Car\Infrastructure\Controller;

use App\Car\Domain\Service\CarServiceInterface;
use App\Car\Infrastructure\Request\CreateRequest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CarController extends AbstractController
{

    public function __construct(
        private CarServiceInterface $carService
    ) {
    }

    #[Route('/api/cars/', methods: ['GET'])]
    public function all()
    {
        $cars = $this->carService->getAll();
    }
}