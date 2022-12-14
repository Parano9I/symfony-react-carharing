<?php

namespace App\Car\Infrastructure\Controller;

use App\Car\Application\DTO\CreateCarDTO;
use App\Car\Domain\Service\CarServiceInterface;
use App\Car\Infrastructure\Request\CreateRequest;
use App\Car\Infrastructure\Resource\CarResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class LessorCarController extends AbstractController
{

    public function __construct(
        private CarServiceInterface $carService
    ) {
    }

    #[Route('/api/lessor/cars/', methods: ['POST'])]
    public function store(Request $request):JsonResponse
    {
        $data = $request;

        dd($request->files->get('image'));
//        return $this->json([json_encode($request->files->get('image'))]);

        $user = $this->getUser();


        $carId = $this->carService->create($data, $user);

        return $this->json(['data' => [
            'status' => 'success',
            'carId' => $carId
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