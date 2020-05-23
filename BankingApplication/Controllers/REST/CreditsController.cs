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
    public class CreditsController : ApiController
    {
        private AccountContext db = new AccountContext();

        // GET: api/Credits
        public IQueryable<Credit> GetCredits()
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            return profile.Accounts.SelectMany(a => a.Credits).AsQueryable();
        }

        // GET: api/Credits/5
        [ResponseType(typeof(Credit))]
        public IHttpActionResult GetCredit(int id)
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            Credit credit = profile.Accounts.SelectMany(a => a.Credits).Single(c => c.Id == id);
            if (credit == null)
            {
                return NotFound();
            }

            return Ok(credit);
        }

        // PUT: api/Credits/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCredit(int id, Credit credit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != credit.Id)
            {
                return BadRequest();
            }

            db.Entry(credit).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CreditExists(id))
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

        // POST: api/Credits
        [ResponseType(typeof(Credit))]
        public IHttpActionResult PostCredit(Credit credit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Credits.Add(credit);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = credit.Id }, credit);
        }

        // DELETE: api/Credits/5
        [ResponseType(typeof(Credit))]
        public IHttpActionResult DeleteCredit(int id)
        {
            Credit credit = db.Credits.Find(id);
            if (credit == null)
            {
                return NotFound();
            }

            db.Credits.Remove(credit);
            db.SaveChanges();

            return Ok(credit);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CreditExists(int id)
        {
            return db.Credits.Count(e => e.Id == id) > 0;
        }
    }
}