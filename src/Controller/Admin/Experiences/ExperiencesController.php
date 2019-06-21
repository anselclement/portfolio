<?php

namespace App\Controller\Admin\Experiences;

use App\Entity\Experiences;
use App\Form\ExperiencesType;
use App\Repository\ExperiencesRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ExperiencesController extends AbstractController
{

    /**
     * @var ExperiencesRepository
     */
    private $repository;

    /**
     * @param ExperiencesRepository $repository
     */
    public function __construct(ExperiencesRepository $repository, ObjectManager $em)
    {
        $this->repository = $repository;
        $this->em = $em;
    }

    /**
     * @Route("/admin/Experiences", name="ExperiencesAdmin")
     */
    public function index()
    {
        $experiences = $this->repository->findAll();//Créer sa propre méthode pour avoir un seul résultat

        return $this->render('admin/Experiences/Experiences.html.twig', [
            'experiences' => $experiences
        ]);
    }

    /**
     * @Route ("/admin/Experiences/editexperiences/{id}", name="ExperiencesAdmin.editexperiences", methods="GET|POST")
     * @param Experiences $experiences
     * @param Request $request
     */
    public function editExperiences(Experiences $experiences,Request $request)
    {
        $formexperiences = $this->createForm(ExperiencesType::class, $experiences);
        $formexperiences->handleRequest($request);

        if($formexperiences->isSubmitted() && $formexperiences->isValid()) {
            $this->em->flush();
            $this->addFlash('succes', 'Modification bien enregistrées');
            return $this->redirectToRoute('ExperiencesAdmin');

        }
        
        return $this->render('admin/Experiences/editExperiences.html.twig', [
            'experiences' => $experiences,
            'formexperiences' => $formexperiences->createView()
        ]);
    }

    /**
     *@Route ("/admin/Experiences/createexperiences/", name="ExperiencesAdmin.createexperiences")
     */
    public function newExperiences(Request $request)
    {
        $experiences = new Experiences();
        $formexperiences = $this->createForm(ExperiencesType::class, $experiences);
        $formexperiences->handleRequest($request);

        if($formexperiences->isSubmitted() && $formexperiences->isValid()) {
            $this->em->persist($experiences);
            $this->em->flush();
            $this->addFlash('succes', 'Nouvel icône bien crée');
            return $this->redirectToRoute('ExperiencesAdmin');
        }
        
        return $this->render('admin/Experiences/newExperiences.html.twig', [
            'experiences' => $experiences,
            'formexperiences' => $formexperiences->createView()
        ]);
    }

    /**
     * @Route ("/admin/Experiences/editexperiences/{id}", name="ExperiencesAdmin.deleteexperiences", methods="DELETE")
     */
    public function deleteExperiences(Experiences $experiences)
    {
        $this->em->remove($experiences);
        $this->em->flush();
        $this->addFlash('succes', 'Suppression réussies');
        return $this->redirectToRoute('ExperiencesAdmin');
    }

    /**
     * @Route("/experiencesJSON", methods={"GET"})
     */
    public function transformFormatJson(ExperiencesRepository $ExperiencesRepository, SerializerInterface $serializer){


        $experiences = $ExperiencesRepository->findAll();

        $data = $serializer->serialize($experiences, 'json');

        return new Response($data,200,[
            'Content-type' => 'application/json'
        ]);
    }
}