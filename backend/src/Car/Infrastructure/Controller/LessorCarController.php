<?php

namespace App\Car\Infrastructure\Controller;

use App\Car\Application\DTO\CarDTO;
use App\Car\Domain\Service\CarServiceInterface;
use App\Car\Infrastructure\Request\CreateRequest;
use App\Car\Infrastructure\Resource\CarResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class LessorCarController extends AbstractController
{

    public function __construct(
        private CarServiceInterface $carService
    ) {
    }

    #[Route('/api/lessor/cars/', methods: ['POST'])]
    public function store(CreateRequest $request):JsonResponse
    {
        $carDTO = $request->validate(new CarDTO());
        $user = $this->getUser();

        $carId = $this->carService->create($carDTO, $user);

        return $this->json(['data' => [
            'status' => 'success'
        ]]);
    }

    #[Route('/api/lessor/cars/', methods: ['GET'])]
    public function index(CarResource $carResource):JsonResponse
    {
        $user = $this->getUser();
        $cars = $this->carService->getAllByUser($user);

        return $this->json([
            'data' => array_map(fn($car) => $carResource($car), $cars),
        ]);
    }

    #[Route('/api/lessor/cars/{id}', methods: ['GET'])]
    public function show($id, CarResource $carResource):JsonResponse{
        try{
            $user = $this->getUser();
            $car = $this->carService->getByIdAndByuserId($user, $id);
        }catch (NotFoundHttpException $exception){
            return $this->json([
                'status' => 'error',
                'message' => $exception->getMessage()
            ], $exception->getCode());
        }

         return $this->json([
             'data' => $carResource($car),
         ]);
    }
}