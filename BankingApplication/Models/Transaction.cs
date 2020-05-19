using System;
using System.ComponentModel.DataAnnotations;

namespace BankingApplication.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:F2}")]
        public Decimal Amount { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd HH:MM}", ApplyFormatInEditMode = true)]
        public DateTime Date { get; set; }
        public string ToAccountNumber { get; set; }
        public int OperationKindId { get; set; }
        public int AccountId { get; set; }

        public virtual OperationKind OperationKind { get; set; }
        public virtual Account Account { get; set; }
    }
}