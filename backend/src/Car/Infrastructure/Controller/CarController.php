<?php

namespace App\Car\Infrastructure\Controller;

use App\Car\Domain\Service\CarServiceInterface;
use App\Car\Infrastructure\Resource\CarResource;
use App\Entity\Car;
use App\Repository\UserRepository;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CarController extends AbstractController
{

    public function __construct(
        private CarServiceInterface $carService
    ) {
    }

    #[Route('/api/cars/', methods: ['GET'])]
    public function all(UserRepository $repository, CarResource $carResource, UserResource $userResource)
    {
        $cars = $this->carService->getAll();


        return $this->json(
            array_map(fn($car) => [
                'car' => $carResource($car),
                'lessor' => $userResource($car->getUser())
            ], $cars)
        );
    }
}