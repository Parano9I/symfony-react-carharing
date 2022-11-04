<?php

namespace App\Car\Infrastructure\Controller;

use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Car\Domain\Service\CarServiceInterface;
use App\Car\Infrastructure\Resource\CarResource;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
    public function all(Request $request):JsonResponse
    {
        $queryParamsDTO = new CarsGetAllQueryParamsDTO(
            $request->query->getInt('page'),
            $request->query->get('manufacturer'),
            $request->query->get('fuel'),
        );

        $data = $this->carService->getAll($queryParamsDTO);


        return $this->json(['data' => $data]);
    }

    #[Route('/api/cars/filters', methods: ['GET'])]
    public function allFilters(): JsonResponse{

        $data = $this->carService->getAllFilters();

        return $this->json(['data' => $data]);
    }
}