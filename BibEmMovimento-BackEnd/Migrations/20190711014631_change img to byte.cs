using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BibEmMovimento.Migrations
{
    public partial class changeimgtobyte : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Img_Src",
                table: "Photo");

            migrationBuilder.AddColumn<byte[]>(
                name: "Img",
                table: "Photo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Img",
                table: "Photo");

            migrationBuilder.AddColumn<string>(
                name: "Img_Src",
                table: "Photo",
                nullable: true);
        }
    }
}
