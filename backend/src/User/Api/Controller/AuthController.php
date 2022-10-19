<?php

namespace App\User\Api\Controller;

use App\User\Api\Request\RegistrationRequest;
use App\User\Domain\Service\AuthService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class AuthController extends AbstractController
{

    public function __construct(
//        private AuthService $authService
    )
    {}

    #[Route('/api/auth/registration',  methods: ['POST'])]
    public function registration(RegistrationRequest $request)
    {
        $data = $request->validate()->getContent();
        $data = json_decode($data, true);

        return $this->json(['data' => $data]);
    }

    #[Route('/api/auth/login',  methods: ['POST'])]
    public function login(Request $request): JsonResponse
    {

        return $this->json(['message' => 'Hello']);
    }
}