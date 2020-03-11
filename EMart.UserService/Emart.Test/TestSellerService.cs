using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;


namespace Emart.Test
{
    class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EMARTDBContext());
        }
        [Test]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetProfile("8888");
            seller.PostalAddress = "Mumbai";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile("8888");
            Assert.AreSame(seller, seller1);
        }
        [Test]
        [Description("Test GetProfile()")]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("8888");
            Assert.IsNotNull(result);
        }
    }
}
