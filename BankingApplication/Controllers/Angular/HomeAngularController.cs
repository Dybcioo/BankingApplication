using BankingApplication.DAL;
using BankingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BankingApplication.Controllers.Angular
{
    [Authorize]
    public class HomeAngularController : Controller
    {
        private AccountContext db = new AccountContext();
        // GET: Home
        public ActionResult Index()
        {
            Profile profile = db.Profiles.Single(p => p.Username == User.Identity.Name);
            if((profile.Hour >= DateTime.Now.Hour && profile.Day < DateTime.Now.Day) || profile.Day + 1 < DateTime.Now.Day)
            {
                profile.CurrentLimit = 0;
                profile.Hour = DateTime.Now.Hour;
                profile.Day = DateTime.Now.Day;
            }
           
            return View();
        }
    }
}