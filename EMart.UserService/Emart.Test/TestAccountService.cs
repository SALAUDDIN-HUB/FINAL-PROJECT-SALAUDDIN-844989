using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.AccountService.Models;
using EMart.AccountService.Repositories;

namespace Emart.Test
{
    [TestFixture]
  public class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EMARTDBContext());
        }
        [Test]
        public void TestBuyerlogin()
        {
            var result = _repo.Buyerlogin("salauddin", "12345");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSellerlogin()
        {
            var result = _repo.Sellerlogin("ada", "adaD");
            Assert.IsNotNull(result);
        }
        [Test]
        public void BuyerRegister()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Id="99999",
                Username="Buyer99",
                Password="Buyer99",
                Emailid="Buyer99@gmail.com",
                MobileNumber="9999999999",
                Createdatetime=DateTime.Now,


            });
            var result = _repo.Buyerlogin("Buyer99", "Buyer99");
            Assert.IsNotNull(result);
                
        }
        [Test]
        public void SellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                Id="88888",
                Username="Seller88",
                Password="Seller88",
                Emailid="Seller88@gmail.com",
                ContactNumber="9888888888",
                CompanyName="Leviis",
                Gstin="1234",
                BriefAboutCompany="Branded Products",
                PostalAddress="Mumbaii",
                Website="www.leviis.com"
            });
            var result = _repo.Sellerlogin("Seller88", "Seller88");
            Assert.IsNotNull(result);
        }
        
        
    }
}
