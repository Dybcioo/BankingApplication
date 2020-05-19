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
        public string AccountNumber { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreationDate { get; set; }
        public decimal Balance { get; set; }
        public int? ProfileId { get; set; }

        public virtual Profile Profile { get; set; }
        public virtual List<Transaction> Transactions { get; set; }
        public virtual List<Credit> Credits { get; set; }
        public virtual List<Proposal> Proposals { get; set; }
    }
}