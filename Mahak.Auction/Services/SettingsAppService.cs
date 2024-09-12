using System.Text.Json;
using Mahak.Auction.Settings;
using Volo.Abp.Application.Services;
using Volo.Abp.SettingManagement;

namespace Mahak.Auction.Services;

public class SettingsAppService(ISettingManager settingManager) : ApplicationService
{
    private static readonly JsonSerializerOptions JsonSerializerOptions = new JsonSerializerOptions
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true
    };

    public async Task<JsonElement> GetSettingsAsync()
    {
        var settingsJson = await settingManager.GetOrNullGlobalAsync(AuctionSettings.GlobalSettings);
        return JsonSerializer.Deserialize<JsonElement>(settingsJson, JsonSerializerOptions);
    }

    public async Task<JsonElement> SetAsync(string key, string value)
    {
        var settingsJson = await settingManager.GetOrNullGlobalAsync(AuctionSettings.GlobalSettings);
        var settings = JsonSerializer.Deserialize<Dictionary<string, object?>>(settingsJson, JsonSerializerOptions);
        if (settings != null)
        {
            settings[key] = value;
        }

        await settingManager.SetGlobalAsync(AuctionSettings.GlobalSettings,
            JsonSerializer.Serialize(settings, JsonSerializerOptions));

        return await GetSettingsAsync();
    }

    public async Task<JsonElement> UpdateSettingsAsync(JsonElement content)
    {
        await settingManager.SetGlobalAsync(AuctionSettings.GlobalSettings, content.GetRawText());
        return await GetSettingsAsync();
    }
}