using EMart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.SellerService.Repositories
{
 public interface ISelleritemRepository
    {

        void Additems(Items obj);
        List<Items> ViewItems(string id);
        void DeleteItem(string id);
        void UpdateItem(Items obj);
        Items GetItem(string id);

    }
}
