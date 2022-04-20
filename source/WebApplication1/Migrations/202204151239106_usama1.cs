namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class usama1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DeliveryPostOffices",
                c => new
                    {
                        DeliveryPostOfficeId = c.Int(nullable: false, identity: true),
                        DeliveryPostOfficeName = c.String(nullable: false),
                        PostCode = c.Int(nullable: false),
                        AccountOffice = c.String(nullable: false),
                        Province = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.DeliveryPostOfficeId);
            
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        EmpId = c.Int(nullable: false, identity: true),
                        EmpName = c.String(),
                        EmpAge = c.Int(nullable: false),
                        EmpUserID = c.String(),
                        Password = c.String(),
                        ConfirmPassword = c.String(),
                    })
                .PrimaryKey(t => t.EmpId);
            
            CreateTable(
                "dbo.NonDeliveryPostOffices",
                c => new
                    {
                        NonDeliveryPostOfficeId = c.Int(nullable: false, identity: true),
                        NonDeliveryPostOfficeName = c.String(nullable: false),
                        PostCode = c.Int(nullable: false),
                        AccountOffice = c.String(nullable: false),
                        Province = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.NonDeliveryPostOfficeId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.NonDeliveryPostOffices");
            DropTable("dbo.Employees");
            DropTable("dbo.DeliveryPostOffices");
        }
    }
}
