<?php

namespace App\Car\Infrastructure\Service;

use App\Entity\User;
use App\Car\Application\DTO\CarDTO;
use App\Car\Domain\Repository\CarRepositoryInterface;
use App\Car\Domain\Service\CarServiceInterface;
use App\Entity\Car;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CarService implements CarServiceInterface
{

    public function __construct(
        private CarRepositoryInterface $carRepository,
    ) {
    }

    public function create(CarDTO $dto, User $user): int
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

    public function getAllByUser(User $user): array
    {
        $cars = $this->carRepository->getAllByUser($user);

        return $cars;
    }

    public function getByIdAndByUserId(User $user, int $id): Car
    {
        $car = $this->carRepository->getById($id);
        $userId = $user->getId();
        $carUserId = $car->getUser()->getId();

        if(is_null($car) && $userId !== $carUserId){
            throw new NotFoundHttpException("Car with id - {$id}, is not found", null, 505);
        }

        return $car;
    }
}