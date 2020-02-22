using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.AccountService.Models;
using EMart.AccountService.Repositories;

namespace EMart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        public AccountController(IAccountRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("Buyerlogin/{username}/{password}")]
        public IActionResult BuyerLogin(string username, string password)
        {
            try
            {
                return Ok(_repo.Buyerlogin(username, password));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("Sellerlogin/{username}/{password}")]
        public IActionResult SellerLogin(string username, string password)
        {
            try
            {
                return Ok(_repo.Sellerlogin(username, password));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        [Route("RegisterBuyer")]
        public IActionResult RegisterBuyer(Buyer b)
        {
            try
            {
                _repo.BuyerRegister(b);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("RegisterSeller")]
        public IActionResult Registerseller(Seller b)
        {
            try
            {
                _repo.SellerRegister(b);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetBuyer")]
        public IActionResult GetBuyer()
        {
            return Ok(_repo.GetBuyer());
        }
        [HttpGet]
        [Route("GetSeller")]
        public IActionResult GetSeller()
        {
            return Ok(_repo.GetSeller());
        }

    }
}