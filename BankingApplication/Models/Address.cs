using System.ComponentModel.DataAnnotations.Schema;

namespace BankingApplication.Models
{
    public class Address
    {
        [ForeignKey("Profile")]
        public int Id { get; set; }
        public string Country { get; set; }
        public string Province { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string numberHouse { get; set; }

        public virtual Profile Profile { get; set; }
    }
}