-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mer. 29 avr. 2020 à 08:20
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `projetweb`
--

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `affichageAteliersAnimateur` ()  BEGIN

SELECT a.nom, a.description, a.sujet, a.date, a.nbrPlaces, a.idAtelier, u.prenom, a.validation, a.annulation, a.duree, u.nom nomAnimateur
FROM atelier a
INNER JOIN user u 
ON a.animateur = u.matricule
ORDER BY a.date;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `afficherAtelierSansAnimateur` ()  BEGIN

SELECT nom, description, nbrPlaces, date FROM atelier
ORDER BY date;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `afficherCandidats` (IN `id` INT)  BEGIN

SELECT c.idCandidat, u.prenom, u.nom, u.mail, a.nom nomAtelier from candidat_atelier AS c JOIN user u ON c.idCandidat = u.matricule 
JOIN atelier a ON c.idAtelier = a.idAtelier
WHERE id = idAtelier;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ajoutAtelier` (IN `Nom` VARCHAR(16), IN `Description` VARCHAR(128), IN `Date` DATETIME, IN `Places` INT(11), IN `Animateur` VARCHAR(16), IN `Sujet` VARCHAR(255), IN `Duree` TIME)  BEGIN 

INSERT INTO atelier (nom, description, date, nbrPlaces, animateur, sujet,duree) VALUES (Nom, Description, Date, Places, Animateur, Sujet,Duree);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ajoutIdee` (IN `nom` VARCHAR(255), IN `sujet` VARCHAR(255), IN `id` VARCHAR(32), IN `admin` TINYINT)  BEGIN

INSERT INTO idee (nomIdee, sujetIdee, userIdee, adminIdee) VALUES (nom, sujet, id, admin );

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `annulationAtelier` (IN `id` INT, IN `noma` VARCHAR(32))  BEGIN

UPDATE atelier
SET annulation = 1
WHERE idAtelier = id AND annulation = 0 AND animateur = noma;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `annulationAtelierAdmin` (IN `id` INT)  BEGIN
DELETE FROM atelier
WHERE idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `candidatureAtelier` (IN `noma` VARCHAR(32), IN `id` INT)  BEGIN

INSERT INTO candidat_atelier (idCandidat, idAtelier) VALUES (noma, id);

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkAtelierUser` (IN `id` INT, IN `noma` VARCHAR(16))  BEGIN
SELECT * FROM atelier
WHERE atelier.idAtelier = id and atelier.animateur = noma;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkCategorie` (IN `id` INT)  BEGIN

SELECT sujet FROM atelier 
WHERE id = idAtelier;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkConnexion` (IN `identifiant` VARCHAR(3200), IN `mdp` VARCHAR(3000))  BEGIN

SELECT matricule, mail, nom, prenom,administration FROM user 
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiAdmin` (IN `noma` VARCHAR(32))  BEGIN

SELECT mail FROM user 
WHERE matricule = noma AND administration = 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiAnimateur` (IN `noma` VARCHAR(32), IN `id` INT)  BEGIN

SELECT * FROM atelier
WHERE animateur = noma AND idAtelier = id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiAnnule` (IN `id` INT)  BEGIN

