<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    /**
     * @Route("/dashboard")
     */
    public function view()
    {
        return $this->render('admin/dashboard.html.twig', []);
    }
}