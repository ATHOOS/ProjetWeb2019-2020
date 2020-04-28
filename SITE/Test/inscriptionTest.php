<?php

use PHPUnit\Framework\TestCase;

include 'SITE/assets/php/dbAccess.php';

class inscriptionTest extends TestCase {
//Check si le pseudo et le mot de passe coincide bien avec une ligne de la BDD
    public function testSomething() {
        
        $mailInvalide = "r.vase@students.ephec.be";
        $mailValide = "j.pierre@students.ephec.be";
        
        $matriculeIncorrect = "HE201587";
        $matriculeCorrect = "HE111112";

        $db = new dbAccess();

        //mail et pseudo correct
        $checkInscription1 = $db->callProcedure('checkInscription',[$mailValide,$matriculeCorrect]);
        $this->assertEmpty($checkInscription1);

        //mail correct et pseudo déjà pris
        $checkInscription2 = $db->callProcedure('checkInscription',[$mailValide,$matriculeIncorrect]);
        $this->assertNotEmpty($checkInscription2);

        //mail déjà pris et pseudo correct
        $checkInscription4 = $db->callProcedure('checkInscription',[$mailInvalide,$matriculeCorrect]);
        $this->assertNotEmpty($checkInscription4);

        //mail déjà pris et pseudo déjà pris
        $checkInscription3 = $db->callProcedure('checkInscription',[$mailInvalide,$matriculeIncorrect]);
        $this->assertNotEmpty($checkInscription3);

    }
}