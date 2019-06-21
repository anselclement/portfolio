<?php

namespace App\Controller\Admin\Portfolio;

use App\Entity\Portfolio;
use App\Form\PortfolioType;
use App\Repository\PortfolioRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PortfolioController extends AbstractController
{

    /**
     * @var PortfolioRepository
     */
    private $repository;

    /**
     * @param PortfolioRepository $repository
     */
    public function __construct(PortfolioRepository $repository, ObjectManager $em)
    {
        $this->repository = $repository;
        $this->em = $em;
    }

    /**
     * @Route("/admin/Portfolio", name="PortfolioAdmin")
     */
    public function index()
    {
        $portfolio = $this->repository->findAll();//Créer sa propre méthode pour avoir un seul résultat

        return $this->render('admin/Portfolio/Portfolio.html.twig', [
            'portfolio' => $portfolio
        ]);
    }

    /**
     * @Route ("/admin/Portfolio/editportfolio/{id}", name="PortfolioAdmin.editportfolio", methods="GET|POST")
     * @param Experiences $portfolio
     * @param Request $request
     */
    public function editPortfolio(Portfolio $portfolio,Request $request)
    {
        $formportfolio = $this->createForm(PortfolioType::class, $portfolio);
        $formportfolio->handleRequest($request);

        if($formportfolio->isSubmitted() && $formportfolio->isValid()) {
            $this->em->flush();
            $this->addFlash('succes', 'Modification bien enregistrées');
            return $this->redirectToRoute('PortfolioAdmin');

        }
        
        return $this->render('admin/Portfolio/editPortfolio.html.twig', [
            'portfolio' => $portfolio,
            'formportfolio' => $formportfolio->createView()
        ]);
    }

    /**
     *@Route ("/admin/Portfolio/createportfolio/{id}", name="PortfolioAdmin.createportfolio")
     */
    public function newPortfolio(Request $request, Portfolio $portfolio)
    {
        $portfolio = new Portfolio();
        $formportfolio = $this->createForm(PortfolioType::class, $portfolio);
        $formportfolio->handleRequest($request);

        if($formportfolio->isSubmitted() && $formportfolio->isValid()) {
            $this->em->persist($portfolio);
            $this->em->flush();
            $this->addFlash('succes', 'Nouvel icône bien crée');
            return $this->redirectToRoute('PortfolioAdmin');
        }
        
        return $this->render('admin/Portfolio/newPortfolio.html.twig', [
            'portfolio' => $portfolio,
            'formportfolio' => $formportfolio->createView()
        ]);
    }

    /**
     * @Route ("/admin/Portfolio/editportfolio/{id}", name="PortfolioAdmin.deleteportfolio", methods="DELETE")
     */
    public function deletePortfolio(Portfolio $portfolio)
    {
        $this->em->remove($portfolio);
        $this->em->flush();
        $this->addFlash('succes', 'Suppression réussies');
        return $this->redirectToRoute('PortfolioAdmin');
    }

    /**
     * @Route("/portfolioJSON", methods={"GET"})
     */
    public function transformFormatJson(PortfolioRepository $portfolioRepository, SerializerInterface $serializer){


        $portfolio = $portfolioRepository->findAll();

        $data = $serializer->serialize($portfolio, 'json');

        return new Response($data,200,[
            'Content-type' => 'application/json'
        ]);
    }
}