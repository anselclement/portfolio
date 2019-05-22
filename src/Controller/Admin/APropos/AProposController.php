<?php

namespace App\Controller\Admin\APropos;

use App\Entity\APropos;
use App\Repository\AProposRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use App\Form\AProposType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;

class AProposController extends AbstractController
{

    /**
     * @var AProposRepository
     */
    private $repository;

    /**
     * @param AProposRepository $repository
     */
    public function __construct(AProposRepository $repository, ObjectManager $em)
    {
        $this->repository = $repository;
        $this->em = $em;
    }

    /**
     * @Route("/dashboard/Apropos", name="aProposAdmin")
     */
    public function index()
    {
        $apropos = $this->repository->findAll();

        return $this->render('admin/APropos/Apropos.html.twig', [
            'apropos' => $apropos
        ]);
    }

    /**
     * @Route ("/dashboard/Apropos/{id}", name="aProposAdmin.edition", methods="GET|POST")
     * @param APropos $apropos
     * @param Request $request
     */
    public function edit(APropos $apropos,Request $request)
    {
        $form = $this->createForm(AProposType::class, $apropos);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            return $this->redirectToRoute('aProposAdmin');

        }

        return $this->render('admin/APropos/edit.html.twig', [
            'apropos' => $apropos,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route ("/dashboard/Apropos/{id}", name="aProposAdmin.edition", methods="DELETE")
     * @param APropos $apropos
    */ 
    public function delete(APropos $apropos)
    {
        $this->em->remove($apropos);
        $this->em->flush();
        return $this->redirectToRoute('aProposAdmin');
    }

    /**
     * @Route("dashboard/AproposJSON", methods={"GET"})
     */
    public function transformFormatJson(AProposRepository $aProposRepository, SerializerInterface $serializer){


        $apropos = $aProposRepository->findAll();
        $data = $serializer->serialize($apropos, 'json');

        return new Response($data,200,[
            'Content-type' => 'application/json'
        ]);
    }

    


}