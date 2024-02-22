using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;

namespace Mahak.Auction.Data;

public class AuctionEFCoreDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public AuctionEFCoreDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the AuctionDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<AuctionDbContext>()
            .Database
            .MigrateAsync();
    }
}
