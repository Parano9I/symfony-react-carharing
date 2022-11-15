<?php

namespace App\Car\Infrastructure\Request;

use App\Shared\Domain\AbstractBaseRequest;
use Symfony\Component\Validator\Constraints as Assert;

class CreateRequest extends AbstractBaseRequest
{
    #[
        Assert\NotBlank,
        Assert\Type('string')
    ]
    protected $model;

    #[
        Assert\NotBlank,
        Assert\Type('string')
    ]
    protected $manufacturer;

    #[
        Assert\NotBlank,
        Assert\Choice(['gasoline', 'diesel', 'electric'])
    ]
    protected $fuelType;

    #[
        Assert\NotBlank,
        Assert\Choice(['automatic', 'manual'])
    ]
    protected string $transmissionType;

    #[
        Assert\NotBlank,
        Assert\Type('integer')
    ]
    protected int $passengersNumber;

    #[
        Assert\NotBlank,
        Assert\Type('float')
    ]
    public float $engineCapacity;
}