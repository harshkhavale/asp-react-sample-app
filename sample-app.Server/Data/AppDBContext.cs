using sample_app.Server.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace sample_app.Server.Data

{
    
        public class AppDbContext : DbContext
        {
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
            {
            }

            public DbSet<User> Users { get; set; }
        }
    
}
