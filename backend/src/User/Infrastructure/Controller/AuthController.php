<?php

namespace App\User\Infrastructure\Controller;

use App\User\Domain\Service\AuthServiceInterface;
use App\User\Domain\Service\UserServiceInterface;
use App\User\Infrastructure\Request\RegistrationRequest;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
{

    public function __construct(
        private UserServiceInterface $userService,
//        private AuthServiceInterface $authService
    ) {
    }



//    #[Route('/api/auth/login', methods: ['POST'])]
//    public function login(Request $request): JsonResponse
//    {
//        return $this->json(['message' => 'Hello']);
//    }
}

