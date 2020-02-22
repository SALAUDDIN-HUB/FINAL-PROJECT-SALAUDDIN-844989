using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;

namespace EMart.SellerService.Repositories
{
   public interface ISellerRepository
    {
        void EditProfile(Seller obj);
        Seller GetProfile(string id);
        
    }
}
