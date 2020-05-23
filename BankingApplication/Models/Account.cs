using Newtonsoft.Json;
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
        [Display(Name = "Dostępne środki")]
        public decimal Balance { get; set; }

        [Display(Name = "Profil")]
        public int? ProfileId { get; set; }



        [JsonIgnore]
        public virtual Profile Profile { get; set; }

        [Display(Name = "Transakcje")]
        [JsonIgnore]
        public virtual List<Transaction> Transactions { get; set; }

        [Display(Name = "Kredyty")]
        [JsonIgnore]
        public virtual List<Credit> Credits { get; set; }

        [Display(Name = "Wnioski")]
        [JsonIgnore]
        public virtual List<Proposal> Proposals { get; set; }
    }
}