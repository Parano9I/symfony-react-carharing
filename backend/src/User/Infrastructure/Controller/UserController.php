<?php

namespace App\User\Infrastructure\Controller;

use App\Entity\User;
use App\User\Domain\Service\AuthServiceInterface;
use App\User\Domain\Service\UserServiceInterface;
use App\User\Infrastructure\Request\RegistrationRequest;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class UserController extends AbstractController
{

    public function __construct(
        private UserServiceInterface $userService,
        private AuthServiceInterface $authService,
    ) {
    }

    #[Route('/api/user', methods: ['POST'])]
    public function create(
        RegistrationRequest $request,
        UserResource $resource,
    ): JsonResponse {
        $data = $request->validate()->toArray();

        try {
            $user = $this->userService->create($data);
            $token = $this->authService->login($user);
        } catch (BadCredentialsException $exception) {
            return $this->json([
                'status' => 'error',
                'message' => $exception->getMessage()
            ], $exception->getCode());
        }

        return $this->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $resource($user),
            'authorization' => $token
        ]);
    }
}

