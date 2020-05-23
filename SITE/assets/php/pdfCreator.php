<?php
session_start();
require('../fpdf182/fpdf.php');

include 'dbAccess.php';
$db = new dbAccess();
$recupUnAtelier = $db->callProcedure("recupUnAtelier",[$_GET['id']]);


$titre = 'Contrat de travail de : ' . $recupUnAtelier[0]['animateur'];

$date = 'Le présent contrat prend cours le ' . $recupUnAtelier[0]['date'] . '.';

$activite =  "Animation de l'atelier : " . $recupUnAtelier[0]['nom'] . ".";

$duree = "L'étudiant s'engage à prester " . $recupUnAtelier[0]['duree'] . " pour l'atelier précédemment cité.";

$dateGeneration = "Fait en double exemplaires le " . date('d/m/Y') . '.';

$nomSignature = $_SESSION['nom'] . ' ' . $_SESSION['prenom'];

class PDF extends FPDF
{

    // En-tête
    function Header()
    {
        $db = new dbAccess();
        $recupUnAtelier = $db->callProcedure("recupUnAtelier",[$_GET['id']]);
        $titre1 = utf8_decode('Contrat de travail de : ' . $recupUnAtelier[0]['nomAnimateur'] . " " . $recupUnAtelier[0]['prenom']);
        // Logo
        $this->Image('../img/ephec.png', 10, 15, 30);
        // Police Arial gras 15
        $this->SetFont('Arial', 'B', 18);
        // Titre
        $this->Cell(0, 30, $titre1 , 'B', 0, 'C');
        // Saut de ligne
        $this->Ln(20);
    }

    
}

// Instanciation de la classe dérivée
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();


$pdf->SetXY(10,50); // abscissa of Horizontal position 
$pdf->SetFont('Times','B',12);
$pdf->MultiCell(95, 6, 'Client :', 0, 'L', FALSE);
$pdf->SetFont('Times','',12);
$pdf->MultiCell(95, 6, 'EPHEC ASBL', 0, 'L', FALSE);
$pdf->MultiCell(95, 6, 'Avenue Konrad Adenauer 3', 0, 'L', FALSE);
$pdf->MultiCell(95, 6, '1200 Woluwe-Saint-Lambert', 0, 'L', FALSE);
$pdf->MultiCell(95, 6, 'Belgium', 0, 'L', FALSE);
$pdf->SetXY(105,48); // abscissa of Horizontal position 
$pdf->SetFont('Times','B',12);
$pdf->MultiCell(95,10,'Prestataire :',0,'R',false);
$pdf->SetFont('Times','',12);
$pdf->SetXY(105,53); // abscissa of Horizontal position 
$nomPrenom = utf8_decode($recupUnAtelier[0]['nomAnimateur'] . " " . $recupUnAtelier[0]['prenom']);
$pdf->MultiCell(95,10,$nomPrenom,0,'R',false);
$pdf->SetXY(105,58);
$pdf->MultiCell(95,10,utf8_decode($recupUnAtelier[0]['animateur']),0,'R',false);
$pdf->SetXY(105,63);
$pdf->MultiCell(95,10,utf8_decode($recupUnAtelier[0]['mail']),0,'R',false);

$pdf->SetXY(10,80);
$pdf->SetFont('Times','B',15);
$pdf->Cell(190, 10, 'Engagement', 'B', 0, 'C');
$pdf->SetFont('Times','',12);
$pdf->SetXY(10,90);
$pdf->Cell(190, 10, utf8_decode($date), '', 0, False);
$pdf->SetXY(10,100);
$pdf->Cell(190,10, utf8_decode("L'employeur engage l'étudiant en qualité de jobiste en vu d'effectuer la tâche suivante :"), '', 0, False);
$pdf->SetXY(10,110);
$pdf->SetFont('Times','B',12);
$pdf->Cell(190, 10, utf8_decode($activite), '', 0, False);
$pdf->SetFont('Times','',12);

$pdf->SetXY(10,120);
$pdf->SetFont('Times','B',15);
$pdf->Cell(190, 10, 'Duree de prestations', 'B', 0, 'C');
$pdf->SetFont('Times','',12);
$pdf->SetXY(10,130);
$pdf->Cell(190, 10, utf8_decode($duree), '', 0, False);

$pdf->SetXY(10,140);
$pdf->SetFont('Times','B',15);
$pdf->Cell(190, 10, utf8_decode('Rémunérations'), 'B', 0, 'C');
$pdf->SetFont('Times','',12);
$pdf->SetXY(10, 150);
$pdf->Cell(190,10, utf8_decode("La rémunération est fixée à ................... euros par heure."), '', 0, False);
$pdf->SetXY(10, 160);
$pdf->Cell(190,10, utf8_decode("Le paiement de la rémunération se fera le ....................."), '', 0, False);
$pdf->SetXY(10, 170);
$pdf->Cell(190,10, utf8_decode("au compte bancaire IBAN : BE ...................................... BIC : ................. ouvert au nom de l'étudiant."), '', 0, False);

$pdf->SetXY(10, 190);
$pdf->Cell(190,10, utf8_decode("L'étudiant déclare avoir pris connaissance du règlement du travail qui constitue une annexe au présent contrat et"), '', 0, False);
$pdf->SetXY(10, 195);
$pdf->Cell(190,10, utf8_decode("en accepter les clauses et conditions sous réserve de celles qui seraient devenus caduques en vertu de dispositions"), '', 0, False);
$pdf->SetXY(10, 200);
$pdf->Cell(190,10, utf8_decode("légales impératives. L'étudiant reconnaît avoir reçu un exemplaire du présent contrat."), '', 0, False);
$pdf->SetXY(10, 210);
$pdf->Cell(190,10, utf8_decode("L'étudiant reconnait avoir reçu une copie signé du présent contrat. Il s'engage à en respecter toutes les conditions."), '', 0, False);
$pdf->SetXY(10, 220);
$pdf->Cell(190,10, utf8_decode($dateGeneration), '', 0, False);

$pdf->SetXY(50, 235);
$pdf->MultiCell(55, 6, 'Signature', 0, '', FALSE);
$pdf->SetXY(50, 240);
$pdf->SetFont('Times','B',12);
$pdf->MultiCell(55, 6, utf8_decode($nomSignature), 0, '', FALSE);
$pdf->SetFont('Times','',12);
$pdf->SetXY(50, 265);
$pdf->MultiCell(55, 6, 'Employeur', 0, '', FALSE);

$pdf->SetXY(135,235);
$pdf->MultiCell(55, 6, 'Signature', 0, '', FALSE);
$pdf->SetXY(135, 240);
$pdf->SetFont('Times','B',12);
$pdf->MultiCell(55, 6, $nomPrenom, 0, '', FALSE);
$pdf->SetFont('Times','',12);
$pdf->SetXY(135, 265);
$pdf->MultiCell(55, 6, 'Etudiant', 0, '', FALSE);


$pdf->Output('I','contrat'.$recupUnAtelier[0]['animateur'].'.pdf');
