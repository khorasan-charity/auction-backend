using AutoMapper;
using Mahak.Auction.Entities.Payments;
using Mahak.Auction.Entities.Subjects;
using Mahak.Auction.Services.Dtos.Payments;
using Mahak.Auction.Services.Dtos.Subjects;

namespace Mahak.Auction.ObjectMapping;

public class AuctionAutoMapperProfile : Profile
{
    public AuctionAutoMapperProfile()
    {
        CreateMap<Subject, SubjectDto>();
        CreateMap<CreateUpdateSubjectInputDto, Subject>();

        CreateMap<Payment, PaymentDto>();
        CreateMap<CreateUpdatePaymentInputDto, Payment>();
    }
}
