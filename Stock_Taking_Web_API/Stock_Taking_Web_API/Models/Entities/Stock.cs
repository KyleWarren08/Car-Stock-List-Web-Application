namespace Stock_Taking_Web_API.Models.Entities
{
    public class Stock
    {

        public Guid Id { get; set; }
        public string CarMakeModel { get; set; }    
        public int CarAmount { get; set; } 
        public string CarFeatures{ get; set; }  
        public bool IsVisable{ get; set; } 
    }
}
