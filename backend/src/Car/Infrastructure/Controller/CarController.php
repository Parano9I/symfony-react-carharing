<?php

namespace App\Car\Infrastructure\Controller;

use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Car\Domain\Service\CarServiceInterface;
use App\Car\Infrastructure\Resource\CarResource;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CarController extends AbstractController
{

    public function __construct(
        private CarServiceInterface $carService,
        private CarResource $carResource,
        private UserResource $userResource
    ) {
    }

    #[Route('/api/cars/', methods: ['GET'])]
    public function all(Request $request, CarResource $carResource, UserResource $userResource)
    {
        $queryParamsDTO = new CarsGetAllQueryParamsDTO;
        $queryParamsDTO->page = $request->query->getInt('page');
        $queryParamsDTO->manufacturer = (string)$request->query->get('manufacturer');

        $data = $this->carService->getAll($queryParamsDTO);
        $cars = $data['data'];
        $pagination = $data['pagination'];

        return $this->json([
            'cars' => array_map(fn($car) => [
                'car' => $carResource($car),
                'lessor' => $userResource($car->getUser())
            ], $cars),
            'pagination' => $pagination,
        ]);
    }
}