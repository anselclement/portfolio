<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AProposRepository")
 * @Vich\Uploadable()
 */
class APropos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private $filename;

    /**
     * @var File
     * @Vich\UploadableField(mapping="apropos_image", fileNameProperty="filename")
     * @Assert\Image(
     *      mimeTypesMessage = "L'image n'est pas valide!")
     */
    private $imageFile;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private $cvfilename;

    /**
     * @var File
     * @Vich\UploadableField(mapping="apropos_cv", fileNameProperty="cvfilename")
     * @Assert\File(
     *      mimeTypes = {"application/pdf", "application/x-pdf"},
     *      mimeTypesMessage = "L'extension n'est pas correct, extension .pdf seulement !")
     */
    private $cvFile;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(
     *      message = "Le contenu ne peut pas être vide !")
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Email(
     *      message = "L'email '{{ value }}' ne correspond pas au format !")
     */
    private $mail;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $cv_updated_at;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hobbies", mappedBy="apropos")
     */
    private $hobbies;

    public function __construct()
    {
        $this->hobbies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getFilename(): ?string
    {
        return $this->filename;
    }

    public function setFilename(?string $filename): self
    {
        $this->filename = $filename;

        return $this;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(File $imageFile): self
    {
        $this->imageFile = $imageFile;
        if ($this->imageFile instanceof UploadedFile){
            $this->updated_at = new \DateTime('now');
        }

        return $this;
    }

    public function getcvfilename(): ?string
    {
        return $this->cvfilename;
    }

    public function setcvfilename(?string $cvfilename): self
    {
        $this->cvfilename = $cvfilename;

        return $this;
    }

    public function getCvFile(): ?File
    {
        return $this->cvFile;
    }

    public function setCvFile(File $cvFile): self
    {
        $this->cvFile = $cvFile;
        if ($this->cvFile instanceof UploadedFile){
            $this->cv_updated_at = new \DateTime('now');
        }

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getCvUpdatedAt(): ?\DateTimeInterface
    {
        return $this->cv_updated_at;
    }

    public function setCvUpdatedAt(?\DateTimeInterface $cv_updated_at): self
    {
        $this->cv_updated_at = $cv_updated_at;

        return $this;
    }

    /**
     * @return Collection|Hobbies[]
     */
    public function getHobbies(): Collection
    {
        return $this->hobbies;
    }

    public function addHobby(Hobbies $hobby): self
    {
        if (!$this->hobbies->contains($hobby)) {
            $this->hobbies[] = $hobby;
            $hobby->setApropos($this);
        }

        return $this;
    }

    public function removeHobby(Hobbies $hobby): self
    {
        if ($this->hobbies->contains($hobby)) {
            $this->hobbies->removeElement($hobby);
            // set the owning side to null (unless already changed)
            if ($hobby->getApropos() === $this) {
                $hobby->setApropos(null);
            }
        }

        return $this;
    }

}
