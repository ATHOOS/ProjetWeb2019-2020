-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 31, 2020 at 01:52 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `projetweb`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `affichageAteliersAnimateur` ()  BEGIN

SELECT a.nom, a.description, a.date, a.nbrPlaces, a.idAtelier, u.prenom, u.nom nomAnimateur
FROM atelier a
INNER JOIN user u 
ON a.animateur = u.matricule
ORDER BY a.date;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `afficherAtelierSansAnimateur` ()  BEGIN

SELECT nom, description, nbrPlaces, date FROM atelier
ORDER BY date;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ajoutAtelier` (IN `Nom` VARCHAR(16), IN `Description` VARCHAR(128), IN `Date` DATETIME, IN `Places` INT(11), IN `Animateur` VARCHAR(16), IN `Sujet` VARCHAR(255))  BEGIN 

INSERT INTO atelier (nom, description, date, nbrPlaces, animateur,sujet) VALUES (Nom, Description, Date, Places, Animateur,Sujet);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `changerAnimateur` (IN `identifiantAtelier` INT, IN `newAnimateur` VARCHAR(16))  BEGIN 

UPDATE atelier 
SET animateur = newAnimateur
WHERE idAtelier = identifiantAtelier;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `changerMDP` (IN `oldMDP` VARCHAR(16), IN `newMDP` VARCHAR(16), IN `noma` VARCHAR(32))  BEGIN

UPDATE user
SET password = newMDP
WHERE password = oldMDP AND matricule = noma;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkConnexion` (IN `identifiant` VARCHAR(3200), IN `mdp` VARCHAR(3000))  BEGIN

SELECT matricule, mail, nom, prenom FROM user 
WHERE password = mdp AND (matricule = identifiant OR mail = identifiant);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkInscription` (IN `email` VARCHAR(32), IN `noma` VARCHAR(16))  BEGIN

SELECT matricule FROM user 
WHERE mail = email OR matricule = noma;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkInscriptionAtelier` (IN `noma` VARCHAR(16), IN `identifiant` INT)  BEGIN

SELECT idParticipant FROM participant_atelier 
WHERE noma = idParticipant AND identifiant = idAtelier;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiDejaDansAtelier` (IN `noma` VARCHAR(16), IN `id` INT)  BEGIN
SELECT * FROM participant_atelier
WHERE idparticipant = noma and idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `creationCompte` (IN `noma` VARCHAR(16), IN `Nom` VARCHAR(16), IN `Prenom` VARCHAR(16), IN `email` VARCHAR(32), IN `mdp` VARCHAR(3000))  BEGIN

INSERT INTO user(matricule, nom, prenom, mail, password) VALUES(noma, Nom, Prenom, email, mdp);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `desinscriptionAtelier` (IN `noma` VARCHAR(16), IN `id` INT)  BEGIN

DELETE FROM participant_atelier
WHERE noma = idparticipant AND id = idAtelier;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `inscriptionAtelier` (IN `noma` VARCHAR(16), IN `identifiant` INT)  BEGIN

INSERT INTO participant_atelier (idparticipant, idAtelier) VALUES (noma, identifiant);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `suppressionCompte` (IN `noma` VARCHAR(16))  BEGIN

DELETE FROM user 
WHERE matricule = noma;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `supprimerAtelier` (IN `Atelier` INT)  BEGIN 

DELETE FROM atelier
WHERE idAtelier = Atelier;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `atelier`
--

CREATE TABLE `atelier` (
  `idAtelier` int(11) NOT NULL,
  `nom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `date` datetime NOT NULL,
  `nbrPlaces` int(11) NOT NULL,
  `animateur` varchar(16) COLLATE utf8mb4_bin DEFAULT NULL,
  `termine` tinyint(1) NOT NULL DEFAULT '0',
  `sujet` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `atelier`
--

