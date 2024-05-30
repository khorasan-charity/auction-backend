using Mahak.Auction.Entities.GiftCards;
using Mahak.Auction.Entities.Payments;
using Mahak.Auction.Entities.Subjects;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.SettingManagement.EntityFrameworkCore;

namespace Mahak.Auction.Data;

public class AuctionDbContext : AbpDbContext<AuctionDbContext>
{
    public DbSet<Subject> Subjects { get; set; }
    public DbSet<Payment> Payments { get; set; }
    public DbSet<GiftCard> GiftCards { get; set; }

    public AuctionDbContext(DbContextOptions<AuctionDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */
        builder.ConfigureSettingManagement();
        builder.ConfigureAuditLogging();

        builder.Entity<Subject>(b =>
        {
            b.ToTable("Subjects");
            b.ConfigureByConvention();

            b.Property(x => x.Title)
                .IsRequired();
            b.Property(x => x.TargetAmount)
                .IsRequired();
            b.Property(x => x.Color)
                .IsRequired(false);
            b.Property(x => x.Order)
                .IsRequired();
        });
        
        builder.Entity<Payment>(b =>
        {
            b.ToTable("Payments");
            b.ConfigureByConvention();

            b.Property(x => x.Name)
                .IsRequired(false);
            b.Property(x => x.Amount)
                .IsRequired();
        });
        
        builder.Entity<GiftCard>(b =>
        {
            b.ToTable("GiftCards");
            b.ConfigureByConvention();

            b.Property(x => x.Code)
                .IsRequired();
            b.Property(x => x.InitialCreditAmount)
                .IsRequired();
            b.Property(x => x.RemainedCreditAmount)
                .IsRequired();
            b.Property(x => x.ExpirationTime)
                .IsRequired(false);
            b.Property(x => x.CheckInCount)
                .IsRequired();
            b.Property(x => x.IsEnabled)
                .IsRequired();
        });
    }
}
