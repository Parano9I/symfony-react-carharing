<?php

namespace App\User\Infrastructure\Controller;

use App\User\Domain\Service\UserServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{

    public function __construct(
        private UserServiceInterface $userService
    ) {
    }

    #[Route('/api/admin/users/', methods: ['GET'])]
    public function getAll()
    {
        return $this->json($this->userService->getAll());
    }
}

