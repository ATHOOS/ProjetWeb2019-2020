<?php

class dbAccess
{

    private $pdo = null;

    public function connexionDB()
    {
        try {
            $this->pdo = new PDO("mysql:host=itskybeqrmadmin.mysql.db;dbname=itskybeqrmadmin;charset=utf8", "itskybeqrmadmin", "ephecWorkshop123");
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
            case 'recupAllIdee':
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
            case 'recupPlacesDispo':
            case 'recupVotePour':
            case 'recupVoteContre':
            case 'checkCategorie':
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
            case 'checkUserIdee':
            case 'modifEtatVote':    
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
            case 'voteIdee':

                array_push($params, '?', '?', '?');

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
            case 'ajoutIdee':

                array_push($params, '?', '?', '?', '?');

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
                array_push($params, '?', '?', '?', '?', '?', '?', '?');

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