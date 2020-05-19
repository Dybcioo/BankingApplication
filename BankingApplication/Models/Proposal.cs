using System;

namespace BankingApplication.Models
{
    public class Proposal
    {
        public int Id { get; set; }
        public Decimal Income { get; set; }
        public string FatherName { get; set; }
        public string MotherName { get; set; }
        public string MotherMaidenName { get; set; }
        public Decimal LoanAmount { get; set; }
        public status Status { get; set; }
        public int AccountId { get; set; }

        public virtual Account Account { get; set; }
    }

    public enum status
    {
        Processed,
        Accepted,
        Rejected
    }
}