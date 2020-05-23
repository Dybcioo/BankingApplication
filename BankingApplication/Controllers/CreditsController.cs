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
using PagedList;

namespace BankingApplication.Controllers
{
    public class CreditsController : Controller
    {
        private AccountContext db = new AccountContext();

        // GET: Credits
        public ActionResult Index(String sort, string currentFilter, int? page)
        {
            ViewBag.CurrentSort = sort;
            ViewBag.DateSortParm = String.IsNullOrEmpty(sort) ? "date_desc" : "";
            ViewBag.YearSortParm = sort == "year" ? "year_desc" : "year";
            ViewBag.AmountSortParm = sort == "amount" ? "amount_desc" : "amount";
            ViewBag.RepaymentAmountSortParm = sort == "RepaymentAmount" ? "RepaymentAmount_desc" : "RepaymentAmount";


            var credits = db.Credits.Include(t => t.Account);


            switch (sort)
            {
                case "date_desc":
                    credits = credits.OrderByDescending(t => t.StartDate);
                    break;
                case "year":
                    credits = credits.OrderBy(t => t.Years);
                    break;
                case "year_desc":
                    credits = credits.OrderByDescending(t => t.Years);
                    break;
                case "amount_desc":
                    credits = credits.OrderByDescending(t => t.LoanAmount);
                    break;
                case "amount":
                    credits = credits.OrderBy(t => t.LoanAmount);
                    break;
                case "RepaymentAmount":
                    credits = credits.OrderBy(t => t.RepaymentAmount);
                    break;
                case "RepaymentAmount_desc":
                    credits = credits.OrderByDescending(t => t.RepaymentAmount);
                    break;
                default:
                    credits = credits.OrderBy(t => t.StartDate);
                    break;
            }

            int pageSize = 3;
            int pageNumber = (page ?? 1);
            return View(credits.ToPagedList(pageNumber, pageSize));
        }

        // GET: Credits/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Credit credit = db.Credits.Find(id);
            if (credit == null)
            {
                return HttpNotFound();
            }
            return View(credit);
        }

        // GET: Credits/Create
        public ActionResult Create()
        {
            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber");
            return View();
        }

        // POST: Credits/Create
        // Aby zapewnić ochronę przed atakami polegającymi na przesyłaniu dodatkowych danych, włącz określone właściwości, z którymi chcesz utworzyć powiązania.
        // Aby uzyskać więcej szczegółów, zobacz https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,StartDate,Years,LoanAmount,RepaymentAmount,AccountId")] Credit credit)
        {
            if (ModelState.IsValid)
            {
                db.Credits.Add(credit);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber", credit.AccountId);
            return View(credit);
        }

        // GET: Credits/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Credit credit = db.Credits.Find(id);
            if (credit == null)
            {
                return HttpNotFound();
            }
            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber", credit.AccountId);
            return View(credit);
        }

        // POST: Credits/Edit/5
        // Aby zapewnić ochronę przed atakami polegającymi na przesyłaniu dodatkowych danych, włącz określone właściwości, z którymi chcesz utworzyć powiązania.
        // Aby uzyskać więcej szczegółów, zobacz https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,StartDate,Years,LoanAmount,RepaymentAmount,AccountId")] Credit credit)
        {
            if (ModelState.IsValid)
            {
                db.Entry(credit).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber", credit.AccountId);
            return View(credit);
        }

        // GET: Credits/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Credit credit = db.Credits.Find(id);
            if (credit == null)
            {
                return HttpNotFound();
            }
            return View(credit);
        }

        // POST: Credits/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Credit credit = db.Credits.Find(id);
            db.Credits.Remove(credit);
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
