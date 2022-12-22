-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           5.7.24 - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para agendal6
CREATE DATABASE IF NOT EXISTS `agendal6` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `agendal6`;

-- Copiando estrutura para tabela agendal6.agendas
CREATE TABLE IF NOT EXISTS `agendas` (
  `nome` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fone_res` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fone_cel` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dt_nasc` date DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(70) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(70) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(70) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela agendal6.agendas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `agendas` DISABLE KEYS */;
INSERT INTO `agendas` (`nome`, `fone_res`, `fone_cel`, `dt_nasc`, `email`, `facebook`, `twitter`, `instagram`, `created_at`, `updated_at`) VALUES
	('Sandra Leticia da Cunha', '(12) 39032363', '(12)991201972', '1975-04-23', 'sandra.leti23@gmail.com', 'https://www.facebook.com/sandral6', 'https://www.twitter.com/sandral6', 'https://www.instagram.com/sandral6', NULL, NULL);
/*!40000 ALTER TABLE `agendas` ENABLE KEYS */;

-- Copiando estrutura para tabela agendal6.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela agendal6.failed_jobs: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Copiando estrutura para tabela agendal6.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela agendal6.migrations: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(4, '2019_10_24_235210_create_agendas_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Copiando estrutura para tabela agendal6.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela agendal6.password_resets: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Copiando estrutura para tabela agendal6.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela agendal6.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Breno Renan da Cunha', 'breno.rcunha2@gmail.com', NULL, '$2y$10$YWaiccQYfCncqEMDeQKQ2uriBUe2nohP0A.jv7WlW3Z552YWPkr8W', 'CzDjWJCsBnXFwzqX8xLM3zR26CVg0RDjfbvb3O41PYcgpDsvcW2USH1zNaa6', '2019-10-25 00:07:27', '2019-10-25 00:07:27'),
	(2, 'Ryan santos', 'ryandsantos24@gmail.com', NULL, '$2y$10$GuJXvtCxybvcpObys6iBc.V3NiNQN4a9/XoD7i/ahg/OK2WcKQz.G', NULL, '2019-11-15 14:01:30', '2019-11-15 14:01:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*INSERT INTO `users` VALUES (NULL, 'Parangaricutirimirinolfo', 'parangaricutirimirinolfo@gmail.com', NULL, '$2y$10$GuJXvtCxybvcpObys6iBc.V3NiNQN4a9/XoD7i/ahg/OK2WcKQz.G', NULL, '2019-11-28 19:29:30', '2019-11-28 19:30:30');
DELETE FROM `agendal6`.`users` WHERE  `id`=4;*/
