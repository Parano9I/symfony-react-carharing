<?php

use App\User\Api\Controller\AuthController;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

return function (RoutingConfigurator $routes)
{
    $routes->add('user.registration', '/api/auth/registration')
        ->methods(['GET'])
        ->controller([AuthController::class, 'registration']);

    $routes->add('user.login', '/api/auth/login')
        ->methods(['POST'])
        ->controller([AuthController::class, 'login']);
};