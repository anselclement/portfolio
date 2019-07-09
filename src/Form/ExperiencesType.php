<?php

namespace App\Form;

use App\Entity\Experiences;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ExperiencesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('DateDebut', DateType::class, array(
                'widget' => 'choice',
                'years' => range(date('2000'), date('Y')+100),
                'months' => range(date('m'), 12),
                'days' => range(date('d'), 31),
              ))
            ->add('DateFin', DateType::class, array(
                'widget' => 'choice',
                'years' => range(date('Y'), date('Y')+100),
                'months' => range(date('m'), 12),
                'days' => range(date('d'), 31),
              ))
            ->add('description', TextType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Experiences::class,
        ]);
    }
}
