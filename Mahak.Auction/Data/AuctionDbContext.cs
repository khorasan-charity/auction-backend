using Mahak.Auction.Entities.Payments;
using Mahak.Auction.Entities.Subjects;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Mahak.Auction.Data;

public class AuctionDbContext : AbpDbContext<AuctionDbContext>
{
    public DbSet<Subject> Subjects { get; set; }
    public DbSet<Payment> Payments { get; set; }
    
    public AuctionDbContext(DbContextOptions<AuctionDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */
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
    }
}
