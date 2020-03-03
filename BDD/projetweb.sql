-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 03 mars 2020 à 17:16
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetweb`
--

DELIMITER $$
--
-- Procédures
--
DROP PROCEDURE IF EXISTS `ajoutAtelier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajoutAtelier` (IN `Nom` VARCHAR(16), IN `Description` VARCHAR(128), IN `Date` DATETIME, IN `Places` INT(11), IN `Animateur` VARCHAR(16))  BEGIN 

INSERT INTO atelier (nom, description, date, nbrPlaces, animateur) VALUES (Nom, Description, Date, Places, Animateur);

END$$

DROP PROCEDURE IF EXISTS `changerMDP`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `changerMDP` (IN `oldMDP` VARCHAR(16), IN `newMDP` VARCHAR(16), IN `noma` VARCHAR(32))  BEGIN

UPDATE user
SET password = newMDP
WHERE password = oldMDP AND matricule = noma;

END$$

DROP PROCEDURE IF EXISTS `checkConnexion`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkConnexion` (IN `identifiant` VARCHAR(32), IN `mdp` VARCHAR(16))  BEGIN

SELECT matricule, mail, nom, prenom FROM user 
WHERE password = mdp AND (matricule = identifiant OR mail = identifiant);

END$$

DROP PROCEDURE IF EXISTS `checkInscription`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkInscription` (IN `email` VARCHAR(32), IN `noma` VARCHAR(16))  BEGIN

SELECT matricule FROM user 
WHERE mail = email AND matricule = noma;

END$$

DROP PROCEDURE IF EXISTS `creationCompte`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationCompte` (IN `noma` VARCHAR(16), IN `Nom` VARCHAR(16), IN `Prenom` VARCHAR(16), IN `email` VARCHAR(32), IN `mdp` VARCHAR(16))  BEGIN

INSERT INTO user(matricule, nom, prenom, mail, password) VALUES(noma, Nom, Prenom, email, mdp);

END$$

DROP PROCEDURE IF EXISTS `suppressionCompte`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `suppressionCompte` (IN `noma` VARCHAR(16))  BEGIN

DELETE FROM user 
WHERE matricule = noma;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `atelier`
--

