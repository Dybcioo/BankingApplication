using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace BankingApplication.Models
{
    public class Credit
    {
        public int Id { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd HH:MM}", ApplyFormatInEditMode = true)]
        [Display(Name = "Data przyznania kredytu")]
        public DateTime StartDate { get; set; }

        [Required]
        [Display(Name = "Lata spłaty")]
        public int Years { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:F2}")]
        [Display(Name = "Kwota kredytu")]
        public Decimal LoanAmount { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:F2}")]
        [Display(Name = "Kwota do spłaty")]
        public Decimal RepaymentAmount { get; set; }
        public int AccountId { get; set; }


        [Display(Name = "Konto")]
        [JsonIgnore]
        public virtual Account Account { get; set; }
    }
}