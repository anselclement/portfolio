<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\HobbiesRepository")
 */
class Hobbies
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
    private $icon_name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(
     *      message = "Le contenu ne peut pas être vide !")
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\APropos", inversedBy="hobbies")
     * @ORM\JoinColumn(nullable=false)
     */
    private $apropos;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIconName(): ?string
    {
        return $this->icon_name;
    }

    public function setIconName(?string $icon_name): self
    {
        $this->icon_name = $icon_name;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getApropos(): ?APropos
    {
        return $this->apropos;
    }

    public function setApropos(?APropos $apropos): self
    {
        $this->apropos = $apropos;

        return $this;
    }
}
