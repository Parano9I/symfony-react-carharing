<?php

namespace App\Repository;

use App\Entity\Tariff;
use App\Tariff\Domain\Repository\TariffRepositoryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Tariff>
 *
 * @method Tariff|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tariff|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tariff[]    findAll()
 * @method Tariff[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TariffRepository extends ServiceEntityRepository implements TariffRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tariff::class);
    }

    public function save(Tariff $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Tariff $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getAll(): array
    {
        $tariffs = $this->createQueryBuilder('t')
            ->select('t')
            ->getQuery()
            ->getArrayResult();

        return $tariffs;
    }

    public function getByName(string $name): ?Tariff
    {
        $tariff = $this->findOneBy(['name' => $name]);

        dump($tariff);

        return $tariff;
    }

//    /**
//     * @return Tariff[] Returns an array of Tariff objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;

//    }
//    public function findOneBySomeField($value): ?Tariff
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
