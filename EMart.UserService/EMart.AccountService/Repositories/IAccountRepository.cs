using EMart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AccountService.Repositories
{
  public  interface IAccountRepository
    {
        bool Buyerlogin(string username, string password);
        bool Sellerlogin(string username, string password);
        void BuyerRegister(Buyer b);
        void SellerRegister(Seller s);
        List<Buyer> GetBuyer();
        List<Seller> GetSeller();

    }
}
