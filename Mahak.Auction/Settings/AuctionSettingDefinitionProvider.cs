using Volo.Abp.Settings;

namespace Mahak.Auction.Settings;

public class AuctionSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        context.Add(new SettingDefinition(AuctionSettings.GlobalSettings, """
                                                                          {
                                                                            "children": {
                                                                                "costPerYear": 13000000,
                                                                                "totalNeededSupportCount": 230
                                                                            }
                                                                          }
                                                                          """));
    }
}