<?php

namespace App\Controller\Admin\APropos;

use App\Entity\APropos;
use App\Entity\Hobbies;
use App\Form\AProposType;
use App\Form\HobbiesType;
use App\Repository\HobbiesRepository;
use App\Repository\AProposRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class AProposController extends AbstractController
{

    /**
     * @var HobbiesRepository
     */
    private $hobbiesRepository;

    /**
     * @var AProposRepository
     */
    private $repository;

    /**
     * @param AProposRepository $repository
     */
    public function __construct(AProposRepository $repository, HobbiesRepository $hobbiesRepository, ObjectManager $em)
    {
        $this->repository = $repository;
        $this->em = $em;
        $this->hobbiesRepository = $hobbiesRepository;
    }

    /**
     * @Route("/admin/Apropos", name="aProposAdmin")
     */
    public function index()
    {
        $apropos = $this->repository->findAll();
        $allhobbies = $this->hobbiesRepository->findAll();
        $aproposId = $this->repository->findAPropos();

        return $this->render('admin/APropos/Apropos.html.twig', [
            'apropos' => $apropos,
            'hobbies' => $allhobbies,
            'aproposId' => $aproposId
        ]);
    }

    /**
     * @Route ("/admin/Apropos/{id}", name="aProposAdmin.edition", methods="GET|POST")
     * @param APropos $apropos
     * @param Request $request
     */
    public function edit(APropos $apropos,Request $request)
    {
        $form = $this->createForm(AProposType::class, $apropos);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            $this->addFlash('succes', 'Modification bien enregistrées');
            return $this->redirectToRoute('aProposAdmin');

        }
        
        return $this->render('admin/APropos/edit.html.twig', [
            'apropos' => $apropos,
            'form' => $form->createView()
        ]);
    }

    /**
     *@Route ("/admin/Apropos/{id}/createhobbies", name="aProposAdmin.createhobbies")
     */
    public function newHobbies(Request $request, APropos $apropos)
    {
        $hobbies = new Hobbies();
        $formHobbies = $this->createForm(HobbiesType::class, $hobbies);
        $formHobbies->handleRequest($request);

        if($formHobbies->isSubmitted() && $formHobbies->isValid()) {
            $hobbies->setApropos($apropos);
            $this->em->persist($hobbies);
            $this->em->flush();
            $this->addFlash('succes', 'Nouvel icône bien crée');
            return $this->redirectToRoute('aProposAdmin');
        }
        
        return $this->render('admin/APropos/newHobbies.html.twig', [
            'hobbies' => $hobbies,
            'formhobbies' => $formHobbies->createView()
        ]);
    }

    /**
     *@Route ("/admin/Apropos/edithobbies/{id}", name="aProposAdmin.edithobbies", methods="GET|POST")
     */
    public function editHobbies(Hobbies $hobbies, Request $request)
    {
        $formHobbies = $this->createForm(HobbiesType::class, $hobbies);
        $formHobbies->handleRequest($request);

        if($formHobbies->isSubmitted() && $formHobbies->isValid()) {
            $this->em->flush();
            $this->addFlash('succes', 'Modification bien enregistrées');
            return $this->redirectToRoute('aProposAdmin');
        }
        
        return $this->render('admin/APropos/editHobbies.html.twig', [
            'hobbies' => $hobbies,
            'formhobbies' => $formHobbies->createView()
        ]);
    }

    /**
     * @Route ("/admin/Apropos/edithobbies/{id}", name="aProposAdmin.deletehobbies", methods="DELETE")
     */
    public function deleteHobbies(Hobbies $hobbies)
    {
        $this->em->remove($hobbies);
        $this->em->flush();
        $this->addFlash('succes', 'Suppression réussies');
        return $this->redirectToRoute('aProposAdmin');
    }

    /**
     * @Route("/AproposJSON", methods={"GET"})
     */
    public function transformFormatJson(AProposRepository $aProposRepository, SerializerInterface $serializer){


        $apropos = $aProposRepository->findAll();
        $encoder = new JsonEncoder();
        $normalizer = new GetSetMethodNormalizer();
        $normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });

        $serializer = new Serializer(array($normalizer), array($encoder));
        $data = $serializer->serialize($apropos, 'json');

        return new Response($data,200,[
            'Content-type' => 'application/json'
        ]);
    }

    /**
     * @Route("/hobbiesJSON", methods={"GET"})
     */
    public function transformHobbiesFormatJson(HobbiesRepository $hobbiesRepository, SerializerInterface $serializer){


        $hobbies = $hobbiesRepository->findAll();
        $encoder = new JsonEncoder();
        $normalizer = new GetSetMethodNormalizer();
        $normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });

        $serializer = new Serializer(array($normalizer), array($encoder));
        $icon = $serializer->serialize($hobbies, 'json');

        return new Response($icon,200,[
            'Content-type' => 'application/json'
        ]);
    }


}