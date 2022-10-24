<?php

namespace App\User\Domain\Service;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;

interface UserServiceInterface
{
    public function create(array $data): User;

}