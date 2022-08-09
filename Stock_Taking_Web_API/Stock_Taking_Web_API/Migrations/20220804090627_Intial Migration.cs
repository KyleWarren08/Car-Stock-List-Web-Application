using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Stock_Taking_Web_API.Migrations
{
    public partial class IntialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stock",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CarMakeModel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CarAmount = table.Column<int>(type: "int", nullable: false),
                    CarFeatures = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsVisable = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stock", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stock");
        }
    }
}
