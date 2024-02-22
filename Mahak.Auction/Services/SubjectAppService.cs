using Mahak.Auction.Entities.Subjects;
using Mahak.Auction.Services.Dtos.Subjects;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Mahak.Auction.Services;

public class SubjectAppService(IRepository<Subject, int> repository) : CrudAppService<
    Subject,
    SubjectDto,
    int,
    PagedResultRequestDto,
    CreateUpdateSubjectInputDto>(repository)
{
    protected override IQueryable<Subject> ApplyDefaultSorting(IQueryable<Subject> query)
    {
        return query.OrderBy(e => e.Order);
    }
}