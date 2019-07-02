<?php

namespace App\Controller\Admin\Cv;

;
use App\Repository\HobbiesRepository;
use App\Repository\AProposRepository;
use App\Repository\CompetencesRepository;
use App\Repository\ExperiencesRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


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
        $apropos = $this->repository->findAll();
        $allhobbies = $this->hobbiesRepository->findAll();
        $competences = $this->competencesRepository->findAll();
        $experiences = $this->experiencesRepository->findAll();

        return $this->render('admin/Cv/cv.html.twig', [
            'apropos' => $apropos,
            'hobbies' => $allhobbies,
            'competences' => $competences,
            'experiences' => $experiences
        ]);
    }

    public function transformToPDF(){

    }

}