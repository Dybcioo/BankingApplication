using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankingApplication.Models
{
    public class Address
    {
        [ForeignKey("Profile")]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Kraj")]
        public string Country { get; set; }

        [Required]
        [Display(Name = "Województwo")]
        public string Province { get; set; }

        [Required]
        [Display(Name = "Miasto")]
        public string City { get; set; }

        [Display(Name = "Nazwa ulicy")]
        public string Street { get; set; }

        [Required]
        [Display(Name = "Numer domu/mieszkania")]
        public string numberHouse { get; set; }



        [Display(Name = "Profil")]
        public virtual Profile Profile { get; set; }
    }
}