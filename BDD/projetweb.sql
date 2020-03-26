-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 26 mars 2020 à 15:09
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
DROP PROCEDURE IF EXISTS `affichageAteliersAnimateur`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `affichageAteliersAnimateur` ()  BEGIN

SELECT a.nom, a.description, a.date, a.nbrPlaces, a.idAtelier, u.prenom, u.nom nomAnimateur
FROM atelier a
INNER JOIN user u 
ON a.animateur = u.matricule
ORDER BY a.date;

END$$

DROP PROCEDURE IF EXISTS `afficherAtelierSansAnimateur`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `afficherAtelierSansAnimateur` ()  BEGIN

SELECT nom, description, nbrPlaces, date FROM atelier
ORDER BY date;

END$$

DROP PROCEDURE IF EXISTS `ajoutAtelier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajoutAtelier` (IN `Nom` VARCHAR(16), IN `Description` VARCHAR(128), IN `Date` DATETIME, IN `Places` INT(11), IN `Animateur` VARCHAR(16))  BEGIN 

INSERT INTO atelier (nom, description, date, nbrPlaces, animateur) VALUES (Nom, Description, Date, Places, Animateur);

END$$

DROP PROCEDURE IF EXISTS `changerAnimateur`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `changerAnimateur` (IN `identifiantAtelier` INT, IN `newAnimateur` VARCHAR(16))  BEGIN 

UPDATE atelier 
SET animateur = newAnimateur
WHERE idAtelier = identifiantAtelier;

END$$

DROP PROCEDURE IF EXISTS `changerMDP`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `changerMDP` (IN `oldMDP` VARCHAR(16), IN `newMDP` VARCHAR(16), IN `noma` VARCHAR(32))  BEGIN

UPDATE user
SET password = newMDP
WHERE password = oldMDP AND matricule = noma;

END$$

DROP PROCEDURE IF EXISTS `checkConnexion`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkConnexion` (IN `identifiant` VARCHAR(3200), IN `mdp` VARCHAR(3000))  BEGIN

SELECT matricule, mail, nom, prenom FROM user 
WHERE password = mdp AND (matricule = identifiant OR mail = identifiant);

END$$

DROP PROCEDURE IF EXISTS `checkInscription`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkInscription` (IN `email` VARCHAR(32), IN `noma` VARCHAR(16))  BEGIN

SELECT matricule FROM user 
WHERE mail = email OR matricule = noma;

END$$

DROP PROCEDURE IF EXISTS `checkInscriptionAtelier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkInscriptionAtelier` (IN `noma` VARCHAR(16), IN `identifiant` INT)  BEGIN

SELECT idParticipant FROM participant_atelier 
WHERE noma = idParticipant AND identifiant = idAtelier;

END$$

DROP PROCEDURE IF EXISTS `checkSiDejaDansAtelier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiDejaDansAtelier` (IN `noma` VARCHAR(16), IN `id` INT)  BEGIN
SELECT * FROM participant_atelier
WHERE idparticipant = noma and idAtelier = id;
END$$

DROP PROCEDURE IF EXISTS `creationCompte`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationCompte` (IN `noma` VARCHAR(16), IN `Nom` VARCHAR(16), IN `Prenom` VARCHAR(16), IN `email` VARCHAR(32), IN `mdp` VARCHAR(3000))  BEGIN

INSERT INTO user(matricule, nom, prenom, mail, password) VALUES(noma, Nom, Prenom, email, mdp);

END$$

DROP PROCEDURE IF EXISTS `desinscriptionAtelier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `desinscriptionAtelier` (IN `noma` VARCHAR(16), IN `id` INT)  BEGIN

DELETE FROM participant_atelier
WHERE noma = idparticipant AND id = idAtelier;

END$$

DROP PROCEDURE IF EXISTS `inscriptionAtelier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `inscriptionAtelier` (IN `noma` VARCHAR(16), IN `identifiant` INT)  BEGIN

INSERT INTO participant_atelier (idparticipant, idAtelier) VALUES (noma, identifiant);

END$$

DROP PROCEDURE IF EXISTS `recupAtelierInscrit`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `recupAtelierInscrit` (IN `noma` VARCHAR(16))  BEGIN

SELECT a.nom, a.description, a.date, u.prenom, u.nom nomAnimateur FROM participant_atelier p join atelier a ON p.idAtelier = a.idAtelier join user u ON a.animateur = u.matricule
WHERE p.idparticipant = noma; 

END$$

DROP PROCEDURE IF EXISTS `suppressionCompte`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `suppressionCompte` (IN `noma` VARCHAR(16))  BEGIN

DELETE FROM user 
WHERE matricule = noma;

END$$

DROP PROCEDURE IF EXISTS `supprimerAtelier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `supprimerAtelier` (IN `Atelier` INT)  BEGIN 

DELETE FROM atelier
WHERE idAtelier = Atelier;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `atelier`
--

