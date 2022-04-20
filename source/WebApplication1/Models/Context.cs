using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Context : DbContext
    {
        public Context() : base("MyCon")
        {

        }
        public DbSet<DeliveryPostOffice> DeliveryPostOffices { get; set; }
        public DbSet<NonDeliveryPostOffice> NonDeliveryPostOffices { get; set; }
        public DbSet<Employee>Employees { get; set; }

    }

}