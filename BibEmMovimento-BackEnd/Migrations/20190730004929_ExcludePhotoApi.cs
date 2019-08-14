using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BibEmMovimento.Migrations
{
    public partial class ExcludePhotoApi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Img",
                table: "Photo",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Img",
                table: "Photo",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