SELECT * FROM atelier
WHERE annulation = 0 AND idAtelier = id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiDejaCandidat` (IN `noma` VARCHAR(32), IN `id` INT)  BEGIN
SELECT * FROM candidat_atelier
WHERE idCandidat = noma and idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiDejaDansAtelier` (IN `noma` VARCHAR(16), IN `id` INT)  BEGIN
SELECT * FROM participant_atelier
WHERE idparticipant = noma and idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkUserIdee` (IN `idIde` INT, IN `idUser` VARCHAR(32))  BEGIN 

SELECT idVote from vote 
WHERE idIdee = idIde AND idUserVote	= idUser;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `creationCompte` (IN `noma` VARCHAR(16), IN `Nom` VARCHAR(16), IN `Prenom` VARCHAR(16), IN `email` VARCHAR(32), IN `mdp` VARCHAR(3000))  BEGIN

INSERT INTO user(matricule, nom, prenom, mail, password) VALUES(noma, Nom, Prenom, email, mdp);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `desannulationAtelier` (IN `id` INT, IN `noma` VARCHAR(32))  BEGIN

UPDATE atelier
SET annulation = 0
WHERE idAtelier = id AND annulation = 1 AND animateur = noma;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `desinscriptionAtelier` (IN `noma` VARCHAR(16), IN `id` INT)  BEGIN

DELETE FROM participant_atelier
WHERE noma = idparticipant AND id = idAtelier;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `devaliderAtelierAdmin` (IN `id` INT)  BEGIN
UPDATE atelier
SET atelier.validation = 0
WHERE idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `inscriptionAtelier` (IN `noma` VARCHAR(16), IN `identifiant` INT)  BEGIN

INSERT INTO participant_atelier (idparticipant, idAtelier) VALUES (noma, identifiant);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `mesWorkshops` (IN `noma` VARCHAR(16))  BEGIN
SELECT a.idAtelier,a.nom,a.description,a.date,a.nbrPlaces,a.animateur,a.sujet,a.validation,a.annulation,a.duree FROM atelier as a
WHERE a.animateur = noma;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modifAtelier` (IN `id` INT, IN `nom` VARCHAR(16), IN `descr` VARCHAR(128), IN `datee` DATETIME, IN `nb` INT(11), IN `sujet` VARCHAR(255), IN `duree` TIME)  BEGIN
UPDATE atelier 
SET atelier.nom = nom, atelier.description = descr,  atelier.date = datee, atelier.nbrPlaces = nb, atelier.sujet =sujet, atelier.duree = duree 
WHERE atelier.idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modifEtatVote` (IN `idV` INT, IN `etat` TINYINT)  BEGIN 

UPDATE vote SET valeurVote = etat
WHERE idVote = idV;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modifRole` (IN `noma` VARCHAR(30), IN `admin` TINYINT(4))  BEGIN
UPDATE user SET administration = admin 
WHERE matricule = noma;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupAllIdee` ()  BEGIN

SELECT * FROM idee;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupAtelierAnnule` ()  BEGIN

SELECT * FROM atelier
WHERE termine = 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupAtelierInscrit` (IN `noma` VARCHAR(16))  BEGIN

SELECT a.nom, a.description, a.date,a.sujet,a.nbrPlaces,a.idAtelier,a.validation, a.annulation,a.duree, u.prenom, u.nom nomAnimateur FROM participant_atelier p join atelier a ON p.idAtelier = a.idAtelier join user u ON a.animateur = u.matricule
WHERE p.idparticipant = noma; 

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupPlacesDispo` (IN `id` INT)  BEGIN
SELECT COUNT(DISTINCT participant_atelier.idparticipant) FROM participant_atelier
WHERE participant_atelier.idAtelier = id
GROUP BY participant_atelier.idAtelier;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupUnAtelier` (IN `id` INT)  BEGIN
SELECT * FROM atelier
WHERE idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupUsers` ()  BEGIN

SELECT matricule, prenom, nom, mail, administration FROM user;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupVoteContre` (IN `idIde` INT)  BEGIN
SELECT COUNT(DISTINCT vote.idVote) FROM vote
WHERE vote.idIdee = idIde AND valeurVote = 1
GROUP BY vote.idVote;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `recupVotePour` (IN `idIde` INT)  BEGIN
SELECT COUNT(DISTINCT vote.idVote) FROM vote
WHERE vote.idIdee = idIde AND valeurVote = 0
GROUP BY vote.idVote;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `retirerCandidature` (IN `noma` VARCHAR(32), IN `id` INT)  BEGIN

DELETE FROM candidat_atelier
WHERE noma = idCandidat AND id = idAtelier;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `suppressionCompte` (IN `noma` VARCHAR(16))  BEGIN

DELETE FROM user 
WHERE matricule = noma;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `supprimerAtelier` (IN `Atelier` INT)  BEGIN 

DELETE FROM atelier
WHERE idAtelier = Atelier AND termine = 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `supprimerIdee` (IN `id` INT)  BEGIN
DELETE FROM idee 
WHERE idIdee = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `validerAtelierAdmin` (IN `id` INT)  BEGIN
UPDATE atelier
SET atelier.validation = 1
WHERE idAtelier = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `voteIdee` (IN `idIdee` INT, IN `etat` TINYINT, IN `idUser` VARCHAR(32))  BEGIN 

INSERT INTO vote (idUserVote, valeurVote, idIdee) VALUES ( idUser, etat, idIdee);

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `atelier`
--

CREATE TABLE `atelier` (
  `idAtelier` int(11) NOT NULL,
  `nom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `date` datetime NOT NULL,
  `nbrPlaces` int(11) NOT NULL,
  `animateur` varchar(16) COLLATE utf8mb4_bin DEFAULT NULL,
  `sujet` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `validation` int(1) NOT NULL DEFAULT '0',
  `annulation` int(1) NOT NULL DEFAULT '0',
  `duree` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `atelier`
