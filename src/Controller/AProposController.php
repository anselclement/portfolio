<?php

namespace App\Controller;

use App\Entity\APropos;
use App\Repository\AProposRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;



class AProposController extends AbstractController
{

    /**
     * @Route("dashboard/AproposJSON", methods={"GET"})
     */
    public function index(AProposRepository $aProposRepository, SerializerInterface $serializer){

        $apropos = $aProposRepository->findAll();
        $data = $serializer->serialize($apropos, 'json');

        return new Response($data,200,[
            'Content-type' => 'application/json'
        ]);
    }

    /**
     * @Route("/dashboard/Apropos")
     */
    public function view()
    {
        return $this->render('APropos/Apropos.html.twig', []);
    }


}