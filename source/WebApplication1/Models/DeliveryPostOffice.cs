using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class DeliveryPostOffice
    {
        [Key]
        public int DeliveryPostOfficeId { get; set; }

        [DisplayName("DELIVERY POST OFFICES")]
        [Required(ErrorMessage = "Enter DELIVERY POST OFFICES")]
        public string DeliveryPostOfficeName { get; set; }


        [DisplayName("POST CODE")]
        [Required(ErrorMessage = "Enter POST CODE")]
        public int PostCode { get; set; }

        [DisplayName("ACCOUNT OFFICE")]
        [Required(ErrorMessage = "Enter ACCOUNT OFFICE")]
        public string AccountOffice { get; set; }

        [DisplayName("PROVINCE")]
        [Required(ErrorMessage = "Enter PROVINCE")]
        public string Province { get; set; }
    }
}