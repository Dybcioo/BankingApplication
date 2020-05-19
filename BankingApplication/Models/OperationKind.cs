using System.Collections.Generic;

namespace BankingApplication.Models
{
    public class OperationKind
    {
        public int Id { get; set; }
        public string Kind { get; set; }

        public virtual List<Transaction> Transactions { get; set; }
    }
}