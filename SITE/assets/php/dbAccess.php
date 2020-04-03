<?php

class dbAccess
{

    private $pdo = null;

    public function connexionDB()
    {
        try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=projetweb;charset=utf8", "root", "root");
        } catch (Exception $e) {
            die("Erreur :" . $e->getMessage());
        }
    }

    public function callProcedure($nomProcedure, $procParams = array())
    {
        $params = array();

        switch ($nomProcedure) {
            case 'checkNbAteliers':
            case 'affichageAteliersAnimateur':
            case 'recupUsers':
                array_push($params);

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }
        switch ($nomProcedure) {
            case 'recupAtelierInscrit':
            case 'checkSiAnnule':
            case 'suppressionCompte':
            case 'validerAtelierAdmin':
            case 'devaliderAtelierAdmin':
            case 'annulationAtelierAdmin':
            case 'mesWorkshops':
            case 'recupUnAtelier':
                array_push($params, '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }

        switch ($nomProcedure) {
            case 'checkInscription':
            case 'checkConnexion':
            case 'inscriptionAtelier':
            case "checkSiDejaDansAtelier":
            case 'checkSiAnimateur':
            case 'desinscriptionAtelier':
            case 'annulationAtelier':
            case 'desannulationAtelier':
            case 'retirerCandidature':
            case 'candidatureAtelier':
            case 'checkSiDejaCandidat':
            case 'modifRole':
            case 'checkAtelierUser':
                array_push($params, '?', '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }

        switch ($nomProcedure) {
            case 'creationCompte':
                array_push($params, '?', '?', '?', '?', '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }

        switch ($nomProcedure) {
            case 'ajoutAtelier':
            case 'modifAtelier':
                array_push($params, '?', '?', '?', '?', '?', '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }
    }
}
