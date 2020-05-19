using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BankingApplication.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Born { get; set; }
        public Boolean Active { get; set; }

        public virtual Address Address { get; set; }
        public virtual List<Account> Accounts { get; set; }
    }
}