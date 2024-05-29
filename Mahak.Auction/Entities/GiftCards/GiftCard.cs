using Volo.Abp.Domain.Entities.Auditing;

namespace Mahak.Auction.Entities.GiftCards;

public class GiftCard : AuditedAggregateRoot<int>
{
    public required string Code { get; set; }
    public long InitialCreditAmount { get; set; }
    public long RemainedCreditAmount { get; set; }
    public DateTime? ExpirationTime { get; set; }
    public int CheckInCount { get; set; }
    public bool IsEnabled { get; set; }
}