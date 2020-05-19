﻿using BankingApplication.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BankingApplication.DAL
{
    public class AccountInitializer : DropCreateDatabaseIfModelChanges<AccountContext>
    {
        protected override void Seed(AccountContext context)
        {
            var user = new ApplicationUser { UserName = "maniek@gmail.com" };
            var user2 = new ApplicationUser { UserName = "jaa@gmail.com" };
            string pass = "Ala.ma.2.koty";
            string pass2 = "Test1212";

            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(new ApplicationDbContext()));

            userManager.Create(user, pass);
            userManager.Create(user2, pass2);

           

            var profiles = new List<Profile>
            {
                new Profile {Name = "Jan", Surname = "Kowalski", Active = true, Born = new DateTime(1990,1,1), Username = user.UserName},
                new Profile {Name = "Franek", Surname = "Kimono", Active = true, Born = new DateTime(1992,1,1), Username = user2.UserName}
            };
            profiles.ForEach(p => context.Profiles.Add(p));
            context.SaveChanges();

            var adresses = new List<Address>
            {
                new Address {Country = "Polska", Province = "Mazowieckie", City = "Siedlce", Street = "Południowa", numberHouse = "43/1" , Profile = profiles[0]},
                new Address {Country = "Polska", Province = "Śląsk", City = "Gliwice", Street = "Południowa", numberHouse = "43/2", Profile = profiles[1]}
            };
            adresses.ForEach(a => context.Addresses.Add(a));
            context.SaveChanges();

            var operationKinds = new List<OperationKind>
            {
                new OperationKind {Kind = "Przelew"},
                new OperationKind {Kind = "Wpłata"},
                new OperationKind {Kind = "Wypłata"},
                new OperationKind {Kind = "Spłata kredytu"}
            };
            operationKinds.ForEach(o => context.OperationKinds.Add(o));
            context.SaveChanges();

            var accounts = new List<Account>
            {
                new Account {AccountNumber = "00195000010000000000000000", Balance = 20200, CreationDate = new DateTime(2002,11,23).Date, Profile = profiles[0]},
                new Account {AccountNumber = "00101000010000000000000000", Balance = 20200, CreationDate = new DateTime(2020,4,21).Date, Profile = profiles[1]}
            };
            accounts.ForEach(a => context.Accounts.Add(a));
            context.SaveChanges();

            var proposals = new List<Proposal>
            {
                new Proposal {FatherName = "Jan", MotherName = "Janina", MotherMaidenName = "Kowalska", Income = 2000, LoanAmount = 200000, Status = status.Accepted, Account = accounts[0]}
            };
            proposals.ForEach(p => context.Proposals.Add(p));
            context.SaveChanges();

            var credits = new List<Credit>
            {
                new Credit {LoanAmount = proposals[0].LoanAmount, Years = 5, RepaymentAmount = proposals[0].LoanAmount/5, StartDate = DateTime.Now, Account = accounts[0]}
            };
            credits.ForEach(c => context.Credits.Add(c));
            context.SaveChanges();

            var transactions = new List<Transaction>
            {
                new Transaction { ToAccountNumber = accounts[1].AccountNumber, OperationKind = operationKinds[0], Amount = 200.23M, Title = "Opłata za korki z infy", Date = DateTime.Now, Account = accounts[0] }
            };
            transactions.ForEach(t => context.Transactions.Add(t));
            context.SaveChanges();
        }
    }
}