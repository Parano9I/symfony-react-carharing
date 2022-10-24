<?php

namespace App\User\Infrastructure\Service;

use App\Entity\User;
use App\User\Domain\Service\AuthServiceInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationSuccessHandler;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class AuthService implements AuthServiceInterface
{

    public function __construct(
        private AuthenticationSuccessHandler $successHandler,
    ) {
    }

    public function login(User $user): array
    {
        $data = $this->successHandler->handleAuthenticationSuccess($user);
        $token = json_decode($data->getContent())->token;

        return [
            'type' => 'Bearer',
            'token' => $token,
        ];
    }

    public function logout(User $user)
    {
        return null;
    }

    public function refreshToken(string $token)
    {
        return null;
    }
}