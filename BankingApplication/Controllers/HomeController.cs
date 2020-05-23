using BankingApplication.DAL;
using BankingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BankingApplication.Controllers
{
    
    public class HomeController : Controller
    {
        private AccountContext db = new AccountContext();
        public ActionResult Index()
        {
            return View();
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }

        [Authorize]
        public ActionResult About()
        {
            IQueryable<TransactionIO> data = from transaction in db.Transactions
                                             group transaction by transaction.Direction into tranGroup
                                             select new TransactionIO()
                                             {
                                                 Direction = tranGroup.Key,
                                                 TransactionCount = tranGroup.Count()
                                             };
            return View(data.ToList());
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}