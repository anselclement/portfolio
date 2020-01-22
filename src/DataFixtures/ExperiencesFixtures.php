<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Experiences;

class ExperiencesFixtures extends Fixture 
{
    public function load(ObjectManager $manager)
    {
        $experiences = new Experiences();
        $experiences->setDescription('Parcours Développeur Web - OpenClassRoom');
        $manager->persist($experiences);

        $manager->flush();
    }
}