DROP TABLE IF EXISTS `atelier`;
CREATE TABLE IF NOT EXISTS `atelier` (
  `idAtelier` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `date` datetime NOT NULL,
  `nbrPlaces` int(11) NOT NULL,
  `animateur` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `termine` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idAtelier`),
  KEY `animateur_fk` (`animateur`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `atelier`
--

INSERT INTO `atelier` (`idAtelier`, `nom`, `description`, `date`, `nbrPlaces`, `animateur`, `termine`) VALUES
(1, 'PHP', 'atelier sur les variables', '2020-02-27 12:30:00', 12, 'he201620', 0),
(2, 'tva', 'atelier sur la tva', '2020-04-15 12:30:00', 15, 'he201621', 0),
(3, 'sql', 'c\'est trop facile les procedures', '2020-03-03 21:30:00', 2, 'he201587', 0);

-- --------------------------------------------------------

--
-- Structure de la table `forum`
--

DROP TABLE IF EXISTS `forum`;
CREATE TABLE IF NOT EXISTS `forum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sujet` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(240) COLLATE utf8mb4_bin NOT NULL,
  `creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `forum`
--

INSERT INTO `forum` (`id`, `sujet`, `description`, `creation`) VALUES
(1, 'tva', 'forum destiné aux questions liées à la TVA', '2020-03-03 14:55:29');

-- --------------------------------------------------------

--
-- Structure de la table `participant_atelier`
--

DROP TABLE IF EXISTS `participant_atelier`;
CREATE TABLE IF NOT EXISTS `participant_atelier` (
  `idparticipant` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `idAtelier` int(11) NOT NULL,
  PRIMARY KEY (`idparticipant`,`idAtelier`),
  KEY `id_atelier_fk` (`idAtelier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `participant_atelier`
--

INSERT INTO `participant_atelier` (`idparticipant`, `idAtelier`) VALUES
('he201621', 1);

-- --------------------------------------------------------

--
-- Structure de la table `post_user`
--

DROP TABLE IF EXISTS `post_user`;
CREATE TABLE IF NOT EXISTS `post_user` (
  `idPost` int(11) NOT NULL AUTO_INCREMENT,
  `forum` int(11) NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `auteur` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`idPost`),
  KEY `post_user_forum_fk` (`forum`),
  KEY `post_user_user_fk` (`auteur`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `post_user`
--

INSERT INTO `post_user` (`idPost`, `forum`, `texte`, `creation`, `auteur`) VALUES
(1, 1, 'Bonjour serait-il possible d\'avoir plus de précision sur ... ?', '2020-03-03 14:56:11', 'he201620');

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `idQuestion` int(11) NOT NULL AUTO_INCREMENT,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`idQuestion`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`idQuestion`, `texte`) VALUES
(1, 'Que pensez vous des ateliers ?'),
(2, 'Les sujets vous conviennent-ils ?'),
(3, 'Les horaires sont-ils adaptés ?'),
(4, 'Les animateurs sont-ils assez compétent ?');

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
CREATE TABLE IF NOT EXISTS `reponse` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL,
  `idReponseProposee` int(11) NOT NULL,
  `idUser` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`idSondage`,`idQuestion`,`idReponseProposee`,`idUser`),
  KEY `reponse_user_fk` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `reponse`
--

INSERT INTO `reponse` (`idSondage`, `idQuestion`, `idReponseProposee`, `idUser`, `texte`) VALUES
(1, 1, 1, 'he201620', ''),
(1, 2, 3, 'he201620', ''),
(1, 3, 3, 'he201620', ''),
(1, 4, 1, 'he201620', '');

-- --------------------------------------------------------

--
-- Structure de la table `reponseproposee`
--

DROP TABLE IF EXISTS `reponseproposee`;
CREATE TABLE IF NOT EXISTS `reponseproposee` (
  `idReponseProposee` int(11) NOT NULL AUTO_INCREMENT,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`idReponseProposee`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `reponseproposee`
--

INSERT INTO `reponseproposee` (`idReponseProposee`, `texte`) VALUES
(1, 'Pas d\'accord'),
(2, 'Pas trop d\'accord'),
(3, 'Plutôt d\'accord'),
(4, 'D\'accord');

-- --------------------------------------------------------

--
-- Structure de la table `sondage`
--

DROP TABLE IF EXISTS `sondage`;
CREATE TABLE IF NOT EXISTS `sondage` (
  `idSondage` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `dateDebut` datetime NOT NULL,
  `dateFin` datetime NOT NULL,
  `ouvert` tinyint(1) NOT NULL,
  PRIMARY KEY (`idSondage`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `sondage`
--

INSERT INTO `sondage` (`idSondage`, `description`, `dateDebut`, `dateFin`, `ouvert`) VALUES
(1, 'Sondage étudiant', '2020-03-12 08:30:00', '2020-03-19 18:30:00', 1);

-- --------------------------------------------------------

--
-- Structure de la table `sondage_question`
--

DROP TABLE IF EXISTS `sondage_question`;
CREATE TABLE IF NOT EXISTS `sondage_question` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL,
  PRIMARY KEY (`idSondage`,`idQuestion`),
  KEY `sondage_question_question_fk` (`idQuestion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `sondage_question`
--

INSERT INTO `sondage_question` (`idSondage`, `idQuestion`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4);

-- --------------------------------------------------------

--
-- Structure de la table `sondage_question_reponse`
--

DROP TABLE IF EXISTS `sondage_question_reponse`;
CREATE TABLE IF NOT EXISTS `sondage_question_reponse` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL,
  `idReponseProposee` int(11) NOT NULL,
  PRIMARY KEY (`idSondage`,`idQuestion`,`idReponseProposee`),
  KEY `sondage_question_reponse_reponseProposee` (`idReponseProposee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `sondage_question_reponse`
--

INSERT INTO `sondage_question_reponse` (`idSondage`, `idQuestion`, `idReponseProposee`) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 1, 2),
(1, 2, 2),
(1, 3, 2),
(1, 1, 3),
(1, 2, 3),
(1, 3, 3),
(1, 1, 4),
(1, 2, 4),
(1, 3, 4),
(1, 4, 4);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `matricule` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `nom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `mail` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`matricule`, `nom`, `prenom`, `mail`, `password`) VALUES
('he201587', 'Vase', 'Rémy', 'r.vase@students.ephec.be', 'test'),
('he201620', 'Chellé', 'Adrien', 'a.chelle@students.ephec.be', 'test'),
('he201621', 'toto', 'tata', 'toto.tata@students.ephec.be', 'mdp');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `atelier`
--
ALTER TABLE `atelier`
  ADD CONSTRAINT `animateur_fk` FOREIGN KEY (`animateur`) REFERENCES `user` (`matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `participant_atelier`
--
ALTER TABLE `participant_atelier`
  ADD CONSTRAINT `id_atelier_fk` FOREIGN KEY (`idAtelier`) REFERENCES `atelier` (`idAtelier`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `id_participant_fk` FOREIGN KEY (`idparticipant`) REFERENCES `user` (`matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `post_user`
--
ALTER TABLE `post_user`
  ADD CONSTRAINT `post_user_forum_fk` FOREIGN KEY (`forum`) REFERENCES `forum` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `post_user_user_fk` FOREIGN KEY (`auteur`) REFERENCES `user` (`matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `reponse`
--
ALTER TABLE `reponse`
  ADD CONSTRAINT `reponse_sondage_question_reponse_fk` FOREIGN KEY (`idSondage`,`idQuestion`,`idReponseProposee`) REFERENCES `sondage_question_reponse` (`idSondage`, `idQuestion`, `idReponseProposee`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `reponse_user_fk` FOREIGN KEY (`idUser`) REFERENCES `user` (`matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `sondage_question`
--
ALTER TABLE `sondage_question`
  ADD CONSTRAINT `sondage_question_question_fk` FOREIGN KEY (`idQuestion`) REFERENCES `question` (`idQuestion`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `sondage_question_sondage_fk` FOREIGN KEY (`idSondage`) REFERENCES `sondage` (`idSondage`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `sondage_question_reponse`
--
ALTER TABLE `sondage_question_reponse`
  ADD CONSTRAINT `sondage_question_reponse_reponseProposee` FOREIGN KEY (`idReponseProposee`) REFERENCES `reponseproposee` (`idReponseProposee`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `sondage_question_reponse_sondage_question_fk` FOREIGN KEY (`idSondage`,`idQuestion`) REFERENCES `sondage_question` (`idSondage`, `idQuestion`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
