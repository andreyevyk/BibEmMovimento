using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using BibEmMovimento.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BibEmMovimento.Controllers
{
    [Route("api/Pages")]
    [ApiController]
    public class PagesController : ControllerBase
    {
        private readonly BibEmMovimentoContext _context;
        private readonly IPageService _service;


        public PagesController(BibEmMovimentoContext context, IPageService service)
        {
            _context = context;
            _service = service;
        }

        //GET: api/Pages/page
        [HttpGet("{page}/{pagina?}")]
        public IActionResult GetPaginas([FromRoute] PageEnum page, int? pagina)
        {
            var takePagina = pagina ?? 1;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pageContent = _context.PageContent.Where(p=> p.Page == page).Skip((takePagina - 1) * 10).Take(10).ToList();

            if (pageContent == null && pageContent.Count == 0)
            {
                return NotFound();
            }

            return Ok(pageContent);
        }

        [HttpGet]
        public IActionResult GetFiltro(
            [FromQuery] string filterBy, [FromQuery] string search, 
            [FromQuery] int limit, [FromQuery] int skip)
        {
            FilteringParams filteringParams = new FilteringParams(filterBy, search, limit, skip);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var model = _service.GetPages(filteringParams);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(model);
            
        }

        [HttpGet("Count")]
        public IActionResult Count([FromQuery] string filterBy, [FromQuery] string search)
        {
            FilteringParams filteringParams = new FilteringParams(filterBy, search);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var model = _service.GetPages(filteringParams);

            if (model == null)
            {
                return NotFound();
            }

            return Ok(model.Count());

        }

        //GET: api/Pages/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPageContent([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pageContent = await _context.PageContent.FindAsync(id);

            if (pageContent == null)
            {
                return NotFound();
            }

            return Ok(pageContent);
        }

        // PUT: api/Pages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPageContent([FromRoute] int id, [FromBody] PageContent pageContent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pageContent.Id)
            {
                return BadRequest();
            }

            _context.Entry(pageContent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PageContentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pages
        [HttpPost]
        public async Task<IActionResult> PostPageContent([FromBody] PageContent pageContent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.PageContent.Add(pageContent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPageContent", new { id = pageContent.Id }, pageContent);
        }

        // DELETE: api/Pages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePageContent([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pageContent = await _context.PageContent.FindAsync(id);
            if (pageContent == null)
            {
                return NotFound();
            }

            _context.PageContent.Remove(pageContent);
            await _context.SaveChangesAsync();

            return Ok(pageContent);
        }

        [HttpPost("contact")]
        public IActionResult Contact([FromBody] Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            MailMessage msg = new MailMessage
            {
                From = new MailAddress("noreplypbem@gmail.com")
            };
            msg.To.Add(new MailAddress("programabibliotecaemmovimento@gmail.com"));
            msg.Subject = contact.Title;
            msg.Body = $"Mensagem de {contact.Name} <{contact.Email}> \n" + contact.Content;

            System.Net.Mail.SmtpClient smtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com", Convert.ToInt32(587));
            System.Net.NetworkCredential credentials = new System.Net.NetworkCredential("noreplypbem@gmail.com", "Amarelinho");
            smtpClient.Credentials = credentials;
            smtpClient.EnableSsl = true;
            try
            {
                smtpClient.Send(msg);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception",
                ex.ToString());
            }


            return Ok();
        }

        private bool PageContentExists(int id)
        {
            return _context.PageContent.Any(e => e.Id == id);
        }
    }
}