<?php

namespace App\Entity;

use App\Repository\CarRepository;
use Doctrine\ORM\Mapping as ORM;
use http\Exception\InvalidArgumentException;
use App\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: CarRepository::class)]
#[ORM\Table(name: 'cars')]
class Car
{

    private array $fuelTypes = ['gasoline', 'diesel', 'electric'];
    private array $transmissionTypes = ['automatic', 'manual'];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 100)]
    private string $model;

    #[ORM\Column(type: 'string', length: 100)]
    private string $manufacturer;

    #[ORM\Column(type: 'string', length: 200, nullable: true)]
    private ?string $image = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'cars')]
    #[ORM\JoinColumn(nullable: true)]
    private ?UserInterface $user = null;

    #[ORM\Column(type: 'string', length: 100)]
    private string $fuelType;

    #[ORM\Column(type: 'string', length: 100)]
    private string $transmissionType;

    #[ORM\Column(type: 'smallint')]
    private int $passengersNumber;

    #[ORM\Column(type: 'decimal')]
    private float $engineCapacity;

    #[ORM\ManyToOne(inversedBy: 'cars')]
    #[ORM\JoinColumn(nullable: false)]
    #[ORM\Column(type: 'bigint')]
    private ?Tariff $tariff = null;


    public function getFuelType(): string
    {
        return $this->fuelType;
    }

    public function setFuelType(string $fuelType): void
    {
        if(!in_array($fuelType, $this->fuelTypes)){
            throw new InvalidArgumentException('Invalid fuel type');
        }

        $this->fuelType = $fuelType;
    }

    public function getTransmissionType(): string
    {
        return $this->transmissionType;
    }

    public function setTransmissionType(string $transmissionType): void
    {
        if(!in_array($transmissionType, $this->transmissionTypes)){
            throw new InvalidArgumentException('Invalid transmission type');
        }

        $this->transmissionType = $transmissionType;
    }

    public function getPassengersNumber(): int
    {
        return $this->passengersNumber;
    }

    public function setPassengersNumber(int $passengersNumber): void
    {
        $this->passengersNumber = $passengersNumber;
    }

    public function getEngineCapacity(): float
    {
        return $this->engineCapacity;
    }

    public function setEngineCapacity(float $engineCapacity): void
    {
        $this->engineCapacity = $engineCapacity;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModel(): string
    {
        return $this->model;
    }

    public function setModel(string $model): void
    {
        $this->model = $model;
    }

    public function getManufacturer(): string
    {
        return $this->manufacturer;
    }

    public function setManufacturer(string $manufacturer): void
    {
        $this->manufacturer = $manufacturer;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): void
    {
        $this->image = $image;
    }

    public function getUser(): UserInterface
    {
        return $this->user;
    }

    public function setUser(UserInterface $user): void
    {
        $this->user = $user;
    }

    public function getTariff(): ?Tariff
    {
        return $this->tariff;
    }

    public function setTariff(?Tariff $tariff): self
    {
        $this->tariff = $tariff;

        return $this;
    }
}
