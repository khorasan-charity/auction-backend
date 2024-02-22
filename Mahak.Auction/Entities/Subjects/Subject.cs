using Volo.Abp.Domain.Entities.Auditing;

namespace Mahak.Auction.Entities.Subjects;

public class Subject : AuditedAggregateRoot<int>
{
    public required string Title { get; set; }
    public long TargetAmount { get; set; }
    public string? Color { get; set; }
    public int Order { get; set; }
}