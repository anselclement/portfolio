<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompetencesRepository")
 */
class Competences
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(
     *      message = "Le contenu ne peut pas être vide !")
     */
    private $language;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank(
     *      message = "Le contenu ne peut pas être vide !")
     * @Assert\LessThanOrEqual(
     *     value = 100,
     *      message = "Le chiffre doit être compris entre 0 et 100 !")
     * @Assert\GreaterThanOrEqual(
     *     value = 0,
     *      message = "Le chiffre doit être compris entre 0 et 100 !")
     */
    private $percentage;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $color;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(string $language): self
    {
        $this->language = $language;

        return $this;
    }

    public function getPercentage(): ?int
    {
        return $this->percentage;
    }

    public function setPercentage(int $percentage): self
    {
        $this->percentage = $percentage;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }
}
