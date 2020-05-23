using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BankingApplication.DAL;
using BankingApplication.Models;

namespace BankingApplication.Controllers
{
    [Authorize(Roles = "Admin")]
    public class OperationKindsController : Controller
    {
        private AccountContext db = new AccountContext();

        // GET: OperationKinds
        public ActionResult Index()
        {
            return View(db.OperationKinds.ToList());
        }

        // GET: OperationKinds/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OperationKind operationKind = db.OperationKinds.Find(id);
            if (operationKind == null)
            {
                return HttpNotFound();
            }
            return View(operationKind);
        }

        // GET: OperationKinds/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: OperationKinds/Create
        // Aby zapewnić ochronę przed atakami polegającymi na przesyłaniu dodatkowych danych, włącz określone właściwości, z którymi chcesz utworzyć powiązania.
        // Aby uzyskać więcej szczegółów, zobacz https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Kind")] OperationKind operationKind)
        {
            if (ModelState.IsValid)
            {
                db.OperationKinds.Add(operationKind);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(operationKind);
        }

        // GET: OperationKinds/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OperationKind operationKind = db.OperationKinds.Find(id);
            if (operationKind == null)
            {
                return HttpNotFound();
            }
            return View(operationKind);
        }

        // POST: OperationKinds/Edit/5
        // Aby zapewnić ochronę przed atakami polegającymi na przesyłaniu dodatkowych danych, włącz określone właściwości, z którymi chcesz utworzyć powiązania.
        // Aby uzyskać więcej szczegółów, zobacz https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Kind")] OperationKind operationKind)
        {
            if (ModelState.IsValid)
            {
                db.Entry(operationKind).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(operationKind);
        }

        // GET: OperationKinds/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OperationKind operationKind = db.OperationKinds.Find(id);
            if (operationKind == null)
            {
                return HttpNotFound();
            }
            return View(operationKind);
        }

        // POST: OperationKinds/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            OperationKind operationKind = db.OperationKinds.Find(id);
            db.OperationKinds.Remove(operationKind);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
