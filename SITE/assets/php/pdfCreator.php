<?php
require('../fpdf182/fpdf.php');
include 'dbAccess.php';
$db = new dbAccess();
$recupUnAtelier = $db->callProcedure("recupUnAtelier",[$_GET['id']]);


class PDF extends FPDF
{

    // En-tête
    function Header()
    {
        // Logo
        $this->Image('../img/ephec.png', 10, 6, 30);
        // Police Arial gras 15
        $this->SetFont('Arial', 'B', 15);
        // Titre
        $this->Cell(0, 10, 'Contrat', 'B', 0, 'C');
        // Saut de ligne
        $this->Ln(20);
    }

    // Pied de page
    function Footer()
    {
        // Positionnement à 1,5 cm du bas
        $this->SetY(-15);
        // Police Arial italique 8
        $this->SetFont('Arial', 'I', 8);
        // Numéro de page
        $this->Cell(0, 10, 'Page ' . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}

// Instanciation de la classe dérivée
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
$pdf->Cell(0,10,$recupUnAtelier[0]{'nom'},0,1);
$pdf->Cell(0,10,$recupUnAtelier[0]{'description'},0,1);
$pdf->Cell(0,10,$recupUnAtelier[0]{'date'},0,1);
$pdf->Cell(0,10,$recupUnAtelier[0]{'animateur'},0,1);
$pdf->Cell(0,10,$recupUnAtelier[0]{'sujet'},0,1);

$pdf->Output('I','contrat'.$recupUnAtelier[0]{'animateur'}.'.pdf');
