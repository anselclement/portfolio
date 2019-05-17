<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    /**
     * @Route("/dashboard")
     */
    public function view()
    {
        return $this->render('dashboard.html.twig', []);
    }
}