--

INSERT INTO `atelier` (`idAtelier`, `nom`, `description`, `date`, `nbrPlaces`, `animateur`, `sujet`, `validation`, `annulation`, `duree`) VALUES
(20, 'Les variables PH', 'Atelier dans lequel nous verrons les variables dans le langage PHP', '2020-03-29 09:30:00', 21, 'HE201620', 'Informatique', 0, 1, '00:00:00'),
(22, 'Calcul de la TVA', 'Atelier sur le calcul de la taxe imposable ', '2020-04-05 17:26:00', 20, 'HE201587', 'Droit', 1, 1, '00:00:00'),
(23, 'WAMP', 'Atelier sur l utilisation de WAMP ', '2021-02-08 17:50:00', 15, 'HE201587', 'Informatique', 0, 1, '00:00:00'),
(24, 'Télétravail', 'Atelier sur les outils de télétravail, Teams, Discord, Google Meet, etc.', '2020-03-28 08:45:00', 50, 'HE201620', 'Marketing', 1, 0, '00:00:00'),
(29, 'test', 'test', '2020-04-22 17:20:00', 1, 'HE201587', 'Comptabilité', 0, 0, '00:00:00'),
(32, 'testDate', 'testDate', '2020-03-13 18:00:00', 6, 'HE201587', 'Comptabilité', 1, 0, '00:00:00'),
(33, 'TESTDATE', 'TESTDATE', '2020-04-03 17:21:00', 6, 'HE201587', 'Comptabilité', 0, 0, '00:00:00'),
(34, 'test', 'test', '2020-04-05 18:00:00', 5, 'HE201587', 'Comptabilité', 0, 0, '00:00:00'),
(35, 'DETER', 'DETER', '2020-04-11 14:50:00', 2, 'HE201587', 'Comptabilité', 1, 0, '02:00:00'),
(36, 'ChangementDuree', 'ChangementDuree', '2020-04-05 18:00:00', 50, 'HE777777', 'Marketing', 0, 0, '02:22:00'),
(43, 'test', 'testetetetetetetette', '2020-04-26 11:11:00', 11, 'HE201587', 'Comptabilité', 0, 0, '10:02:00');

-- --------------------------------------------------------

--
-- Structure de la table `candidat_atelier`
--

