using EMart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.SellerService.Repositories
{
 public interface ISellerItemRepository
    {
        void AddItems(Items obj);
        List<Items> ViewItems(string id);
        void DeleteItem(string id);
        void UpdateItem(Items obj);
        Items GetItems(string id);
        List<Category> GetAllCategories();
        List<SubCategory> GetAllSubCategories(string cid);

    }
}
