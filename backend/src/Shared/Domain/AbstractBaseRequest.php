<?php

namespace App\Shared\Domain;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

abstract class AbstractBaseRequest
{
    protected ValidatorInterface $validator;

    public function __construct(ValidatorInterface $validator)
    {
        $this->validator = $validator;

        $this->fillSelfRequestParams();

        if ($this->autoValidateRequest()) {
            $this->validate();
        }
    }

    protected function fillSelfRequestParams()
    {
        $request = $this->getRequest();
        $requestData = null;

        if($request->request->all()){
            $requestData = $request->request->all();
        } else {
            $requestData = $request->toArray();
        }

        return $this->createProperty($this, $requestData);

    }

    protected function createProperty(object $ctx, array $data): object
    {
        foreach ($data as $property => $value) {
            if (property_exists($ctx, $property)) {
                $propertyName = str_replace(' ', '', $property);
                $ctx->{$propertyName} = $value;
            }
        }

        return $ctx;
    }

    public function getRequest(): Request
    {
        return Request::createFromGlobals();
    }

    public function autoValidateRequest(): bool
    {
        return true;
    }

    public function validate(): Request
    {
        $errors = $this->validator->validate($this);
        $messages = ['message' => 'validation_failed', 'errors' => []];

        foreach ($errors as $error) {
            $messages['errors'][] = [
                'property' => $error->getPropertyPath(),
                'value' => $error->getInvalidValue(),
                'message' => $error->getMessage()
            ];
        }

        if (count($messages['errors']) > 0) {
            $response = new JsonResponse($messages, 201);
            $response->send();

            exit();
        }

        return $this->getRequest();
    }
}