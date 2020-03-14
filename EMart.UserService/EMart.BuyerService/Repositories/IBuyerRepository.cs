using EMart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.BuyerService.Repositories
{
   public interface IBuyerRepository
    {

        List<Items> SearchItemByName(string name);
        List<Items> SearchItemByCategory(string id);
        List<Items> SearchItemBySubCategory(string id);
        Buyer GetProfile(string id);
        void EditProfile(Buyer obj);
        void BuyItem(PurchaseHistory obj);
        List<PurchaseHistory> PurchaseHistory(string bid);
        List<SubCategory> GetSubCategories(string cid);
        List<Items> GetAllItems();
        void AddtoCart(Cart cart);
        List<Cart> GetCartItems(string bid);
        void DeleteCartItem(string cartid);
        List<Category> GetCategories();
        Cart GetCart(string cartid);
        int GetCount(string bid);
       // PurchaseHistory GetPurchaseHistory(string id);


    }
}
