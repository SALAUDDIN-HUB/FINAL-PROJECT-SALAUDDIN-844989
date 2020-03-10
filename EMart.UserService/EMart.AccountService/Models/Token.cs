using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AccountService.Models
{
    public class Token
    {
        internal string username;

        public string uname { get; set; }
        public string token { get; set; }
        public string buyerid { get; set; }
        public string sellerid { get; set; }
        public string message { get; set; }

       
    }
}
