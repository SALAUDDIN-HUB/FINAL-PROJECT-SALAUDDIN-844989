using System;
using System.Collections.Generic;
using System.Text;
using EMart.AdminService.Models;
using EMart.AdminService.Repositories;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
 public class TestAdminServices
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EMARTDBContext());
        }
        [Test]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId="77777",
                CategoryName="SHIiRTS",
                BriefDetails="Men'sWear",

            });
            var result = _repo.GetCategoryById("77777");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubCategoryId="666",
                SubCategoryName="FORMALs",
                CategoryId="77777",
                BriefDetails="Formal Weaar",
                Gst="12345",
            });
            var result = _repo.GetSubCategoryById("666");
            Assert.NotNull(result);
        }
    }
}
