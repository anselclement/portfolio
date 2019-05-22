<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage()
    {
        return $this->render('base.html.twig', []);
    }
}