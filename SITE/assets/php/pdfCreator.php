<?php
require('../fpdf182/fpdf.php');
include 'dbAccess.php';
$db = new dbAccess();
$recupUnAtelier = $db->callProcedure("recupUnAtelier",[$_GET['id']]);


$titre = 'Contrat de travail de : ' . $recupUnAtelier[0]{'animateur'};

$date = 'Le présent contrat prend cours le ' . $recupUnAtelier[0]{'date'} . '.';

$activite = "L'employeur engage l'étudiant en qualité de jobiste en vu d'effectuer la tâche suivante : Animation de l'atelier :" . $recupUnAtelier[0]{'nom'} . ".";

class PDF extends FPDF
{

    // En-tête
    function Header()
    {
        $db = new dbAccess();
        $recupUnAtelier = $db->callProcedure("recupUnAtelier",[$_GET['id']]);
        $titre = iconv('UTF-8', 'windows-1252','Contrat de travail de : ' . $recupUnAtelier[0]{'nomAnimateur'} . " " . $recupUnAtelier[0]{'prenom'});
        // Logo
        $this->Image('../img/ephec.png', 10, 15, 30);
        // Police Arial gras 15
        $this->SetFont('Arial', 'B', 18);
        // Titre
        $this->Cell(0, 30, utf8_decode($titre) , 'B', 0, 'C');
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


$pdf->SetXY(10,60); // abscissa of Horizontal position 
$pdf->SetFont('Times','B',12);
$pdf->MultiCell(95, 6, 'Client :', 0, 'L', FALSE);
$pdf->SetFont('Times','',12);
$pdf->MultiCell(95, 6, 'EPHEC ASBL', 0, 'L', FALSE);
$pdf->MultiCell(95, 6, 'Avenue Konrad Adenauer 3', 0, 'L', FALSE);
$pdf->MultiCell(95, 6, '1200 Woluwe-Saint-Lambert', 0, 'L', FALSE);
$pdf->MultiCell(95, 6, 'Belgium', 0, 'L', FALSE);
$pdf->SetXY(105,58); // abscissa of Horizontal position 
$pdf->SetFont('Times','B',12);
$pdf->MultiCell(95,10,'Prestataire :',0,'R',false);
$pdf->SetFont('Times','',12);
$pdf->SetXY(105,63); // abscissa of Horizontal position 
$nomPrenom = utf8_decode($recupUnAtelier[0]{'nomAnimateur'} . " " . $recupUnAtelier[0]{'prenom'});
$pdf->MultiCell(95,10,utf8_decode($nomPrenom),0,'R',false);
$pdf->SetXY(105,68);
$pdf->MultiCell(95,10,utf8_decode($recupUnAtelier[0]{'animateur'}),0,'R',false);
$pdf->SetXY(105,73);
$pdf->MultiCell(95,10,utf8_decode($recupUnAtelier[0]{'mail'}),0,'R',false);

$pdf->SetXY(10,100);
$pdf->SetFont('Times','B',15);
$pdf->Cell(190, 10, 'Engagement', 'B', 0, 'C');
$pdf->SetFont('Times','',12);
$pdf->SetXY(10,110);
$pdf->Cell(190, 10, utf8_decode($date), '', 0, False);
$pdf->SetXY(10,120);
$pdf->Cell(190, 10, utf8_decode($activite), '', 0, False);


$pdf->Output('I','contrat'.$recupUnAtelier[0]{'animateur'}.'.pdf');
