using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BibEmMovimento.Migrations
{
    public partial class criaçãobancodedados : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PageContent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Page = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    Add_Info = table.Column<string>(nullable: true),
                    Image_src = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageContent", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PageContent");
        }
    }
}
