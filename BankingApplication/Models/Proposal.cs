using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace BankingApplication.Models
{
    public class Proposal
    {
        public int Id { get; set; }

        [Required]
        [Display(Name = "Dochód")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:F2}")]
        public Decimal Income { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 3)]
        [Display(Name = "Imie ojca")]
        public string FatherName { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 3)]
        [Display(Name = "Imie matki")]
        public string MotherName { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 3)]
        [Display(Name = "Nazwisko panieńskie matki")]
        public string MotherMaidenName { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:F2}")]
        [Display(Name = "Kwota kredytu")]
        public Decimal LoanAmount { get; set; }
        public status Status { get; set; }
        public int AccountId { get; set; }


        [Display(Name = "Konto")]
        [JsonIgnore]
        public virtual Account Account { get; set; }
    }

    public enum status
    {
        Processed,
        Accepted,
        Rejected
    }
}