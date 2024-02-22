using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Mahak.Auction.Data;

public class AuctionDbContextFactory : IDesignTimeDbContextFactory<AuctionDbContext>
{
    public AuctionDbContext CreateDbContext(string[] args)
    {

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<AuctionDbContext>()
            .UseSqlite(configuration.GetConnectionString("Default"));

        return new AuctionDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
