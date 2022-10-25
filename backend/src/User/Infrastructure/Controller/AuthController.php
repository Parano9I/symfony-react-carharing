<?php

namespace App\User\Infrastructure\Controller;

use App\User\Domain\Service\AuthServiceInterface;
use App\User\Domain\Service\UserServiceInterface;
use App\User\Infrastructure\Request\LoginRequest;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Exception\InvalidPasswordException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class AuthController extends AbstractController
{

    public function __construct(
        private UserServiceInterface $userService,
        private AuthServiceInterface $authService
    ) {
    }


    #[Route('/api/auth/login', methods: ['POST'])]
    public function login(LoginRequest $request, UserResource $resource): JsonResponse
    {
        $credentials = $request->validate()->toArray();

        try {
            $user = $this->userService->getByEmail($credentials['email']);

            if (!$user) {
                throw new BadCredentialsException('Incorrect email or password', 422);
            }

            $this->userService->verifyCredentialPassword($user, $credentials['password']);
            $token = $this->authService->login($user);
        } catch (BadCredentialsException|InvalidPasswordException $exception) {
            return $this->json([
                'status' => 'error',
                'message' => $exception->getMessage()
            ], $exception->getCode());
        }

        return $this->json([
            'status' => 'success',
            'message' => 'User login successfully',
            'user' => $resource($user),
            'authorization' => $token
        ]);
    }
}

