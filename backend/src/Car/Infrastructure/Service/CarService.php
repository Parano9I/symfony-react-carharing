<?php

namespace App\Car\Infrastructure\Service;

use App\Car\Application\DTO\CarDTO;
use App\Car\Domain\Repository\CarRepositoryInterface;
use App\Car\Domain\Service\CarServiceInterface;
use App\Entity\Car;
use Symfony\Component\Security\Core\User\UserInterface;

class CarService implements CarServiceInterface
{

    public function __construct(
        private CarRepositoryInterface $carRepository,
    ) {
    }

    public function create(CarDTO $dto, UserInterface $user): int
    {
        $car = new Car();

        $car->setModel($dto->model);
        $car->setManufacturer($dto->manufacturer);
        $car->setTransmissionType($dto->transmissionType);
        $car->setFuelType($dto->fuelType);
        $car->setEngineCapacity($dto->engineCapacity);
        $car->setPassengersNumber($dto->passengersNumber);
        $car->setUser($user);

        $this->carRepository->save($car, true);

        return $car->getId();
    }

    public function getAll(): array
    {
        $cars = $this->carRepository->getAll();

        return [];
    }
}