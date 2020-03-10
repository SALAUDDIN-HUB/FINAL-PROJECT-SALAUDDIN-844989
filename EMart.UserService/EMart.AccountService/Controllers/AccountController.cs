using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.AccountService.Models;
using EMart.AccountService.Repositories;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace EMart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        private readonly IConfiguration configuration;

        public AccountController(IAccountRepository repo,IConfiguration confi)
        {
            _repo = repo;
            this.configuration = confi;
        }
        [HttpGet]
        [Route("Buyerlogin/{username}/{password}")]
        public IActionResult Buyerlogin(string username, string password)
        {
            Token token = null;
            try
            {
                Buyer buyer = _repo.Buyerlogin(username, password);
                if (buyer != null)
                {
                    token = new Token() { buyerid = buyer.Id, token = GenerateJwtToken(username), message = "success", username =buyer.Username};
                }
                else
                {
                    token = new Token() { token = null, message = "Unsuccess" };

                }
                return Ok(token);
            }


            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("Sellerlogin/{username}/{password}")]
        public IActionResult Sellerlogin(string username, string password)
        {
            Token token = null;
            try
            {
                Seller seller = _repo.Sellerlogin(username, password);
                if (seller != null)
                {
                    token = new Token() { sellerid = seller.Id, token = GenerateJwtToken(username), message = "success", username =seller.Username };
                }
                else
                {
                    token = new Token() { token = null, message = "Unsuccess" };

                }
                return Ok(token);
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
        public IActionResult RegisterSeller(Seller b)
        {
            try
            {
                _repo.SellerRegister(b);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
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

        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            var response = new Token
            {
                uname = uname,
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}