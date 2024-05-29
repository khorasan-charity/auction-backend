using Mahak.Auction.Entities.GiftCards;
using Mahak.Auction.Services.Dtos.GiftCards;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Mahak.Auction.Services;

public class GiftCardAppService(IRepository<GiftCard, int> repository) : CrudAppService<
    GiftCard,
    GiftCardDto,
    int,
    PagedResultRequestDto,
    CreateUpdateGiftCardInputDto>(repository)
{
    public async Task<GiftCardDto> GetByCodeAsync(string code)
    {
        var giftCard = await Repository.GetAsync(x => x.Code == code);
        return ObjectMapper.Map<GiftCard, GiftCardDto>(giftCard);
    }

    public async Task GetCheckInAsync(string code)
    {
        var now = Clock.Now;
        var giftCard = await Repository.GetAsync(x =>
            x.Code == code && x.IsEnabled && (x.ExpirationTime == null || x.ExpirationTime > now));
        giftCard.CheckInCount++;
        await Repository.UpdateAsync(giftCard);
    }

    public async Task DisableAsync(string code)
    {
        var giftCard = await Repository.GetAsync(x => x.Code == code);
        if (giftCard.IsEnabled)
        {
            giftCard.IsEnabled = false;
            await Repository.UpdateAsync(giftCard);
        }
    }

    public async Task EnableAsync(string code)
    {
        var giftCard = await Repository.GetAsync(x => x.Code == code);
        if (!giftCard.IsEnabled)
        {
            giftCard.IsEnabled = true;
            await Repository.UpdateAsync(giftCard);
        }
    }
}