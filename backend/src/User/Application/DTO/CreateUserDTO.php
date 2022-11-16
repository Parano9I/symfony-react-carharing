<?php

namespace App\User\Application\DTO;

class CreateUserDTO
{
    public string $firstName;

    public string $lastName;

    public string $email;

    public string $phone;

    public string $password;

    public ?bool $isLessor = false;
}