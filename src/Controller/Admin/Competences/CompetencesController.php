<?php

namespace App\Controller\Admin\Competences;

use App\Entity\Competences;
use App\Form\CompetencesType;
use App\Repository\CompetencesRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class CompetencesController extends AbstractController
{

    /**
     * @var CompetencesRepository
     */
    private $repository;

    /**
     * @param CompetencesRepository $repository
     */
    public function __construct(CompetencesRepository $repository, ObjectManager $em)
    {
        $this->repository = $repository;
        $this->em = $em;
    }

    /**
     * @Route("/admin/Competences", name="CompetencesAdmin")
     */
    public function index()
    {
        $competences = $this->repository->findAll();
        return $this->render('admin/Competences/Competences.html.twig', [
            'competences' => $competences
        ]);
    }

    /**
     * @Route ("/admin/Competences/editcompetences/{id}", name="CompetencesAdmin.editcompetences", methods="GET|POST")
     * @param Competences $competences
     * @param Request $request
     */
    public function editCompetences(Competences $competences,Request $request)
    {
        $formcompetences = $this->createForm(CompetencesType::class, $competences);
        $formcompetences->handleRequest($request);

        if($formcompetences->isSubmitted() && $formcompetences->isValid()) {
            $this->em->flush();
            $this->addFlash('succes', 'Modification bien enregistrées');
            return $this->redirectToRoute('CompetencesAdmin');
            
        }
        
        return $this->render('admin/Competences/editCompetences.html.twig', [
            'competences' => $competences,
            'formcompetences' => $formcompetences->createView()
        ]);
    }

    /**
     *@Route ("/admin/Competences/createcompetences/", name="CompetencesAdmin.createcompetences")
     */
    public function newCompetences(Request $request)
    {
        $competences = new Competences();
        $formcompetences = $this->createForm(CompetencesType::class, $competences);
        $formcompetences->handleRequest($request);

        if($formcompetences->isSubmitted() && $formcompetences->isValid()) {
            $this->em->persist($competences);
            $this->em->flush();
            $this->addFlash('succes', 'Nouvel icône bien crée');
            return $this->redirectToRoute('CompetencesAdmin');
        }
        
        return $this->render('admin/Competences/newCompetences.html.twig', [
            'competences' => $competences,
            'formcompetences' => $formcompetences->createView()
        ]);
    }

    /**
     * @Route ("/admin/Competences/editcompetences/{id}", name="CompetencesAdmin.deletecompetences", methods="DELETE")
     */
    public function deleteCompetences(Competences $competences)
    {
        $this->em->remove($competences);
        $this->em->flush();
        $this->addFlash('succes', 'Suppression réussies');
        return $this->redirectToRoute('CompetencesAdmin');
    }

    /**
     * @Route("/competencesJSON", methods={"GET"})
     */
    public function transformFormatJson(CompetencesRepository $CompetencesRepository, SerializerInterface $serializer){


        $competences = $CompetencesRepository->findAll();

        $data = $serializer->serialize($competences, 'json');

        return new Response($data,200,[
            'Content-type' => 'application/json'
        ]);
    }
}