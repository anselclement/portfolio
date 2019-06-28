<?php

namespace App\Controller\Admin\Portfolio;

use App\Entity\Portfolio;
use App\Entity\Tag;
use App\Form\PortfolioType;
use App\Form\TagType;
use App\Repository\PortfolioRepository;
use App\Repository\TagRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

class PortfolioController extends AbstractController
{

    /**
     * @var PortfolioRepository
     */
    private $repository;

    /**
     * @param PortfolioRepository $repository
     */
    public function __construct(PortfolioRepository $repository, TagRepository $tagRepository, ObjectManager $em)
    {
        $this->repository = $repository;
        $this->em = $em;
        $this->tagRepository = $tagRepository;
    }

    /**
     * @Route("/admin/Portfolio", name="PortfolioAdmin")
     */
    public function index()
    {
        $portfolio = $this->repository->findAll();
        $tag = $this->tagRepository->findAll();

        return $this->render('admin/Portfolio/Portfolio.html.twig', [
            'portfolio' => $portfolio,
            'tag' => $tag
        ]);
    }

    /**
     * @Route ("/admin/Portfolio/editportfolio/{id}", name="PortfolioAdmin.editportfolio", methods="GET|POST")
     * @param Portfolio $portfolio
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
     *@Route ("/admin/Portfolio/createportfolio", name="PortfolioAdmin.createportfolio")
     */
    public function newPortfolio(Request $request)
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
     * @Route ("/admin/Portfolio/edittag/{id}", name="TagAdmin.edittag", methods="GET|POST")
     * @param Tag $tag
     * @param Request $request
     */
    public function editTag(Tag $tag,Request $request)
    {
        $formTag = $this->createForm(TagType::class, $tag);
        $formTag->handleRequest($request);

        if($formTag->isSubmitted() && $formTag->isValid()) {
            $this->em->flush();
            $this->addFlash('succes', 'Modification bien enregistrées');
            return $this->redirectToRoute('PortfolioAdmin');

        }
        
        return $this->render('admin/Portfolio/editTag.html.twig', [
            'tag' => $tag,
            'formTag' => $formTag->createView()
        ]);
    }

    /**
     *@Route ("/admin/Portfolio/createtag/", name="TagAdmin.createtag")
     */
    public function newTag(Request $request)
    {
        $tag = new Tag();
        $formTag = $this->createForm(TagType::class, $tag);
        $formTag->handleRequest($request);

        if($formTag->isSubmitted() && $formTag->isValid()) {
            $this->em->persist($tag);
            $this->em->flush();
            $this->addFlash('succes', 'Nouvel icône bien crée');
            return $this->redirectToRoute('PortfolioAdmin');
        }
        
        return $this->render('admin/Portfolio/newTag.html.twig', [
            'tag' => $tag,
            'formTag' => $formTag->createView()
        ]);
    }

    /**
     * @Route ("/admin/Portfolio/edittag/{id}", name="TagAdmin.deletetag", methods="DELETE")
     */
    public function deleteTag(Tag $tag)
    {
        $this->em->remove($tag);
        $this->em->flush();
        $this->addFlash('succes', 'Suppression réussies');
        return $this->redirectToRoute('PortfolioAdmin');
    }

    /**
     * @Route("/portfolioJSON", methods={"GET"})
     */
    public function transformFormatJson(PortfolioRepository $portfolioRepository, SerializerInterface $serializer){


        $portfolio = $portfolioRepository->findAll();
        $encoder = new JsonEncoder();
        $normalizer = new GetSetMethodNormalizer();
        $normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });

        $serializer = new Serializer(array($normalizer), array($encoder));

        $data = $serializer->serialize($portfolio, 'json');

        return new Response($data,200,[
            'Content-type' => 'application/json'
        ]);
    }

     /**
     * @Route("/tagJSON", methods={"GET"})
     */
    public function transformTagFormatJson(TagRepository $tagRepository, SerializerInterface $serializer){


        $tag = $tagRepository->findAll();
        $encoder = new JsonEncoder();
        $normalizer = new GetSetMethodNormalizer();
        $normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });

        $serializer = new Serializer(array($normalizer), array($encoder));
        $icon = $serializer->serialize($tag, 'json');

        return new Response($icon,200,[
            'Content-type' => 'application/json'
        ]);
    }
}