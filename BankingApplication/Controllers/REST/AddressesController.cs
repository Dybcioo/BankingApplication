﻿using System;
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
    public class AddressesController : ApiController
    {
        private AccountContext db = new AccountContext();

        // GET: api/Addresses
        [ResponseType(typeof(Address))]
        public IHttpActionResult GetAddresses()
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            Address address = profile.Address;
            if (address == null)
            {
                return NotFound();
            }

            return Ok(address);
        }


        // PUT: api/Addresses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAddress(int id, Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != address.Id)
            {
                return BadRequest();
            }

            db.Entry(address).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AddressExists(id))
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

        // POST: api/Addresses
        [ResponseType(typeof(Address))]
        public IHttpActionResult PostAddress(Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Addresses.Add(address);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (AddressExists(address.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = address.Id }, address);
        }

        // DELETE: api/Addresses/5
        [ResponseType(typeof(Address))]
        public IHttpActionResult DeleteAddress(int id)
        {
            Address address = db.Addresses.Find(id);
            if (address == null)
            {
                return NotFound();
            }

            db.Addresses.Remove(address);
            db.SaveChanges();

            return Ok(address);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AddressExists(int id)
        {
            return db.Addresses.Count(e => e.Id == id) > 0;
        }
    }
}