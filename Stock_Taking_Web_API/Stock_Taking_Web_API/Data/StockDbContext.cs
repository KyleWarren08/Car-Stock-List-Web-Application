using Microsoft.EntityFrameworkCore;
using Stock_Taking_Web_API.Models.Entities;

namespace Stock_Taking_Web_API.Data
{
    public class StockDbContext: DbContext
    {

        public StockDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Stock> Stock { get; set; }
    }
}
