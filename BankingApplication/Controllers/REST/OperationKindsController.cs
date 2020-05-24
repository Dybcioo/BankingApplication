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
    public class OperationKindsController : ApiController
    {
        private AccountContext db = new AccountContext();

        // GET: api/OperationKinds
        public IQueryable<OperationKind> GetOperationKinds()
        {
            return db.OperationKinds;
        }

        // GET: api/OperationKinds/5
        [ResponseType(typeof(OperationKind))]
        public IHttpActionResult GetOperationKind(int id)
        {
            OperationKind operationKind = db.OperationKinds.Find(id);
            if (operationKind == null)
            {
                return NotFound();
            }

            return Ok(operationKind);
        }

        // PUT: api/OperationKinds/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOperationKind(int id, OperationKind operationKind)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != operationKind.Id)
            {
                return BadRequest();
            }

            db.Entry(operationKind).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OperationKindExists(id))
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

        // POST: api/OperationKinds
        [ResponseType(typeof(OperationKind))]
        public IHttpActionResult PostOperationKind(OperationKind operationKind)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.OperationKinds.Add(operationKind);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = operationKind.Id }, operationKind);
        }

        // DELETE: api/OperationKinds/5
        [ResponseType(typeof(OperationKind))]
        public IHttpActionResult DeleteOperationKind(int id)
        {
            OperationKind operationKind = db.OperationKinds.Find(id);
            if (operationKind == null)
            {
                return NotFound();
            }

            db.OperationKinds.Remove(operationKind);
            db.SaveChanges();

            return Ok(operationKind);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OperationKindExists(int id)
        {
            return db.OperationKinds.Count(e => e.Id == id) > 0;
        }
    }
}