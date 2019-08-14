using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibEmMovimento.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
        public int? PageContentId { get; set; }
        public virtual PageContent PageContent { get; set; }
    }
}
