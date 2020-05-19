using System;
using System.ComponentModel.DataAnnotations;

namespace BankingApplication.Models
{
    public class Credit
    {
        public int Id { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd HH:MM}", ApplyFormatInEditMode = true)]
        public DateTime StartDate { get; set; }
        public int Years { get; set; }
        public Decimal LoanAmount { get; set; }
        public Decimal RepaymentAmount { get; set; }
        public int AccountId { get; set; }

        public virtual Account Account { get; set; }
    }
}