DROP TABLE IF EXISTS `atelier`;
CREATE TABLE IF NOT EXISTS `atelier` (
  `idAtelier` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `date` datetime NOT NULL,
  `nbrPlaces` int(11) NOT NULL,
  `animateur` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `termine` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idAtelier`),
  KEY `animateur_fk` (`animateur`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `atelier`
--

INSERT INTO `atelier` (`idAtelier`, `nom`, `description`, `date`, `nbrPlaces`, `animateur`, `termine`) VALUES
(20, 'Les variables PH', 'Atelier dans lequel nous verrons les variables dans le langage PHP', '2020-03-29 09:30:00', 21, 'HE201620', 0),
(21, 'Boucles JS', 'Atelier dans lequel nous verrons les différentes boucles en Javascript', '2020-04-06 18:45:00', 12, 'HE201620', 0),
(22, 'Calcul de la TVA', 'Atelier sur le calcul de la taxe imposable ', '2020-03-27 10:20:00', 20, 'HE201587', 0),
(23, 'WAMP', 'Atelier sur l\'utilisation de WAMP ', '2020-03-31 16:45:00', 15, 'HE201587', 0),
(24, 'Télétravail', 'Atelier sur les outils de télétravail, Teams, Discord, Google Meet, etc.', '2020-03-28 08:45:00', 50, 'HE201620', 0);

-- --------------------------------------------------------

--
-- Structure de la table `forum`
--

DROP TABLE IF EXISTS `forum`;
CREATE TABLE IF NOT EXISTS `forum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sujet` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
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
  `idparticipant` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `idAtelier` int(11) NOT NULL,
  PRIMARY KEY (`idparticipant`,`idAtelier`),
  KEY `id_atelier_fk` (`idAtelier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `participant_atelier`
--

INSERT INTO `participant_atelier` (`idparticipant`, `idAtelier`) VALUES
('HE201587', 20),
('HE201587', 21),
('HE201620', 22),
('HE201620', 23),
('HE201587', 24);

-- --------------------------------------------------------

--
-- Structure de la table `post_user`
--

DROP TABLE IF EXISTS `post_user`;
CREATE TABLE IF NOT EXISTS `post_user` (
  `idPost` int(11) NOT NULL AUTO_INCREMENT,
  `forum` int(11) NOT NULL,
  `texte` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `auteur` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`idPost`),
  KEY `post_user_forum_fk` (`forum`),
  KEY `post_user_user_fk` (`auteur`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `idQuestion` int(11) NOT NULL AUTO_INCREMENT,
  `texte` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
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
  `idUser` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `texte` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`idSondage`,`idQuestion`,`idReponseProposee`,`idUser`),
  KEY `reponse_user_fk` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `reponseproposee`
--

DROP TABLE IF EXISTS `reponseproposee`;
CREATE TABLE IF NOT EXISTS `reponseproposee` (
  `idReponseProposee` int(11) NOT NULL AUTO_INCREMENT,
  `texte` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
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
  `description` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
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
  `nom` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `mail` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(3000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `administration` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`matricule`, `nom`, `prenom`, `mail`, `password`, `administration`) VALUES
('HE201587', 'Vase', 'Remy', 'r.vase@students.ephec.be', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0),
('HE201620', 'Chellé', 'Adrien', 'a.chelle@students.ephec.be', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `atelier`
--
ALTER TABLE `atelier`
  ADD CONSTRAINT `animateur_fk` FOREIGN KEY (`animateur`) REFERENCES `user` (`matricule`) ON DELETE SET NULL;

--
-- Contraintes pour la table `participant_atelier`
--
ALTER TABLE `participant_atelier`
  ADD CONSTRAINT `id_atelier_fk` FOREIGN KEY (`idAtelier`) REFERENCES `atelier` (`idAtelier`) ON DELETE CASCADE,
  ADD CONSTRAINT `id_participant_fk` FOREIGN KEY (`idparticipant`) REFERENCES `user` (`matricule`) ON DELETE CASCADE;

--
-- Contraintes pour la table `post_user`
--
ALTER TABLE `post_user`
  ADD CONSTRAINT `post_user_forum_fk` FOREIGN KEY (`forum`) REFERENCES `forum` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_user_user_fk` FOREIGN KEY (`auteur`) REFERENCES `user` (`matricule`) ON DELETE CASCADE;

--
-- Contraintes pour la table `reponse`
--
ALTER TABLE `reponse`
  ADD CONSTRAINT `reponse_sondage_question_reponse_fk` FOREIGN KEY (`idSondage`,`idQuestion`,`idReponseProposee`) REFERENCES `sondage_question_reponse` (`idSondage`, `idQuestion`, `idReponseProposee`) ON DELETE CASCADE,
  ADD CONSTRAINT `reponse_user_fk` FOREIGN KEY (`idUser`) REFERENCES `user` (`matricule`) ON DELETE CASCADE;

--
-- Contraintes pour la table `sondage_question`
--
ALTER TABLE `sondage_question`
  ADD CONSTRAINT `sondage_question_question_fk` FOREIGN KEY (`idQuestion`) REFERENCES `question` (`idQuestion`) ON DELETE CASCADE,
  ADD CONSTRAINT `sondage_question_sondage_fk` FOREIGN KEY (`idSondage`) REFERENCES `sondage` (`idSondage`) ON DELETE CASCADE;

--
-- Contraintes pour la table `sondage_question_reponse`
--
ALTER TABLE `sondage_question_reponse`
  ADD CONSTRAINT `sondage_question_reponse_reponseProposee` FOREIGN KEY (`idReponseProposee`) REFERENCES `reponseproposee` (`idReponseProposee`) ON DELETE CASCADE,
  ADD CONSTRAINT `sondage_question_reponse_sondage_question_fk` FOREIGN KEY (`idSondage`,`idQuestion`) REFERENCES `sondage_question` (`idSondage`, `idQuestion`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
