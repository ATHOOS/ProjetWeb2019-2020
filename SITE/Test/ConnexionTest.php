<?php

use PHPUnit\Framework\TestCase;

include 'SITE/assets/php/dbAccess.php';

class ConnexionTest extends TestCase {
//Check si le pseudo et le mot de passe coincide bien avec une ligne de la BDD
    public function testSomething() {
        
        $mailValide = "r.vase@students.ephec.be";
        $motDePasseValide = hash('sha256',"test");

        $mailInvalide = "j.pierre@students.ephec.be";
        $motDePasseInvalide = hash('sha256',"reggeg");
        
        $matriculeCorrect = "HE201587";
        $matriculeIncorrect = "HE111112";

        $db = new dbAccess();

        //mail et mot de passe corrects
        $checkConnexion1 = $db->callProcedure('checkConnexion',[$mailValide,$motDePasseValide]);
        $this->assertNotEmpty($checkConnexion1);

        //mail et mdp incorrects
        $checkConnexion2 = $db->callProcedure('checkConnexion',[$mailInvalide,$motDePasseInvalide]);
        $this->assertEmpty($checkConnexion2);

        //mail correct et mdp incorrect
        $checkConnexion4 = $db->callProcedure('checkConnexion',[$mailValide,$motDePasseInvalide]);
        $this->assertEmpty($checkConnexion4);

        //mail incorrect et mdp correct
        $checkConnexion3 = $db->callProcedure('checkConnexion',[$mailInvalide,$motDePasseValide]);
        $this->assertEmpty($checkConnexion3);

        //matricule correct et mdp correct
        $checkConnexion6 = $db->callProcedure('checkConnexion',[$matriculeCorrect,$motDePasseValide]);
        $this->assertNotEmpty($checkConnexion6);

        //matricule correct et mdp incorrect
        $checkConnexion7 = $db->callProcedure('checkConnexion',[$matriculeCorrect,$motDePasseInvalide]);
        $this->assertEmpty($checkConnexion7);

        //matricule incorrect et mdp correct
        $checkConnexion5 = $db->callProcedure('checkConnexion',[$matriculeIncorrect,$motDePasseValide]);
        $this->assertEmpty($checkConnexion5);

        //matricule incorrect et mdp incorrect
        $checkConnexion8 = $db->callProcedure('checkConnexion',[$matriculeIncorrect,$motDePasseInvalide]);
        $this->assertEmpty($checkConnexion8);

    }
}