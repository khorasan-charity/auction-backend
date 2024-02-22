namespace Mahak.Auction.Services.Dtos.Subjects;

public class CreateUpdateSubjectInputDto
{
    public required string Title { get; set; }
    public long TargetAmount { get; set; }
    public string? Color { get; set; }
    public int Order { get; set; }
}