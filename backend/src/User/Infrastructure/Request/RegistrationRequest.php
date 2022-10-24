<?php

namespace App\User\Infrastructure\Request;

use App\Shared\Domain\Request\AbstractBaseRequest;
use Symfony\Component\Validator\Constraints as Assert;

class RegistrationRequest extends AbstractBaseRequest
{
    #[
        Assert\NotBlank,
        Assert\Type('string')
    ]
    protected $first_name;

    #[
        Assert\NotBlank,
        Assert\Type('string')
    ]
    protected $last_name;

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
        Assert\Regex('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/')
    ]
    protected $phone;

    #[
        Assert\NotBlank,
        Assert\Type('string'),
    ]
    protected $password;
}