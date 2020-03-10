
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AdminService.Models;
using EMart.AdminService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category item)
        {
            try
            {
                _repo.AddCategory(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory item)
        {
            try
            {
                _repo.AddSubCategory(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCatrgory/{category_id}")]
        public IActionResult DeleteCategory(string category_id)
        {
            try
            {
                _repo.DeleteCategory(category_id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCatrgory/{subcategory_id}")]
        public IActionResult DeleteSubCategory(string subcategory_id)
        {
            try
            {
                _repo.DeleteCategory(subcategory_id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllCategories")]
        public IActionResult GetAllCategories()
        {

            return Ok(_repo.GetAllCategories());
        }
        [HttpGet]
        [Route("GetCategoryById/{cid}")]
        public IActionResult GetCategoryById(string cid)
        {
            try
            {
                return Ok(_repo.GetCategoryById(cid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategoryById/{sid}")]
        public IActionResult GetSubCategoryById(string sid)
        {
            try
            {
                return Ok(_repo.GetSubCategoryById(sid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
    
