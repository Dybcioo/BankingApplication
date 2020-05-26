using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BankingApplication.DAL;
using BankingApplication.Models;

namespace BankingApplication.Controllers.REST
{
    
    public class TransactionsController : ApiController
    {
        private AccountContext db = new AccountContext();

        // GET: api/Transactions
        public IQueryable<Transaction> GetTransactions()
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            return profile.Accounts.SelectMany(a => a.Transactions).AsQueryable();
        }

        // GET: api/Transactions/5
        public IQueryable<Transaction> GetTransaction(int id)
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            return profile.Accounts.SelectMany(a => a.Transactions).Where(t => t.AccountId == id).AsQueryable();
        }


        // PUT: api/Transactions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTransaction(int id, Transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != transaction.Id)
            {
                return BadRequest();
            }

            db.Entry(transaction).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionExists(id))
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

        // POST: api/Transactions
        [ResponseType(typeof(Transaction))]
        public IHttpActionResult PostTransaction(Transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            transaction.Date = DateTime.Now;
            if (transaction.Direction == direction.Outbound)
            {
                db.Accounts.Find(transaction.AccountId).Balance -= transaction.Amount;
            }
            else
            {
                db.Accounts.Find(transaction.AccountId).Balance += transaction.Amount;
            }
           

            db.Transactions.Add(transaction);
            db.SaveChanges();

            if (transaction.OperationKindId == 1)
            {
                Account account = db.Accounts.Single(a => a.AccountNumber.Equals(transaction.ToAccountNumber));
                if (account != null)
                {
                    transaction.ToAccountNumber = db.Accounts.Find(transaction.AccountId).AccountNumber;
                    transaction.AccountId = account.Id;
                    transaction.Direction = direction.Inbound;
                    db.Transactions.Add(transaction);
                    db.SaveChanges();
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = transaction.Id }, transaction);
        }

        // DELETE: api/Transactions/5
        [ResponseType(typeof(Transaction))]
        public IHttpActionResult DeleteTransaction(int id)
        {
            Transaction transaction = db.Transactions.Find(id);
            if (transaction == null)
            {
                return NotFound();
            }

            db.Transactions.Remove(transaction);
            db.SaveChanges();

            return Ok(transaction);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TransactionExists(int id)
        {
            return db.Transactions.Count(e => e.Id == id) > 0;
        }
    }
}