﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using BankingApplication.DAL;
using BankingApplication.Models;

namespace BankingApplication.Controllers.REST
{
    public class AccountsController : ApiController
    {
        private AccountContext db = new AccountContext();

        // GET: api/Accounts
        public IQueryable<Account> GetAccounts()
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            return profile.Accounts.AsQueryable();
        }

        // GET: api/Accounts/5
        [ResponseType(typeof(Account))]
        public IHttpActionResult GetAccount(int id)
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            Account account = profile.Accounts.Single(a => a.Id == id);
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }

        // PUT: api/Accounts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccount(int id, Account account)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != account.Id)
            {
                return BadRequest();
            }

            db.Entry(account).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Accounts
        [ResponseType(typeof(Account))]
        public IHttpActionResult PostAccount(Account account)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            account.Balance = 0;
            account.CreationDate = DateTime.Now;
            account.ProfileId = db.Profiles.Single(p => p.Username == User.Identity.Name).Id;
            account.AccountNumber = NewAccount();
            db.Accounts.Add(account);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = account.Id }, account);
        }

        private string NewAccount()
        {
            StringBuilder acc = new StringBuilder();
            acc.Append("232490000500004000");
            var temp = new StringBuilder();

            do
            {
                temp.Clear();
                temp.Append(acc.ToString());

                Random r = new Random();
                for (int i = 0; i < 8; i++)
                {
                    temp.Append(r.Next(9));
                }
            } while (db.Accounts.AsEnumerable().Any(a => a.AccountNumber.Equals(temp.ToString())));
            return temp.ToString();
        }

        // DELETE: api/Accounts/5
        [ResponseType(typeof(Account))]
        public IHttpActionResult DeleteAccount(int id)
        {
            Account account = db.Accounts.Find(id);
            if (account == null)
            {
                return NotFound();
            }

            db.Accounts.Remove(account);
            db.SaveChanges();

            return Ok(account);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccountExists(int id)
        {
            return db.Accounts.Count(e => e.Id == id) > 0;
        }
    }
}