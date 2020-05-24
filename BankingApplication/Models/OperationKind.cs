using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BankingApplication.Models
{
    public class OperationKind
    {
        public int Id { get; set; }

        [StringLength(25, MinimumLength = 3)]
        [Display(Name = "Rodzaj operacji")]
        public string Kind { get; set; }


        [Display(Name = "Transakcje")]
        [JsonIgnore]
        public virtual List<Transaction> Transactions { get; set; }
    }
}