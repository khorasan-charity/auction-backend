using Volo.Abp.Application.Dtos;

namespace Mahak.Auction.Services.Dtos.Payments;

public class PaymentDto : AuditedEntityDto<int>
{
    public string? Name { get; set; }
    public long Amount { get; set; }
}