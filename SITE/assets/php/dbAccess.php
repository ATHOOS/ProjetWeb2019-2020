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
            case 'checkInscription':
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
    }
}
