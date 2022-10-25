<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gesdinet\JWTRefreshTokenBundle\Entity\RefreshToken as BaseRefreshToken;
use Gesdinet\JWTRefreshTokenBundle\Entity\RefreshTokenRepository;
use Gesdinet\JWTRefreshTokenBundle\Model\AbstractRefreshToken;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: RefreshTokenRepository::class)]
#[ORM\Table(name: 'refresh_tokens')]
class RefreshToken extends AbstractRefreshToken
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    protected $id;

    #[ORM\Column(type: 'string')]
    protected $refreshToken;

    #[ORM\Column(type: 'string')]
    protected $username;

    #[ORM\Column(type: 'datetime')]
    protected $valid;

//    #[ORM\JoinColumn(nullable: false)]
//    #[ORM\ManyToOne(targetEntity: User::class)]
//    private UserInterface $user;
//
//    public function getUser(): UserInterface
//    {
//        return $this->user;
//    }
//
//    public function setUser(UserInterface $user): self
//    {
//        $this->user = $user;
//
//        return $this;
//    }
}
