<?php

namespace App\Repository;

use App\Car\Application\DTO\CarsGetAllQueryParamsDTO;
use App\Car\Domain\Repository\CarRepositoryInterface;
use App\Car\Infrastructure\Filters\FuelFilter;
use App\Car\Infrastructure\Filters\ManufacturerFilter;
use App\Entity\Car;
use App\Entity\User;
use App\Shared\Domain\PaginationInterface;
use App\Shared\Infrastructure\Pipeline;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Car>
 *
 * @method Car|null find($id, $lockMode = null, $lockVersion = null)
 * @method Car|null findOneBy(array $criteria, array $orderBy = null)
 * @method Car[]    findAll()
 * @method Car[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CarRepository extends ServiceEntityRepository implements CarRepositoryInterface
{

    private PaginationInterface $pagination;


    public function __construct(ManagerRegistry $registry, PaginationInterface $pagination)
    {
        parent::__construct($registry, Car::class);
        $this->pagination = $pagination;
    }

    public function save(Car $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Car $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getAll(CarsGetAllQueryParamsDTO $queryParamsDTO): array
    {
        $numberPage = $queryParamsDTO->page;

        $query = $this->createQueryBuilder('c')
            ->select('c')
            ->innerJoin(
                'c.user',
                'u',
                \Doctrine\ORM\Query\Expr\Join::WITH,
                'c.user=u.id'
            );

            $query = (new Pipeline())->send($query)
                ->setParams($queryParamsDTO)
                ->through([
                    ManufacturerFilter::class,
                    FuelFilter::class
                ])
                ->thenReturn()
                ->getQuery();

        return $this->pagination->paginate($query, $numberPage, 2);
    }

    public function getAllByUser(User $user): array
    {
        return $this->findBy(['id' => 1]);
    }

    public function getById(int $id): ?Car
    {
        return $this->findOneBy(['id' => $id]);
    }

    public function getDistinctValueByField(string $fieldName): array
    {
        $query = $this->createQueryBuilder('c')
            ->select('c.' . $fieldName)
            ->distinct()
            ->getQuery();

        return $query->getSingleColumnResult();
    }



    //    /**
//     * @return Car[] Returns an array of Car objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;

//    }
//    public function findOneBySomeField($value): ?Car
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
