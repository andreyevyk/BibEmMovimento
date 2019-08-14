using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BibEmMovimento.Models;

namespace BibEmMovimento.Models
{
    public class BibEmMovimentoContext : DbContext
    {
        public BibEmMovimentoContext (DbContextOptions<BibEmMovimentoContext> options)
            : base(options)
        {
        }

        public DbSet<PageContent> PageContent { get; set; }

        public DbSet<Photo> Photo { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
