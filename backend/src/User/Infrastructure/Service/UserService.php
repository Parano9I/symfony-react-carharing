<?php

namespace App\User\Infrastructure\Service;

use App\Entity\User;
use App\User\Domain\Repository\UserRepositoryInterface;
use App\User\Domain\Service\UserServiceInterface;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Component\PasswordHasher\Exception\InvalidPasswordException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class UserService implements UserServiceInterface
{
    private UserPasswordHasherInterface $hasher;
    private UserRepositoryInterface $userRepository;

    public function __construct(
        UserPasswordHasherInterface $hasher,
        UserRepositoryInterface $userRepository,
    ) {
        $this->hasher = $hasher;
        $this->userRepository = $userRepository;
    }

    public function create(array $data): User
    {
        if ($this->getByEmail($data['email'])) {
            throw new BadCredentialsException('User with this email is already registered', 422);
        }

        $user = new User();

        $user->setFirstName($data['first_name']);
        $user->setLastName($data['last_name']);
        $user->setEmail($data['email']);
        $user->setPhone($data['phone']);
        $user->setRoles($user->getRoles());
        $user->setPassword($this->hashedPassword($data['password'], $user));

        $this->userRepository->save($user, true);

        return $user;
    }

    public function getByEmail($email): ?User
    {
        return $this->userRepository->getByEmail($email);
    }

    private function hashedPassword(string $password, User $user): string
    {
        return $this->hasher->hashPassword($user, $password);
    }

    public function verifyCredentialPassword(User $user, string $plainPassword): ?InvalidPasswordException
    {
        $isVerify = $this->hasher->isPasswordValid($user, $plainPassword);

        if (!$isVerify) {
            throw new InvalidPasswordException('Incorrect email or password', 422);
        }

        return null;
    }

    public function getAll(): array
    {
        $users = $this->userRepository->getAll();
        $resource = new UserResource();

        return array_map(fn($user) => $resource($user), $users);
    }

    public function changeRole(User $user, string $role): ?User
    {
        $user->setRoles(['ROLE_LESSOR']);
        $this->userRepository->save($user, true);

        return $user;
    }
}