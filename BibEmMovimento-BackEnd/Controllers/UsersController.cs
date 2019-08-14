using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BibEmMovimento.Models;
using System.Net.Mail;

namespace BibEmMovimento.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BibEmMovimentoContext _context;


        public UsersController(BibEmMovimentoContext context)
        {
            _context = context;

        }
        [HttpGet("{id}")]
        public IActionResult GetUser([FromRoute]int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPut]
        public IActionResult ResetPassword([FromQuery] string email)
        {

            User user = _context.Users.Where(u => u.Email == email).FirstOrDefault();

            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var randomPassword = new string(
                Enumerable.Repeat(chars, 8)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());

            if (ModelState.IsValid && user != null)
            {

                MailMessage msg = new MailMessage
                {
                    From = new MailAddress("noreplypbem@gmail.com")
                };
                msg.To.Add(new MailAddress(user.Email));
                msg.Subject = "Gerenciador do site B.E.M. - Mudança de senha";
                msg.Body = $"Voce solicitou a alteração de senha. \nSua nova senha é: {randomPassword}";

                System.Net.Mail.SmtpClient smtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com", Convert.ToInt32(587));
                System.Net.NetworkCredential credentials = new System.Net.NetworkCredential( "noreplypbem@gmail.com", "Amarelinho");
                smtpClient.Credentials = credentials;
                smtpClient.EnableSsl = true;
                try {
                    smtpClient.Send(msg);
                    user.Password = randomPassword;
                    _context.SaveChanges();
	            }  
	            catch (Exception ex) {
	                Console.WriteLine("Exception", 
                    ex.ToString() );			  
                }    
        
                return Ok();
                
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var user = _context.Users.Where(u => u.Username == userLogin.Username && u.Password == userLogin.Password).FirstOrDefault();
            if (user == null) {
                return Unauthorized();
            }

            return Ok(user);
        }
    } 
}