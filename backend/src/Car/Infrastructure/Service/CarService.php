<?php

namespace App\Car\Infrastructure\Service;

use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Car\Infrastructure\Resource\CarResource;
use App\Entity\User;
use App\Car\Application\DTO\CreateCarDTO;
use App\Car\Domain\Repository\CarRepositoryInterface;
use App\Car\Domain\Service\CarServiceInterface;
use App\Entity\Car;
use App\Tariff\Domain\Service\TariffServiceInterface;
use App\Tariff\Infrastructure\Resource\TariffResource;
use App\User\Infrastructure\Resource\UserResource;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CarService implements CarServiceInterface
{

    public function __construct(
        private CarRepositoryInterface $carRepository,
        private TariffServiceInterface $tariffService
    ) {
    }

    public function create(array $data, User $user): int
    {
        $car = new Car();
        $tariff = $this->tariffService->getById($data['tariffId']);

        $car->setModel($data['model']);
        $car->setManufacturer($data['manufacturer']);
        $car->setTransmissionType($data['transmissionType']);
        $car->setFuelType($data['fuelType']);
        $car->setEngineCapacity($data['engineCapacity']);
        $car->setPassengersNumber($data['passengersNumber']);
        $car->setUser($user);
        $car->setTariff($tariff);

        $this->carRepository->save($car, true);

        return $car->getId();
    }

    public function getAll(CarsGetAllQueryParamsDTO $queryParamsDTO): array
    {
        $data = $this->carRepository->getAll($queryParamsDTO);

        $cars = $data['data'];
        $pagination = $data['pagination'];

        $carResource = new CarResource();
        $userResource = new UserResource();
        $tariffResource = new TariffResource();

        return [
            'cars' => array_map(fn($car) => [
                'car' => $carResource($car),
                'lessor' => $userResource($car->getUser()),
                'tariff' => $tariffResource($car->getTariff())
            ], $cars),
            'pagination' => $pagination,
        ];
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

    public function getAllFilters(): array
    {
        $filtersFiled = ['manufacturer', 'fuelType', 'transmissionType', 'passengersNumber'];
        $result = [];


        foreach ($filtersFiled as $filterField){
            $filterValues = $this->carRepository->getDistinctValueByField($filterField);

            $result[$filterField] = $filterValues;
        }

        return $result;
    }
}