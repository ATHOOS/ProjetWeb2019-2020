<?php

use PHPUnit\Framework\TestCase;

include 'SITE/assets/php/dbAccess.php';

class atelierUserTest extends TestCase {

    public function testSomething() {
        
        $idAtelierInvalide = "test";
        $idAtelierValide = "22";
        
        $matriculeCorrect = "HE201587";
        $matriculeIncorrect = "HE111112";

        $db = new dbAccess();


        //idAtelier et matricule correct
        $checkAtelierUser1 = $db->callProcedure('checkAtelierUser',[$idAtelierValide,$matriculeCorrect]);
        $this->assertNotEmpty($checkAtelierUser1);

        //idAtelier correct et matricule déjà pris
        $checkAtelierUser2 = $db->callProcedure('checkAtelierUser',[$idAtelierValide,$matriculeIncorrect]);
        $this->assertEmpty($checkAtelierUser2);

        //idAtelier déjà pris et matricule correct
        $checkAtelierUser4 = $db->callProcedure('checkAtelierUser',[$idAtelierInvalide,$matriculeCorrect]);
        $this->assertEmpty($checkAtelierUser4);

        //idAtelier déjà pris et matricule déjà pris
        $checkAtelierUser3 = $db->callProcedure('checkAtelierUser',[$idAtelierInvalide,$matriculeIncorrect]);
        $this->assertEmpty($checkAtelierUser3);

    }
}