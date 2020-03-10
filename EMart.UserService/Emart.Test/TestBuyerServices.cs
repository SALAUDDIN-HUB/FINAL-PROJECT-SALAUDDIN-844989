using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.BuyerService.Models;
using EMart.BuyerService.Repositories;

namespace Emart.Test
{
    [TestFixture]
    public class TestBuyerServices
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EMARTDBContext());
        }
        [Test]
        public void TestSearchItemByName()
        {
            var result = _repo.SearchItemByName("df");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSearchItemByCategory()
        {
            var result = _repo.SearchItemByCategory("333");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSearchItemBySubCategory()
        {
            var result = _repo.SearchItemBySubCategory("1111");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Id = "5555",
                BuyerId = "9999",
                SellerId = "8888",
                ItemId = "333",
                TransactionType = "card",
                DateTime = DateTime.Now,
                Remarks="re",
                Numberofitems="1"

            }) ;
            var result = _repo.SearchItemByName("abc");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("9999");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestPurchaseHistory()
        {
            var result = _repo.PurchaseHistory("9999");
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories("7777");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetCategories()
        {
            var result = _repo.GetCategories();
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestAddtoCart()
        {
            _repo.AddtoCart(new Cart()
            {
                Cartid = "3333",
                Id = "I544",
                CategoryId = "7777",
                SubCategoryId = "5555",
                ItemName = "df",
                Price = 4999,
                ItemDescription = "itemdes",
                StockNumber = 26,
                Remarks = "ree",
                BuyerId = "9999",
                Sellerid = "8888",
                Image = "B.jpg",


            });
        }
        [Test]
        public void TestGetCartItems()
        {

        }
    }
}
