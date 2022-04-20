using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }

        [DisplayName("Employee Name") ]
        public string EmpName{ get; set; }

        [DisplayName("Age")]
        public int EmpAge{ get; set; }

        [DisplayName("Username")]
        public string EmpUserID { get; set; }

        [DisplayName("Password")]
        public String Password { get; set; }

        [DisplayName("Password Confirm")]
        [Compare("Password")]
        public String ConfirmPassword { get; set; }
    }
}