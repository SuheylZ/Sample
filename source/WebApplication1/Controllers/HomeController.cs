using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        Context db = new Context();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult PostCode()
        {
            var dataDelPostOff = GetDelPostOff();
            var dataNonDelPostOff = GetNonDelpostOff();
            ViewBag.Delivery = dataDelPostOff;
            ViewBag.NonDelivery = dataNonDelPostOff;
            return View();
        }
        public List<NonDeliveryPostOffice> GetNonDelpostOff()
        {
            return db.NonDeliveryPostOffices.ToList();

        }
        public List<DeliveryPostOffice> GetDelPostOff()
        {
            return db.DeliveryPostOffices.ToList();
        }
        public ActionResult About()
        {
            
            return View();
        }
        public ActionResult Contact()
        {
            return View();
        }
    }
}