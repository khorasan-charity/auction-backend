using ClosedXML.Excel;
using DocumentFormat.OpenXml.Spreadsheet;
using Mahak.Auction.Entities.Payments;
using Mahak.Auction.Hubs;
using Mahak.Auction.Services.Dtos.Payments;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;
using Volo.Abp.Domain.Repositories;

namespace Mahak.Auction.Services;

public class PaymentAppService(IRepository<Payment, int> repository, IHubContext<PaymentHub> paymentHub) : CrudAppService<
    Payment,
    PaymentDto,
    int,
    PagedResultRequestDto,
    CreateUpdatePaymentInputDto>(repository)
{
    public async Task<long> GetTotalAsync()
    {
        var q = await Repository.GetQueryableAsync();
        return await AsyncExecuter.SumAsync(q, x => x.Amount);
    }

    public async Task<IRemoteStreamContent> GetExportExcelAsync()
    {
        var payments = await ReadOnlyRepository.GetListAsync();
        
        using var workbook = new XLWorkbook();

        var sheet = workbook.Worksheets.Add("Payments");
        sheet.Cell(1, 1).Value = "ردیف";
        sheet.Cell(1, 2).Value = "عنوان";
        sheet.Cell(1, 3).Value = "مبلغ";
        sheet.Cell(1, 4).Value = "زمان";
        var rowNumber = 1;
        foreach (var payment in payments)
        {
            sheet.Cell(rowNumber + 1, 1).Value = rowNumber;
            sheet.Cell(rowNumber + 1, 2).Value = payment.Name;
            sheet.Cell(rowNumber + 1, 3).Value = payment.Amount;
            sheet.Cell(rowNumber + 1, 4).Value = payment.CreationTime;
            rowNumber++;
        }

        var ms = new MemoryStream();
        workbook.SaveAs(ms);
        ms.Seek(0, SeekOrigin.Begin);

        return new RemoteStreamContent(ms, $"Payments-{Clock.Now:yyyy-M-d hh-mm-ss}.xlsx");
    }

    public override async Task<PaymentDto> CreateAsync(CreateUpdatePaymentInputDto input)
    {
         var result = await base.CreateAsync(input);
         
         await paymentHub.Clients.All.SendAsync("CreatePayment", result);

         return result;
    }

    public override async Task<PaymentDto> UpdateAsync(int id, CreateUpdatePaymentInputDto input)
    {
        var result = await  base.UpdateAsync(id, input);
        
        await paymentHub.Clients.All.SendAsync("UpdatePayment", result);

        return result;
    }

    public override async Task DeleteAsync(int id)
    {
        var paymentDto = await GetAsync(id);
        
        await base.DeleteAsync(id);
        
        await paymentHub.Clients.All.SendAsync("RemovePayment", paymentDto);
    }
}