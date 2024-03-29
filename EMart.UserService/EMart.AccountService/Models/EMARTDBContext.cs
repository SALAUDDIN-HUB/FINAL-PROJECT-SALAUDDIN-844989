﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EMart.AccountService.Models
{
    public partial class EMARTDBContext : DbContext
    {
        public EMARTDBContext()
        {
        }

        public EMARTDBContext(DbContextOptions<EMARTDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discounts> Discounts { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-I3GJCG7\\SQLEXPRESS;Initial Catalog=EMARTDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasIndex(e => e.Emailid)
                    .HasName("UQ__Buyer__8734520BB829ED6A")
                    .IsUnique();

                entity.HasIndex(e => e.MobileNumber)
                    .HasName("UQ__Buyer__A81EEE8D3FDADC97")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Createdatetime)
                    .HasColumnName("createdatetime")
                    .HasColumnType("date");

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasColumnName("emailid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNumber)
                    .IsRequired()
                    .HasColumnName("mobileNumber")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.HasKey(e => e.Cartid)
                    .HasName("PK__cart__41663FC0BB43693C");

                entity.ToTable("cart");

                entity.Property(e => e.Cartid)
                    .HasColumnName("cartid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasColumnName("image")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDescription)
                    .HasColumnName("item_description")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .HasColumnName("item_name")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sellerid)
                    .HasColumnName("sellerid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StockNumber).HasColumnName("stock_number");

                entity.Property(e => e.SubCategoryId)
                    .HasColumnName("Sub_category_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__cart__BuyerId__5FB337D6");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__cart__category_i__5DCAEF64");

                entity.HasOne(d => d.IdNavigation)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Id)
                    .HasConstraintName("FK__cart__id__5CD6CB2B");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Sellerid)
                    .HasConstraintName("FK__cart__sellerid__60A75C0F");

                entity.HasOne(d => d.SubCategory)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.SubCategoryId)
                    .HasConstraintName("FK__cart__Sub_catego__5EBF139D");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BriefDetails)
                    .IsRequired()
                    .HasColumnName("brief_details")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasColumnName("category_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discounts>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountCode)
                    .IsRequired()
                    .HasColumnName("Discount_code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("end_date")
                    .HasColumnType("date");

                entity.Property(e => e.Percentage)
                    .HasColumnName("percentage")
                    .HasColumnType("decimal(5, 2)");

                entity.Property(e => e.StartDate1)
                    .HasColumnName("start_date1")
                    .HasColumnType("date");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.ToTable("items");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasColumnName("image")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDescription)
                    .IsRequired()
                    .HasColumnName("item_description")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasColumnName("item_name")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .IsRequired()
                    .HasColumnName("remarks")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sellerid)
                    .HasColumnName("sellerid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StockNumber).HasColumnName("stock_number");

                entity.Property(e => e.SubCategoryId)
                    .HasColumnName("Sub_Category_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__items__category___1DE57479");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Sellerid)
                    .HasConstraintName("FK__items__sellerid__1FCDBCEB");

                entity.HasOne(d => d.SubCategory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubCategoryId)
                    .HasConstraintName("FK__items__Sub_Categ__1ED998B2");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerId)
                    .HasColumnName("Buyer_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("date");

                entity.Property(e => e.ItemId)
                    .HasColumnName("Item_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Numberofitems)
                    .HasColumnName("numberofitems")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .IsRequired()
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId)
                    .HasColumnName("Seller_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionType)
                    .HasColumnName("transaction_type")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__PurchaseH__Buyer__22AA2996");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__PurchaseH__Item___24927208");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__PurchaseH__Selle__239E4DCF");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasIndex(e => e.ContactNumber)
                    .HasName("UQ__Seller__570665C6BC17EDF6")
                    .IsUnique();

                entity.HasIndex(e => e.Emailid)
                    .HasName("UQ__Seller__8734520BB2EC8E4A")
                    .IsUnique();

                entity.HasIndex(e => e.Gstin)
                    .HasName("UQ__Seller__D7AED076A66E2CF8")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BriefAboutCompany)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasColumnName("companyName")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ContactNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasColumnName("emailid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .IsRequired()
                    .HasColumnName("postalAddress")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .IsRequired()
                    .HasColumnName("website")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.ToTable("Sub_Category");

                entity.Property(e => e.SubCategoryId)
                    .HasColumnName("Sub_Category_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BriefDetails)
                    .IsRequired()
                    .HasColumnName("Brief_details")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gst)
                    .IsRequired()
                    .HasColumnName("gst")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SubCategoryName)
                    .IsRequired()
                    .HasColumnName("Sub_Category_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Sub_Categ__categ__1B0907CE");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
