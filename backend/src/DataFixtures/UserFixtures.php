<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(
        UserPasswordHasherInterface $hasher
    ) {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager)
    {
        $user1 = new User();
        $user1->setFirstName('Anton');
        $user1->setLastName('Chernov');
        $user1->setEmail('chernov@gmail.com');
        $user1->setPhone('5674899763');
        $user1->setRoles(['ROLE_LESSOR']);
        $user1->setPassword($this->hasher->hashPassword($user1, 'anton'));
        $manager->persist($user1);

        $user2 = new User();
        $user2->setFirstName('Rostik');
        $user2->setLastName('Koval');
        $user2->setEmail('koval@gmail.com');
        $user2->setPhone('0874633421');
        $user2->setRoles(['ROLE_LESSOR']);
        $user2->setPassword($this->hasher->hashPassword($user2, 'rostik'));
        $manager->persist($user2);

        $user3 = new User();
        $user3->setFirstName('Denis');
        $user3->setLastName('Leskov');
        $user3->setEmail('leskov@gmail.com');
        $user3->setPhone('5674533212');
        $user3->setRoles($user1->getRoles());
        $user3->setPassword($this->hasher->hashPassword($user3, 'denis'));
        $manager->persist($user3);

        $manager->flush();

        $this->addReference('user1', $user1);
        $this->addReference('user2', $user2);
        $this->addReference('user3', $user3);
    }
}