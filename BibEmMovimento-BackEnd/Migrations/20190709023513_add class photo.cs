using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BibEmMovimento.Migrations
{
    public partial class addclassphoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Image_src",
                table: "PageContent",
                newName: "ImgCover_Src");

            migrationBuilder.CreateTable(
                name: "Photo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(nullable: true),
                    Img_Src = table.Column<string>(nullable: true),
                    PageContentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Photo_PageContent_PageContentId",
                        column: x => x.PageContentId,
                        principalTable: "PageContent",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Photo_PageContentId",
                table: "Photo",
                column: "PageContentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Photo");

            migrationBuilder.RenameColumn(
                name: "ImgCover_Src",
                table: "PageContent",
                newName: "Image_src");
        }
    }
}
