using EMart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.SellerService.Repositories
{
    public class SellerItemRepository : ISellerItemRepository
    {
        private readonly EMARTDBContext _context;
        public SellerItemRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public void AddItems(Items obj)
        {
            _context.Items.Add(obj);
            _context.SaveChanges();
        }
        public void DeleteItem(string id)
        {
            Items i = _context.Items.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList(); 
        }

       

        public List<SubCategory> GetAllSubCategories(string cid)
        {
            List<SubCategory> subCategory = _context.SubCategory.Where(i => i.CategoryId == cid).ToList();
            return subCategory;
        }

        

        public Items GetItems(string sid)
        {
            return _context.Items.Find(sid);
           

        }

        public void UpdateItem(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(string sid)
        {
            return _context.Items.Where(i => i.Sellerid == sid).ToList();
            
            

        }
    }
}
