<?php

namespace App\DataFixtures;

use App\User\Application\DTO\CreateUserDTO;
use App\User\Infrastructure\Service\UserService;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    private $users = [
        [
            'first_name' => 'Anton',
            'last_name' => 'Chernov',
            'email' => 'chernov@gmail.com',
            'phone' => '5674899345',
            'password' => 'anton',
            'isLessor' => true
        ],
        [
            'first_name' => 'Denis',
            'last_name' => 'Koval',
            'email' => 'koval@gmail.com',
            'phone' => '1234534234',
            'password' => 'denis',
            'isLessor' => false
        ],
    ];

    public function __construct(
        private UserService $userService
    )
    {
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->users as $user){
            $userDto = new CreateUserDTO();

            $userDto->firstName = $user['first_name'];
            $userDto->lastName = $user['last_name'];
            $userDto->email = $user['email'];
            $userDto->phone = $user['phone'];
            $userDto->password = $user['password'];
            $userDto->isLessor = $user['isLessor'];

            $this->userService->create($userDto);

        }
    }
}