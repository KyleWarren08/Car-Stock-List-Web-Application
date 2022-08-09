using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stock_Taking_Web_API.Data;
using Stock_Taking_Web_API.Models.Entities;

namespace Stock_Taking_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockController : Controller
    {
        private readonly StockDbContext stockDbContext;

        public StockController(StockDbContext stockDbContext)
        {
            this.stockDbContext = stockDbContext;
        }
        //Get all stock
        [HttpGet]
        public async Task<IActionResult> GetAllStock()
        {
            //Get The stock from the database
            return Ok(await stockDbContext.Stock.ToListAsync());

        }
        //Get indervidual stock
        [HttpGet]
        [Route("{id:Guid}")]
        [ActionName("GetStockById")]
        public async Task<IActionResult> GetStockById([FromRoute] Guid id)
        {

            //await stockDbContext.Stock.FirstOrDefault(x => x.Id == id);         
            var stock = await stockDbContext.Stock.FindAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock);
        }

        [HttpPost]
        public async Task<IActionResult> AddStock(Stock stock)
        {
            stock.Id = Guid.NewGuid(); 
            await stockDbContext.Stock.AddAsync(stock);
            await stockDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStockById), new { id = stock.Id }, stock);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateStock([FromRoute] Guid id, [FromBody] Stock updatedStock)
        {
            var currentStock = await stockDbContext.Stock.FindAsync(id); 

            if (currentStock == null)
            {
                return NotFound();
            }

            currentStock.CarMakeModel = updatedStock.CarMakeModel;
            currentStock.CarFeatures = updatedStock.CarFeatures;    
            currentStock.CarAmount = updatedStock.CarAmount;
            currentStock.IsVisable = updatedStock.IsVisable;

            await stockDbContext.SaveChangesAsync();
            return Ok(currentStock);    
        }  

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteStock([FromRoute] Guid id)
        {
            var currentStock = await stockDbContext.Stock.FindAsync(id);

            if (currentStock == null)
            {
                return NotFound();
            }

            stockDbContext.Stock.Remove(currentStock);
            await stockDbContext.SaveChangesAsync();

            return Ok();
        }

    }
}
