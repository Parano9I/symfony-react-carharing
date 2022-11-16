<?php

namespace App\User\Infrastructure\Controller;

use App\User\Application\DTO\CreateUserDTO;
use App\User\Domain\Service\AuthServiceInterface;
use App\User\Domain\Service\UserServiceInterface;
use App\User\Infrastructure\Request\RegistrationRequest;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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

        $userDto = new CreateUserDTO();

        $userDto->firstName = $data['first_name'];
        $userDto->lastName = $data['last_name'];
        $userDto->email = $data['email'];
        $userDto->phone = $data['phone'];
        $userDto->password = $data['password'];
        $userDto->isLessor = $data['isLessor'] ? true : false;


        try {
            $user = $this->userService->create($userDto);
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

    #[Route('/api/admin/users/', methods: ['GET'])]
    public function getAll()
    {
        return $this->json($this->userService->getAll());
    }
}

