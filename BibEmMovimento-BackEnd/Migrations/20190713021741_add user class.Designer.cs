﻿// <auto-generated />
using System;
using BibEmMovimento.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BibEmMovimento.Migrations
{
    [DbContext(typeof(BibEmMovimentoContext))]
    [Migration("20190713021741_add user class")]
    partial class adduserclass
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BibEmMovimento.Models.PageContent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Add_Info");

                    b.Property<string>("Content");

                    b.Property<string>("ImgCover_Src");

                    b.Property<int>("Page");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("PageContent");
                });

            modelBuilder.Entity("BibEmMovimento.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("Img");

                    b.Property<int?>("PageContentId");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("PageContentId");

                    b.ToTable("Photo");
                });

            modelBuilder.Entity("BibEmMovimento.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("FullName");

                    b.Property<string>("Password");

                    b.Property<string>("Username");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BibEmMovimento.Models.Photo", b =>
                {
                    b.HasOne("BibEmMovimento.Models.PageContent", "PageContent")
                        .WithMany("Photos")
                        .HasForeignKey("PageContentId");
                });
#pragma warning restore 612, 618
        }
    }
}
