using Volo.Abp.Domain.Entities.Auditing;

namespace Mahak.Auction.Entities.Payments;

public class Payment : AuditedAggregateRoot<int>
{
    public string? Name { get; set; }
    public long Amount { get; set; }
}