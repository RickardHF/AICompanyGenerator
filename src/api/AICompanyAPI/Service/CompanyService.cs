
namespace AICompanyAPI.Service
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;
        public CompanyService(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }
        public async Task<CompanyDetails> GetCompanyDetails(string input)
        {
            var name = await _companyRepository.GetCompanyName(input);
            var slogan = await _companyRepository.GetCompanySlogan(name, input);
            var colors = await _companyRepository.GetCompanyColors(input);

            return new CompanyDetails
            {
                Name = name.Trim(),
                Slogan = slogan.Trim(),
                Colors = colors.Select(c => c.Substring(c.IndexOf("#"), 7))
            };
        }
    }

}