CREATE TABLE `candidat_atelier` (
  `idCandidat` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `idAtelier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `candidat_atelier`
--

INSERT INTO `candidat_atelier` (`idCandidat`, `idAtelier`) VALUES
('HE000000', 22),
('HE201620', 22),
('HE201587', 24);

-- --------------------------------------------------------

--
-- Structure de la table `forum`
--

CREATE TABLE `forum` (
  `id` int(11) NOT NULL,
  `sujet` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(240) COLLATE utf8mb4_bin NOT NULL,
  `creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `forum`
--

INSERT INTO `forum` (`id`, `sujet`, `description`, `creation`) VALUES
(1, 'tva', 'forum destiné aux questions liées à la TVA', '2020-03-03 14:55:29');

-- --------------------------------------------------------

--
-- Structure de la table `idee`
--

CREATE TABLE `idee` (
  `idIdee` int(11) NOT NULL,
  `nomIdee` varchar(255) COLLATE utf8_bin NOT NULL,
  `sujetIdee` varchar(255) COLLATE utf8_bin NOT NULL,
  `userIdee` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `adminIdee` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `idee`
--

INSERT INTO `idee` (`idIdee`, `nomIdee`, `sujetIdee`, `userIdee`, `adminIdee`) VALUES
(1, 'testidee', 'Comptabilité', 'HE201587', 0),
(6, 'testidee4', 'Comptabilité', 'HE000000', 1);

-- --------------------------------------------------------

--
-- Structure de la table `participant_atelier`
--

CREATE TABLE `participant_atelier` (
  `idparticipant` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `idAtelier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `participant_atelier`
--

INSERT INTO `participant_atelier` (`idparticipant`, `idAtelier`) VALUES
('HE201587', 20),
('HE000000', 22),
('HE201620', 22),
('HE201587', 24),
('HE201587', 29),
('HE000000', 32),
('HE000000', 35),
('HE201587', 35);

-- --------------------------------------------------------

--
-- Structure de la table `post_user`
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
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `idQuestion` int(11) NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

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

CREATE TABLE `reponse` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL,
  `idReponseProposee` int(11) NOT NULL,
  `idUser` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `reponseproposee`
--

CREATE TABLE `reponseproposee` (
  `idReponseProposee` int(11) NOT NULL,
  `texte` varchar(256) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

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

CREATE TABLE `sondage` (
  `idSondage` int(11) NOT NULL,
  `description` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `dateDebut` datetime NOT NULL,
  `dateFin` datetime NOT NULL,
  `ouvert` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `sondage`
--

INSERT INTO `sondage` (`idSondage`, `description`, `dateDebut`, `dateFin`, `ouvert`) VALUES
(1, 'Sondage étudiant', '2020-03-12 08:30:00', '2020-03-19 18:30:00', 1);

-- --------------------------------------------------------

--
-- Structure de la table `sondage_question`
--

CREATE TABLE `sondage_question` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL
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

CREATE TABLE `sondage_question_reponse` (
  `idSondage` int(11) NOT NULL,
  `idQuestion` int(11) NOT NULL,
  `idReponseProposee` int(11) NOT NULL
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

CREATE TABLE `user` (
  `matricule` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `nom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(16) COLLATE utf8mb4_bin NOT NULL,
  `mail` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(3000) COLLATE utf8mb4_bin NOT NULL,
  `administration` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`matricule`, `nom`, `prenom`, `mail`, `password`, `administration`) VALUES
('HE000000', 'Admin', 'Admin', 'admin@ephec.be', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 1),
('HE111111', 'Masson', 'Claude', 'Claude@hotmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 1),
('HE200101', 'Jean', 'DelaFOntaine', 'remy.vase3@hotmail.fr', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0),
('HE201587', 'Vase', 'Remy', 'r.vase@students.ephec.be', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0),
('HE201620', 'Chellé', 'Adrien', 'a.chelle@students.ephec.be', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 1),
('HE267755', 'Dubruille', 'Xavier', 'xavier@hotmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 1),
('HE654331', 'Bouterfa', 'Youssef', 'Youssef@hotmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0),
('HE675432', 'Schalkwijk', 'Laurent', 'Laurent@hotmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0),
('HE777777', 'Van Dormael', 'Louis', 'Louis@hotmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0);

-- --------------------------------------------------------

--
-- Structure de la table `vote`
--

CREATE TABLE `vote` (
  `idVote` int(11) NOT NULL,
  `idUserVote` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `valeurVote` tinyint(4) NOT NULL,
  `idIdee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `vote`
--

INSERT INTO `vote` (`idVote`, `idUserVote`, `valeurVote`, `idIdee`) VALUES
(1, 'HE000000', 0, 6),
(7, 'HE000000', 0, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `atelier`
--
ALTER TABLE `atelier`
  ADD PRIMARY KEY (`idAtelier`),
  ADD KEY `animateur_fk` (`animateur`);

--
-- Index pour la table `candidat_atelier`
--
ALTER TABLE `candidat_atelier`
  ADD PRIMARY KEY (`idCandidat`,`idAtelier`),
  ADD KEY `candidat_atelier_atelier_fk` (`idAtelier`);

--
-- Index pour la table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `idee`
--
ALTER TABLE `idee`
  ADD PRIMARY KEY (`idIdee`),
  ADD KEY `userIdee` (`userIdee`) USING BTREE;

--
-- Index pour la table `participant_atelier`
--
ALTER TABLE `participant_atelier`
  ADD PRIMARY KEY (`idparticipant`,`idAtelier`),
  ADD KEY `id_atelier_fk` (`idAtelier`);

--
-- Index pour la table `post_user`
--
ALTER TABLE `post_user`
  ADD PRIMARY KEY (`idPost`),
  ADD KEY `post_user_forum_fk` (`forum`),
  ADD KEY `post_user_user_fk` (`auteur`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`idQuestion`);

--
-- Index pour la table `reponse`
--
ALTER TABLE `reponse`
  ADD PRIMARY KEY (`idSondage`,`idQuestion`,`idReponseProposee`,`idUser`),
  ADD KEY `reponse_user_fk` (`idUser`);

--
-- Index pour la table `reponseproposee`
--
ALTER TABLE `reponseproposee`
  ADD PRIMARY KEY (`idReponseProposee`);

--
-- Index pour la table `sondage`
--
ALTER TABLE `sondage`
  ADD PRIMARY KEY (`idSondage`);

--
-- Index pour la table `sondage_question`
--
ALTER TABLE `sondage_question`
  ADD PRIMARY KEY (`idSondage`,`idQuestion`),
  ADD KEY `sondage_question_question_fk` (`idQuestion`);

--
-- Index pour la table `sondage_question_reponse`
--
ALTER TABLE `sondage_question_reponse`
  ADD PRIMARY KEY (`idSondage`,`idQuestion`,`idReponseProposee`),
  ADD KEY `sondage_question_reponse_reponseProposee` (`idReponseProposee`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`matricule`);

--
-- Index pour la table `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`idVote`),
  ADD KEY `idUserVote` (`idUserVote`) USING BTREE,
  ADD KEY `idIdee` (`idIdee`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `atelier`
--
ALTER TABLE `atelier`
  MODIFY `idAtelier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT pour la table `forum`
--
ALTER TABLE `forum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `idee`
--
ALTER TABLE `idee`
  MODIFY `idIdee` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `post_user`
--
ALTER TABLE `post_user`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `idQuestion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `reponseproposee`
--
ALTER TABLE `reponseproposee`
  MODIFY `idReponseProposee` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `sondage`
--
ALTER TABLE `sondage`
  MODIFY `idSondage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `vote`
--
ALTER TABLE `vote`
  MODIFY `idVote` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `atelier`
--
ALTER TABLE `atelier`
  ADD CONSTRAINT `animateur_fk` FOREIGN KEY (`animateur`) REFERENCES `user` (`matricule`) ON DELETE SET NULL;

--
-- Contraintes pour la table `candidat_atelier`
--
ALTER TABLE `candidat_atelier`
  ADD CONSTRAINT `candidat_atelier_atelier_fk` FOREIGN KEY (`idAtelier`) REFERENCES `atelier` (`idAtelier`) ON DELETE CASCADE,
  ADD CONSTRAINT `candidat_atelier_user_fk` FOREIGN KEY (`idCandidat`) REFERENCES `user` (`matricule`) ON DELETE CASCADE;

--
-- Contraintes pour la table `idee`
--
ALTER TABLE `idee`
  ADD CONSTRAINT `fkIdee` FOREIGN KEY (`userIdee`) REFERENCES `user` (`matricule`) ON DELETE CASCADE ON UPDATE CASCADE;

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

--
-- Contraintes pour la table `vote`
--
ALTER TABLE `vote`
  ADD CONSTRAINT `vote_ibfk_1` FOREIGN KEY (`idUserVote`) REFERENCES `user` (`matricule`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vote_ibfk_2` FOREIGN KEY (`idIdee`) REFERENCES `idee` (`idIdee`) ON DELETE CASCADE ON UPDATE CASCADE;
