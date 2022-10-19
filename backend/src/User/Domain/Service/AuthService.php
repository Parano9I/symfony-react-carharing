<?php

namespace App\User\Domain\Service;

use App\User\Doctrine\Repository\UserRepository;

class AuthService
{
    public function __construct(
        private UserRepository $userRepository,
    )
    {}

    public function registration(array $data){

    }

    public function login(){

    }

    public function logout(){

    }
}