using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.SellerService.Models;


namespace EMart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly ISellerItemRepository _rep;
        public ItemController(ISellerItemRepository rep)
        {
            _rep = rep;
        }
        [HttpPost]
        [Route("AddItem")]
        public IActionResult AddItems(Items item)
        {
            try
            {
                _rep.AddItems(item);
                return Ok();

            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpDelete]
        [Route("DeleteItem/{id}")]
        public IActionResult DeleteItem(string id)
        {
            try
            {
                _rep.DeleteItem(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetItems/{itemid}")]
        public IActionResult GetItems(string itemid)
        {
            try
            {
                return Ok(_rep.GetItems(itemid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult UpdateItem(Items obj)
        {
            try
            {
                _rep.UpdateItem(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sellerid}")]
        public IActionResult ViewItems(string sellerid)
        {
            try
            {

                return Ok(_rep.ViewItems(sellerid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}