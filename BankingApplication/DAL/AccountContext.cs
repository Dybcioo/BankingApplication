using BankingApplication.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BankingApplication.DAL
{
    public class AccountContext : DbContext
    {
        public AccountContext()
            : base("DefaultConnection")
        {

        }
      

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions  { get; set; }
        public DbSet<Credit> Credits { get; set; }
        public DbSet<OperationKind> OperationKinds { get; set; }
        public DbSet<Proposal> Proposals { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Address> Addresses { get; set; }
    }
}