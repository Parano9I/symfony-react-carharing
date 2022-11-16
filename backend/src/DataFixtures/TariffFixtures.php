<?php

namespace App\DataFixtures;

use App\Entity\Tariff;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Persistence\ObjectManager;

class TariffFixtures extends Fixture
{

    public function __construct()
    {
    }

    public function load(ObjectManager $manager)
    {
        $tariffStandard = new Tariff();
        $tariffStandard->setName('standard');
        $tariffStandard->setPrice(5.20);
        $manager->persist($tariffStandard);

        $tariffPremium = new Tariff();
        $tariffPremium->setName('premium');
        $tariffPremium->setPrice(21.90);
        $manager->persist($tariffPremium);

        $manager->flush();

        $this->addReference('tariffStandard', $tariffStandard);
        $this->addReference('tariffPremium', $tariffPremium);
    }
}