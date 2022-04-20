using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class AdminController : Controller
    {
        Context db = new Context();
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }


        //Employee Start-------------------
        public ActionResult CreateEmp()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CreateEmp(Employee emp)
        {
            db.Employees.Add(emp);
            db.SaveChanges();
            return RedirectToAction ("ShowEmp");
        }
        public ActionResult ShowEmp()
        {
            var data = db.Employees.ToList();
            return View(data);
        }
        public ActionResult EditEmp( int id)
        {
            var data = db.Employees.Where(m => m.EmpId == id).FirstOrDefault();
            return View(data);
        }
        [HttpPost]
        public ActionResult EditEmp(Employee Emp)
        {
            db.Entry(Emp).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("ShowEmp");
        }
        public ActionResult DelEmp(int id)
        {
            
                var data = db.Employees.Where(m => m.EmpId == id).FirstOrDefault();
                    db.Entry(data).State = EntityState.Deleted;
                    db.SaveChanges();
                  

            return RedirectToAction("ShowEmp");
        }
        //Employee End-------------------

        //Delivery Post Office Start ------------------
        public ActionResult CreateDelPostOff()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CreateDelPostOff( DeliveryPostOffice dpo )
        {
            db.DeliveryPostOffices.Add(dpo);
            db.SaveChanges();
            return RedirectToAction("ShowDelPostOff");
        }
        public ActionResult ShowDelPostOff()
        {
            var data = db.DeliveryPostOffices.ToList();
            return View(data);

        }
        public ActionResult EditDelPostOff(int id)
        {
            var data = db.DeliveryPostOffices.Where(m => m.DeliveryPostOfficeId == id).FirstOrDefault();
            return View ( data);
        }
        [HttpPost]
        public ActionResult EditDelPostOff( DeliveryPostOffice dpo)
        {
            db.Entry(dpo).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("ShowDelPostOff");
        }
        public ActionResult DeleteDelPostOff( int id )
        {
            var data = db.DeliveryPostOffices.Where(m => m.DeliveryPostOfficeId == id).FirstOrDefault();
            db.Entry(data).State = EntityState.Deleted;
            db.SaveChanges();
            return RedirectToAction("ShowDelPostOff");
        }


        //Delivery Post Office end ------------------



        //Non Delivery Post Office Start ------------------
        public ActionResult ShowNonDelPostOff()
        {
            var data = db.NonDeliveryPostOffices.ToList();
            return View(data);
        }
        public ActionResult CreateNonDelPostOff()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CreateNonDelPostOff(NonDeliveryPostOffice Ndpo)
        {
            db.NonDeliveryPostOffices.Add(Ndpo);
            db.SaveChanges();
            return RedirectToAction("ShowNonDelPostOff");
        }
        public ActionResult EditNonDelPostOff( int id)
        {
            var data = db.NonDeliveryPostOffices.Where(m => m.NonDeliveryPostOfficeId == id).FirstOrDefault();
            return View(data);
        }
        [HttpPost]
        public ActionResult EditNonDelPostOff(NonDeliveryPostOffice Ndpo)
        {
            db.Entry(Ndpo).State = EntityState.Modified;
            return RedirectToAction("ShowNonDelPostOff");
        }
        public ActionResult DeleteNonDelPostOff(int id)
        {
           var data= db.NonDeliveryPostOffices.Where(m => m.NonDeliveryPostOfficeId == id).FirstOrDefault();
            db.Entry(data).State = EntityState.Deleted;
            return RedirectToAction("ShowNonDelPostOff");
        }


    }
}