INSERT INTO `atelier` (`idAtelier`, `nom`, `description`, `date`, `nbrPlaces`, `animateur`, `termine`, `sujet`) VALUES
(9, 'test3', 'djheshds', '2020-02-27 12:30:00', 34, NULL, 0, ''),
(10, 'PHP', 'test', '2020-02-27 12:30:00', 12, 'HE201587', 0, ''),
(11, 'qdsfdqsf', 'sdfsdf', '2020-03-04 00:00:00', 8, 'he123456', 0, ''),
(12, 'azerfezf', 'qefzefzefzef', '2020-03-19 00:00:00', 3, 'HE201587', 0, ''),
(13, 'zefezf', 'ezfzefzef', '2020-03-05 00:00:00', 4, 'HE201587', 0, ''),
(14, 'azerfezf', 'qefzefzefzef', '2020-03-19 00:00:00', 3, 'HE201587', 0, ''),
(15, 'zefezf', 'ezfzefzef', '2020-03-05 00:00:00', 4, 'HE201587', 0, ''),
(16, 'test', 'test', '2020-06-18 20:00:00', 6, 'HE201587', 0, 'Compta');

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

CREATE TABLE `forum` (
  `id` int(11) NOT NULL,
  `sujet` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(240) COLLATE utf8mb4_bin NOT NULL,
  `creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `forum`
--

INSERT INTO `forum` (`id`, `sujet`, `description`, `creation`) VALUES
(1, 'tva', 'forum destiné aux questions liées à la TVA', '2020-03-03 14:55:29');

-- --------------------------------------------------------

--
-- Table structure for table `participant_atelier`
--

CREATE TABLE `participant_atelier` (
  `idparticipant` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `idAtelier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `participant_atelier`
--

INSERT INTO `participant_atelier` (`idparticipant`, `idAtelier`) VALUES
('HE201587', 10),
('he201620', 10),
('HE201587', 11),
('HE201587', 12);

-- --------------------------------------------------------

--
-- Table structure for table `post_user`
--

CREATE TABLE `post_user` (
  `idPost` int(11) NOT NULL,
  `forum` int(11) NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `auteur` varchar(16) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `idQuestion` int(11) NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`idQuestion`, `texte`) VALUES
(1, 'Que pensez vous des ateliers ?'),
(2, 'Les sujets vous conviennent-ils ?'),
(3, 'Les horaires sont-ils adaptés ?'),
(4, 'Les animateurs sont-ils assez compétent ?');

-- --------------------------------------------------------

--
-- Table structure for table `reponse`
--

CREATE TABLE `reponse` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL,
  `idReponseProposee` int(11) NOT NULL,
  `idUser` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `reponseproposee`
--

CREATE TABLE `reponseproposee` (
  `idReponseProposee` int(11) NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `reponseproposee`
--

INSERT INTO `reponseproposee` (`idReponseProposee`, `texte`) VALUES
(1, 'Pas d\'accord'),
(2, 'Pas trop d\'accord'),
(3, 'Plutôt d\'accord'),
(4, 'D\'accord');

-- --------------------------------------------------------

--
-- Table structure for table `sondage`
--

CREATE TABLE `sondage` (
  `idSondage` int(11) NOT NULL,
  `description` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `dateDebut` datetime NOT NULL,
  `dateFin` datetime NOT NULL,
  `ouvert` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `sondage`
--

INSERT INTO `sondage` (`idSondage`, `description`, `dateDebut`, `dateFin`, `ouvert`) VALUES
(1, 'Sondage étudiant', '2020-03-12 08:30:00', '2020-03-19 18:30:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sondage_question`
--

CREATE TABLE `sondage_question` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `sondage_question`
--

INSERT INTO `sondage_question` (`idSondage`, `idQuestion`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `sondage_question_reponse`
--

CREATE TABLE `sondage_question_reponse` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL,
  `idReponseProposee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `sondage_question_reponse`
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `matricule` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `nom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `mail` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(3000) COLLATE utf8mb4_bin NOT NULL,
  `administration` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`matricule`, `nom`, `prenom`, `mail`, `password`, `administration`) VALUES
('HE201587', 'Vase', 'Remy', 'r.vase@students.ephec.be', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0),
('he123456', 'test', 'retest', 'etcatest@test.fr', 'test123', 0),
('he201620', 'Chellé', 'Adrien', 'a.chelle@students.ephec.be', 'test', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atelier`
--
ALTER TABLE `atelier`
  ADD PRIMARY KEY (`idAtelier`),
  ADD KEY `animateur_fk` (`animateur`);

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `participant_atelier`
--
ALTER TABLE `participant_atelier`
  ADD PRIMARY KEY (`idparticipant`,`idAtelier`),
  ADD KEY `id_atelier_fk` (`idAtelier`);

--
-- Indexes for table `post_user`
--
ALTER TABLE `post_user`
  ADD PRIMARY KEY (`idPost`),
  ADD KEY `post_user_forum_fk` (`forum`),
  ADD KEY `post_user_user_fk` (`auteur`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`idQuestion`);

--
-- Indexes for table `reponse`
--
ALTER TABLE `reponse`
  ADD PRIMARY KEY (`idSondage`,`idQuestion`,`idReponseProposee`,`idUser`),
  ADD KEY `reponse_user_fk` (`idUser`);

--
-- Indexes for table `reponseproposee`
--
ALTER TABLE `reponseproposee`
  ADD PRIMARY KEY (`idReponseProposee`);

--
-- Indexes for table `sondage`
--
ALTER TABLE `sondage`
  ADD PRIMARY KEY (`idSondage`);

--
-- Indexes for table `sondage_question`
--
ALTER TABLE `sondage_question`
  ADD PRIMARY KEY (`idSondage`,`idQuestion`),
  ADD KEY `sondage_question_question_fk` (`idQuestion`);

--
-- Indexes for table `sondage_question_reponse`
--
ALTER TABLE `sondage_question_reponse`
  ADD PRIMARY KEY (`idSondage`,`idQuestion`,`idReponseProposee`),
  ADD KEY `sondage_question_reponse_reponseProposee` (`idReponseProposee`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`matricule`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atelier`
--
ALTER TABLE `atelier`
  MODIFY `idAtelier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `forum`
--
ALTER TABLE `forum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `post_user`
--
ALTER TABLE `post_user`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `idQuestion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `reponseproposee`
--
ALTER TABLE `reponseproposee`
  MODIFY `idReponseProposee` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sondage`
--
ALTER TABLE `sondage`
  MODIFY `idSondage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `atelier`
--
ALTER TABLE `atelier`
  ADD CONSTRAINT `animateur_fk` FOREIGN KEY (`animateur`) REFERENCES `user` (`matricule`) ON DELETE SET NULL;

--
-- Constraints for table `participant_atelier`
--
ALTER TABLE `participant_atelier`
  ADD CONSTRAINT `id_atelier_fk` FOREIGN KEY (`idAtelier`) REFERENCES `atelier` (`idAtelier`) ON DELETE CASCADE,
  ADD CONSTRAINT `id_participant_fk` FOREIGN KEY (`idparticipant`) REFERENCES `user` (`matricule`) ON DELETE CASCADE;

--
-- Constraints for table `post_user`
--
ALTER TABLE `post_user`
  ADD CONSTRAINT `post_user_forum_fk` FOREIGN KEY (`forum`) REFERENCES `forum` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_user_user_fk` FOREIGN KEY (`auteur`) REFERENCES `user` (`matricule`) ON DELETE CASCADE;

--
-- Constraints for table `reponse`
--
ALTER TABLE `reponse`
  ADD CONSTRAINT `reponse_sondage_question_reponse_fk` FOREIGN KEY (`idSondage`,`idQuestion`,`idReponseProposee`) REFERENCES `sondage_question_reponse` (`idSondage`, `idQuestion`, `idReponseProposee`) ON DELETE CASCADE,
  ADD CONSTRAINT `reponse_user_fk` FOREIGN KEY (`idUser`) REFERENCES `user` (`matricule`) ON DELETE CASCADE;

--
-- Constraints for table `sondage_question`
--
ALTER TABLE `sondage_question`
  ADD CONSTRAINT `sondage_question_question_fk` FOREIGN KEY (`idQuestion`) REFERENCES `question` (`idQuestion`) ON DELETE CASCADE,
  ADD CONSTRAINT `sondage_question_sondage_fk` FOREIGN KEY (`idSondage`) REFERENCES `sondage` (`idSondage`) ON DELETE CASCADE;

--
-- Constraints for table `sondage_question_reponse`
--
ALTER TABLE `sondage_question_reponse`
  ADD CONSTRAINT `sondage_question_reponse_reponseProposee` FOREIGN KEY (`idReponseProposee`) REFERENCES `reponseproposee` (`idReponseProposee`) ON DELETE CASCADE,
  ADD CONSTRAINT `sondage_question_reponse_sondage_question_fk` FOREIGN KEY (`idSondage`,`idQuestion`) REFERENCES `sondage_question` (`idSondage`, `idQuestion`) ON DELETE CASCADE;
