<?php

namespace App\Tariff\Infrastructure\Controller;

use App\Tariff\Domain\Service\TariffServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TariffController extends AbstractController
{

    public function __construct(
        private TariffServiceInterface $tariffService
    )
    {
    }

    #[Route('/api/tariffs/', methods: ['GET'])]
    public function index():JsonResponse{
        return $this->json(['data' => $this->tariffService->getAll()]);
    }
}