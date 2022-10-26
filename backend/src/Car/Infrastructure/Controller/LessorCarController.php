<?php

namespace App\Car\Infrastructure\Controller;

use App\Car\Application\DTO\CarDTO;
use App\Car\Domain\Service\CarServiceInterface;
use App\Car\Infrastructure\Request\CreateRequest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LessorCarController extends AbstractController
{

    public function __construct(
        private CarServiceInterface $carService
    )
    {
    }

    #[Route('/api/lessor/cars/', methods: ['POST'])]
    public function create(CreateRequest $request)
    {
        $carDTO = $request->validate(new CarDTO());
        $user = $this->getUser();

        $carId = $this->carService->create($carDTO, $user);

        dd($carId);


    }
}