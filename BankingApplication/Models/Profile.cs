using Newtonsoft.Json;
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

        [Display(Name = "Nazwa użytkownika")]
        public string Username { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 3)]
        [Display(Name = "Imię")]
        public string Name { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 3)]
        [Display(Name = "Nazwisko")]
        public string Surname { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Data urodzenia")]
        public DateTime Born { get; set; }

        [Display(Name = "Aktywny")]
        public bool Active { get; set; }


        [Display(Name = "Adres")]
        [JsonIgnore]
        public virtual Address Address { get; set; }

        [Display(Name = "Konta")]
        [JsonIgnore]
        public virtual List<Account> Accounts { get; set; }
    }
}