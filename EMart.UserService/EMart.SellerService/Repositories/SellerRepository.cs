using EMart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EMARTDBContext _context;
        public SellerRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public void EditProfile(Seller obj)
        {
            _context.Seller.Update(obj);
        }

        public Seller GetProfile(string id)
        {
            throw new NotImplementedException();
        }
    }
}
