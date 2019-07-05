<?php

namespace App\Controller\Admin\Cv;

use App\Repository\HobbiesRepository;
use App\Repository\AProposRepository;
use App\Repository\CompetencesRepository;
use App\Repository\ExperiencesRepository;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Dompdf\Dompdf;
use Dompdf\Options;


class CvController extends AbstractController{

    /**
     * @var HobbiesRepository
     */
    private $hobbiesRepository;

    /**
     * @var AProposRepository
     */
    private $repository;

    /**
     * @var CompetencesRepository
     */
    private $competencesRepository;

    /**
     * @var ExperiencesRepository
     */
    private $experiencesRepository;

    /**
     * @param AProposRepository $repository
     */
    public function __construct(AProposRepository $repository, HobbiesRepository $hobbiesRepository, CompetencesRepository $competencesRepository, ExperiencesRepository $experiencesRepository, ObjectManager $em)
    {
        $this->repository = $repository;
        $this->em = $em;
        $this->hobbiesRepository = $hobbiesRepository;
        $this->experiencesRepository = $experiencesRepository;
        $this->competencesRepository = $competencesRepository;
    }

    /**
     * @Route("/cv", name="cvAdmin")
     */
    public function index()
    {
        $apropos = $this->repository->findAPropos();
        $allhobbies = $this->hobbiesRepository->findAll();
        $competences = $this->competencesRepository->findAll();
        $experiences = $this->experiencesRepository->findAll();


        $pdfOptions = new Options();
        $pdfOptions->set('defaultFont', 'Arial');

        $dompdf = new Dompdf($pdfOptions);

        $html = $this->renderView('admin/Cv/cv.html.twig', [
            'apropos' => $apropos,
            'hobbies' => $allhobbies,
            'competences' => $competences,
            'experiences' => $experiences,
        ]);

        $html .= '<link type="text/css" media="dompdf" href="/assets/css/scss/Admin/pdf.css" rel="stylesheet" />';

        $dompdf->loadHtml($html);

        $dompdf->setPaper('A4', 'portrait');

        $dompdf->render();

        $dompdf->stream("cv.pdf", [
            "Attachment" => false
        ]);
    }
}