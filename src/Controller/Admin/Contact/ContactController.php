<?php

namespace App\Controller\Admin\Contact;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpFoundation\Response;
use App\Form\ContactType;
use Swift_Mailer;
use Swift_Message;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="ContactAdmin", options={"expose" = true})
     * @Method("POST")
     */
    public function newMail(Request $request, Swift_Mailer $mailer)
    {
/*$data = json_decode($request->getContent(), true);
        var_dump($data);die;
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $form = $this->createForm(ContactType::class, null, [
            'csrf_protection' => false,
        ]);

        $form->submit($data);
        if (!$form->isValid()) {
            throw new BadRequestHttpException('Donnée du mail invalide');
        }else{

            $message = (new Swift_Message('Nouveau Mail'))
            ->setFrom($data->mail)
            ->setTo('clement.ansel14@gmail.com')
            ->setBody(
                $this->renderView(
                    'Admin/Contact/contact.html.twig',
                    ['nom' => $data->nom,
                     'prenom' => $data->prenom,
                     'mail' => $data->mail,
                     'message' => $data->message    
                    ]
                ),
                'text/html'
            );

        $mailer->send($message);
        }*/

       
    }

}