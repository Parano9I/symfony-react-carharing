<?php

namespace App\Tariff\Infrastructure\Service;

use App\Entity\Tariff;
use App\Repository\TariffRepository;
use App\Tariff\Application\DTO\CreateTariffDTO;
use App\Tariff\Domain\Repository\TariffRepositoryInterface;
use App\Tariff\Domain\Service\TariffServiceInterface;

class TariffService implements TariffServiceInterface
{

    public function __construct(
        private TariffRepositoryInterface $tariffRepository
    )
    {
    }

    public function create(CreateTariffDTO $dto): int
    {
        $tariffEntity  = new Tariff();

        $tariffEntity->setName($dto->name);
        $tariffEntity->setPrice($dto->price);

        $this->tariffRepository->save($tariffEntity, true);

        return $tariffEntity->getId();
    }

    public function getAll(): array
    {
        $tariffs = $this->tariffRepository->getAll();

        return $tariffs;
    }

    public function getById(): Tariff
    {
        return new Tariff();
    }
}