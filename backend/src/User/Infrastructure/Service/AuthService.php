<?php

namespace App\User\Infrastructure\Service;

use App\Entity\User;
use App\User\Domain\Service\AuthServiceInterface;
use Gesdinet\JWTRefreshTokenBundle\Exception\UnknownUserFromRefreshTokenException;
use Gesdinet\JWTRefreshTokenBundle\Model\RefreshTokenManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationSuccessHandler;

class AuthService implements AuthServiceInterface
{

    public function __construct(
        private AuthenticationSuccessHandler $successHandler,
        private RefreshTokenManagerInterface $refreshTokenManager,
    ) {
    }

    public function login(User $user): array
    {
        $data = $this->successHandler->handleAuthenticationSuccess($user);
        $tokens = json_decode($data->getContent());

        return [
            'type' => 'Bearer',
            'access_token' => $tokens->token,
            'refresh_token' => $tokens->refresh_token,
        ];
    }

    public function logout(User $user): ?UnknownUserFromRefreshTokenException
    {
        $email = $user->getEmail();
        $token = $this->refreshTokenManager->getLastFromUsername($email);

        if (is_null($token)) {
            throw new UnknownUserFromRefreshTokenException('Refresh token not found', 422);
        }

        $this->refreshTokenManager->delete($token);

        return null;
    }
}