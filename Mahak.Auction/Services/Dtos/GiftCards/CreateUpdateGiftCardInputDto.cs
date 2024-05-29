namespace Mahak.Auction.Services.Dtos.GiftCards;

public class CreateUpdateGiftCardInputDto
{
    public string Code { get; set; }
    public long InitialCreditAmount { get; set; }
    public long RemainedCreditAmount { get; set; }
    public DateTime? ExpirationTime { get; set; }
    public int CheckInCount { get; set; }
    public bool IsEnabled { get; set; }
}