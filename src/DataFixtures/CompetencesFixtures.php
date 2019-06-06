<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Competences;

class CompetencesFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $competences = new Competences();
        $competences->setLanguage('HTML5');
        $competences->setPercentage(33);
        $competences->setColor('blue');
        $manager->persist($competences);

        $manager->flush();
    }
}
