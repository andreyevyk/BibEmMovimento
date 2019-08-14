using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibEmMovimento.Models
{
    public class PageContent
    {
        public int Id { get; set; }
        public PageEnum Page { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Add_Info{ get; set; }
        public string ImgCover_Src { get; set; }

        public virtual ICollection<Photo> Photos { get; set; }
    }
}
