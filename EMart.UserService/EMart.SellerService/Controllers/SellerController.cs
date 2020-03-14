using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("Editprofile")]
        public IActionResult EditProfile(Seller sel)
        {
            try
            {
                _repo.EditProfile(sel);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("Getprofile/{id}")]
        public IActionResult GetProfie(string id)
        {
            try
            {
                return Ok(_repo.GetProfile(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetReports/{Sellerid}")]
        public IActionResult GetReports(string Sellerid)
        {
            try
            {
                return Ok(_repo.GetReports(Sellerid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}