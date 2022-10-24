<?php

namespace App\User\Infrastructure\Service;

use App\Entity\User;
use App\User\Domain\Repository\UserRepositoryInterface;
use App\User\Domain\Service\UserServiceInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class UserService implements UserServiceInterface
{
    private UserPasswordHasherInterface $hasher;
    private UserRepositoryInterface $userRepository;

    public function __construct(
        UserPasswordHasherInterface $hasher,
        UserRepositoryInterface $userRepository,
    )
    {
        $this->hasher = $hasher;
        $this->userRepository = $userRepository;
    }

    public function create(array $data): User
    {

        if($this->userRepository->checkExistByEmail($data['email'])){
            throw new BadCredentialsException('User with this email is already registered', 422);
        }

        $user = new User();

        $user->setFirstName($data['first_name']);
        $user->setLastName($data['last_name']);
        $user->setEmail($data['email']);
        $user->setPhone($data['phone']);
        $user->setPassword($this->hashedPassword($data['password'], $user));

        $this->userRepository->save($user, true);

        return $user;
    }

    private function hashedPassword(string $password, User $user): string
    {
        return $this->hasher->hashPassword($user, $password);
    }
}