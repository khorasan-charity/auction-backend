namespace Mahak.Auction.Services.Dtos.Payments;

public class CreateUpdatePaymentInputDto
{
    public string? Name { get; set; }
    public long Amount { get; set; }
}