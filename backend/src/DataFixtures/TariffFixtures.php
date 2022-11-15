<?php

namespace App\DataFixtures;

use App\Entity\Tariff;
use App\Tariff\Application\DTO\CreateTariffDTO;
use App\Tariff\Domain\Service\TariffServiceInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TariffFixtures extends Fixture
{

    public function __construct(
        private TariffServiceInterface $tariffService
    )
    {
    }

    private $tariffs = [
        [
            'name' => 'standard',
            'price' => 5.00
        ],
        [
            'name' => 'premium',
            'price' => 17.00
        ]
    ];

    public function load(ObjectManager $manager)
    {

        foreach ($this->tariffs as $tariff){
            $tariffDto = new CreateTariffDTO();

            $tariffDto->name = $tariff['name'];
            $tariffDto->price = $tariff['price'];

            $this->tariffService->create($tariffDto);
        }
    }
}