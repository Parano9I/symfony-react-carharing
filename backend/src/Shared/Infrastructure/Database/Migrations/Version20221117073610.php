<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221117073610 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cars (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, tariff_id INT NOT NULL, model VARCHAR(100) NOT NULL, manufacturer VARCHAR(100) NOT NULL, image VARCHAR(200) DEFAULT NULL, fuel_type VARCHAR(100) NOT NULL, transmission_type VARCHAR(100) NOT NULL, passengers_number SMALLINT NOT NULL, engine_capacity NUMERIC(10, 0) NOT NULL, INDEX IDX_95C71D14A76ED395 (user_id), INDEX IDX_95C71D1492348FD2 (tariff_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tariffs (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(200) NOT NULL, price NUMERIC(7, 2) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(150) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(12) NOT NULL, password VARCHAR(255) NOT NULL, roles JSON NOT NULL, UNIQUE INDEX UNIQ_1483A5E9E7927C74 (email), UNIQUE INDEX UNIQ_1483A5E9444F97DD (phone), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cars ADD CONSTRAINT FK_95C71D14A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE cars ADD CONSTRAINT FK_95C71D1492348FD2 FOREIGN KEY (tariff_id) REFERENCES tariffs (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cars DROP FOREIGN KEY FK_95C71D14A76ED395');
        $this->addSql('ALTER TABLE cars DROP FOREIGN KEY FK_95C71D1492348FD2');
        $this->addSql('DROP TABLE cars');
        $this->addSql('DROP TABLE tariffs');
        $this->addSql('DROP TABLE users');
    }
}
