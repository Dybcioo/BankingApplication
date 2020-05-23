using System;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using BankingApplication.DAL;
using BankingApplication.Models;
using PagedList;

namespace BankingApplication.Controllers
{
    [Authorize(Roles = "Admin")]
    public class TransactionsController : Controller
    {
        private AccountContext db = new AccountContext();

        // GET: Transactions
        public ActionResult Index(String sort, string currentFilter, String search, int? page)
        {
            ViewBag.CurrentSort = sort;
            ViewBag.AccountSortParm = String.IsNullOrEmpty(sort) ? "account_desc" : "";
            ViewBag.KindSortParm = sort == "kind" ? "kind_desc" : "kind";
            ViewBag.LoanAmountSortParm = sort == "LoanAmount" ? "LoanAmount_desc" : "LoanAmount";
            ViewBag.DirectionSortParm = sort == "direction" ? "direction_desc" : "direction";

            if (search != null)
            {
                page = 1;
            }
            else
            {
                search = currentFilter;
            }

            ViewBag.CurrentFilter = search;

            var transactions = db.Transactions.Include(t => t.Account).Include(t => t.OperationKind);

            if (!String.IsNullOrEmpty(search))
            {
                transactions = transactions.Where(s => s.Title.Contains(search));
            }



            switch (sort)
            {
                case "account_desc":
                    transactions = transactions.OrderByDescending(t => t.Account.AccountNumber);
                    break;
                case "kind":
                    transactions = transactions.OrderBy(t => t.OperationKind.Kind);
                    break;
                case "kind_desc":
                    transactions = transactions.OrderByDescending(t => t.OperationKind.Kind);
                    break;
                case "amount_desc":
                    transactions = transactions.OrderByDescending(t => t.Amount);
                    break;
                case "amount":
                    transactions = transactions.OrderBy(t => t.Amount);
                    break;
                case "direction":
                    transactions = transactions.OrderBy(t => t.Direction);
                    break;
                case "direction_desc":
                    transactions = transactions.OrderByDescending(t => t.Direction);
                    break;
                default:
                    transactions = transactions.OrderBy(t => t.Account.AccountNumber);
                    break;
            }

            int pageSize = 3;
            int pageNumber = (page ?? 1);
            return View(transactions.ToPagedList(pageNumber, pageSize));
        }

        // GET: Transactions/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Transaction transaction = db.Transactions.Find(id);
            if (transaction == null)
            {
                return HttpNotFound();
            }
            return View(transaction);
        }

        // GET: Transactions/Create
        public ActionResult Create()
        {
            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber");
            ViewBag.OperationKindId = new SelectList(db.OperationKinds, "Id", "Kind");
            return View();
        }

        // POST: Transactions/Create
        // Aby zapewnić ochronę przed atakami polegającymi na przesyłaniu dodatkowych danych, włącz określone właściwości, z którymi chcesz utworzyć powiązania.
        // Aby uzyskać więcej szczegółów, zobacz https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,AccountId,OperationKindId,Title,Amount,Date,ToAccountNumber,Description")] Transaction transaction)
        {
            if (ModelState.IsValid)
            {
                db.Transactions.Add(transaction);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber", transaction.AccountId);
            ViewBag.OperationKindId = new SelectList(db.OperationKinds, "Id", "Kind", transaction.OperationKindId);
            return View(transaction);
        }

        // GET: Transactions/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Transaction transaction = db.Transactions.Find(id);
            if (transaction == null)
            {
                return HttpNotFound();
            }
            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber", transaction.AccountId);
            ViewBag.OperationKindId = new SelectList(db.OperationKinds, "Id", "Kind", transaction.OperationKindId);
            return View(transaction);
        }

        // POST: Transactions/Edit/5
        // Aby zapewnić ochronę przed atakami polegającymi na przesyłaniu dodatkowych danych, włącz określone właściwości, z którymi chcesz utworzyć powiązania.
        // Aby uzyskać więcej szczegółów, zobacz https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,AccountId,OperationKindId,Title,Amount,Date,ToAccountNumber,Description")] Transaction transaction)
        {
            if (ModelState.IsValid)
            {
                db.Entry(transaction).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.AccountId = new SelectList(db.Accounts, "Id", "AccountNumber", transaction.AccountId);
            ViewBag.OperationKindId = new SelectList(db.OperationKinds, "Id", "Kind", transaction.OperationKindId);
            return View(transaction);
        }

        // GET: Transactions/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Transaction transaction = db.Transactions.Find(id);
            if (transaction == null)
            {
                return HttpNotFound();
            }
            return View(transaction);
        }

        // POST: Transactions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Transaction transaction = db.Transactions.Find(id);
            db.Transactions.Remove(transaction);
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
