<?php

namespace App\DataFixtures;

use App\Entity\Tariff;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TariffFixtures extends Fixture
{

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
            $tariffEntity = new Tariff();

            $tariffEntity->setName($tariff['name']);
            $tariffEntity->setPrice($tariff['price']);

            $manager->persist($tariffEntity);
            $manager->flush();
        }
    }
}