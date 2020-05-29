using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Configuration;

namespace BankingApplication.Models
{
    
    public class Transaction
    {
        public int Id { get; set; }

        [Display(Name = "Wybierz konto")]
        public int AccountId { get; set; }

        [Display(Name = "Wybierz typ operacji")]
        public int OperationKindId { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 5)]
        [Display(Name = "Tytuł")]
        public string Title { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:F2}")]
        [Display(Name = "Kwota transakcji")]
        public Decimal Amount { get; set; }

        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd HH:MM}", ApplyFormatInEditMode = true)]
        [Display(Name = "Data transakcji")]
        public DateTime Date { get; set; }

        [Display(Name = "Numer konta  nadawcy/odbiorcy")]
        [RegularExpression(@"^[0-9]{26}$", ErrorMessage = "Numer konta musi zwierać wyłącznie cyfry i mieć długość 26 cyfr")]
        public string ToAccountNumber { get; set; }
        
        [StringLength(200)]
        [Display(Name = "Opis")]
        public string Description { get; set; }

        public int? CreditID { get; set; }

        public direction Direction { get; set; }


        [Display(Name = "Rodzaj operacji")]
        [JsonIgnore]
        public virtual OperationKind OperationKind { get; set; }

        [Display(Name = "Konto")]
        [JsonIgnore]
        public virtual Account Account { get; set; }
    }

    public enum direction 
    {
        Outbound,
        Inbound
    }
}