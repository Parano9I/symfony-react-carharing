<?php

namespace App\DataFixtures;

use App\Entity\Car;
use App\Entity\Tariff;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CarFixtures extends Fixture implements DependentFixtureInterface
{

    private $cars = [
        [
            'manufacturer' => 'Chevrolet',
            'model' => 'Spark/Ravon2',
            'fuelType' => 'gasoline',
            'transmissionType' => 'automatic',
            'passengersNumber' => 5,
            'engineCapacity' => 1.3,
            'image' => '/2021/09/cattouchret-295x168.jpeg',
            'userName' => 'user1',
            'tariffName' => 'tariffStandard'
        ],
        [
            'manufacturer' => 'Opel',
            'model' => 'Corsa',
            'fuelType' => 'gasoline',
            'transmissionType' => 'automatic',
            'passengersNumber' => 4,
            'engineCapacity' => 1.2,
            'image' => '/2021/09/cattouchret-295x168.jpeg',
            'userName' => 'user2',
            'tariffName' => 'tariffPremium'
        ],
        [
            'manufacturer' => 'Hyundai',
            'model' => 'Accent',
            'fuelType' => 'diesel',
            'transmissionType' => 'manual',
            'passengersNumber' => 4,
            'engineCapacity' => 2.1,
            'image' => '/2021/03/ak2-295x168.jpg',
            'userName' => 'user1',
            'tariffName' => 'tariffPremium'
        ],
        [
            'manufacturer' => 'Kia',
            'model' => 'Rio X',
            'fuelType' => 'electric',
            'transmissionType' => 'manual',
            'passengersNumber' => 5,
            'engineCapacity' => 3.0,
            'image' => '/2021/09/cattouchret-295x168.jpeg',
            'userName' => 'user2',
            'tariffName' => 'tariffStandard'
        ],
        [
            'manufacturer' => 'Kia',
            'model' => 'Rio X',
            'fuelType' => 'electric',
            'transmissionType' => 'manual',
            'passengersNumber' => 5,
            'engineCapacity' => 3.3,
            'image' => '/2021/09/cattouchret-295x168.jpeg',
            'userName' => 'user2',
            'tariffName' => 'tariffStandard'
        ],
        [
            'manufacturer' => 'Toyota',
            'model' => 'Corolla',
            'fuelType' => 'diesel',
            'transmissionType' => 'automatic',
            'passengersNumber' => 4,
            'engineCapacity' => 1.0,
            'image' => '/2018/01/toyotacorolla2019-295x168.jpg',
            'userName' => 'user2',
            'tariffName' => 'tariffStandard'
        ]
    ];

    public function __construct()
    {
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->cars as $car) {
            $carEntity = new Car();

            $carEntity->setManufacturer($car['manufacturer']);
            $carEntity->setModel($car['model']);
            $carEntity->setFuelType($car['fuelType']);
            $carEntity->setTransmissionType($car['transmissionType']);
            $carEntity->setPassengersNumber($car['passengersNumber']);
            $carEntity->setEngineCapacity($car['engineCapacity']);
            $carEntity->setImage($car['image']);
            $carEntity->setUser($this->getReference($car['userName']));
            $carEntity->setTariff($this->getReference($car['tariffName']));

//            dd($carEntity);

            $manager->persist($carEntity);
            $manager->flush();
        }
    }

    public function getDependencies():array
    {
        return [
            UserFixtures::class,
            TariffFixtures::class,
        ];
    }

}