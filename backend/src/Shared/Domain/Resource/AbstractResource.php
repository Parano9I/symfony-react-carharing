<?php

namespace App\Shared\Domain\Resource;

abstract class AbstractResource
{
    public function __invoke(object $data): array
    {
        $this->objectToCtx($data);

        return $this->toArray();
    }

    private function objectToCtx(object $object): void
    {
        $allMethods = get_class_methods($object);
        $allGetMethods = array_filter(
            $allMethods,
            fn($methodName) => str_contains($methodName, 'get')
        );

        foreach ($allGetMethods as $method) {
            $propertyName = lcfirst(substr($method, 3));

            $this->{$propertyName} = $object->{$method}();
        }
    }

    abstract public function toArray(): array;
}