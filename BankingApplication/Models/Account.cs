using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BankingApplication.Models
{
    public class Account
    {
        public int Id { get; set; }

        [Display(Name = "Numer konta")]
        public string AccountNumber { get; set; }

        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Data utworzenia konta")]
        public DateTime CreationDate { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:F2}")]
        [Display(Name = "Data utworzenia konta")]
        public decimal Balance { get; set; }

        [Display(Name = "Profil")]
        public int? ProfileId { get; set; }



        public virtual Profile Profile { get; set; }

        [Display(Name = "Transakcje")]
        public virtual List<Transaction> Transactions { get; set; }

        [Display(Name = "Kredyty")]
        public virtual List<Credit> Credits { get; set; }

        [Display(Name = "Wnioski")]
        public virtual List<Proposal> Proposals { get; set; }
    }
}