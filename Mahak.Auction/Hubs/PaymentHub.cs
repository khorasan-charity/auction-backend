using Microsoft.AspNetCore.SignalR;

namespace Mahak.Auction.Hubs;

public class PaymentHub : Hub
{
    public override Task OnConnectedAsync()
    {
        Console.WriteLine(Context);
        return base.OnConnectedAsync();
    }
}