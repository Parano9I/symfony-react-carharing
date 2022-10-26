<?php

namespace App\User\Infrastructure\Request;

use App\Shared\Domain\Request\AbstractBaseRequest;
use Symfony\Component\Validator\Constraints as Assert;

class LoginRequest extends AbstractBaseRequest
{
    #[
        Assert\NotBlank,
        Assert\Email(
            message: 'The email {{ value }} is not a valid email.',
        )
    ]
    protected $email;

    #[
        Assert\NotBlank,
        Assert\Type('string'),
    ]
    protected $password;
}