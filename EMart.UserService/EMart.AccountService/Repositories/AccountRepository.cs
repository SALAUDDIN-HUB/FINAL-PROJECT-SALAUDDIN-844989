using EMart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AccountService.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly EMARTDBContext _context;
       public AccountRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public Buyer Buyerlogin(string username, string password)
        {
            Buyer b = _context.Buyer.SingleOrDefault(i => i.Username == username && i.Password == password);
            return b;


            
        }

        public void BuyerRegister(Buyer b)
        {
            _context.Add(b);
            _context.SaveChanges();
        }

        public Seller Sellerlogin(string username, string password)
        {
            Seller s = _context.Seller.SingleOrDefault(i => i.Username == username && i.Password == password);
            return s;
           
        }

        public void SellerRegister(Seller s)
        {
            _context.Add(s);
            _context.SaveChanges();
        }
        public List<Buyer> GetBuyer()
        {
            return _context.Buyer.ToList();
        }
        public List<Seller> GetSeller()
        {
            return _context.Seller.ToList();
        }
    }
}
