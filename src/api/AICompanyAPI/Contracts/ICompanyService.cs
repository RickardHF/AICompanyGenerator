namespace AICompanyAPI.Contracts
{
    public interface ICompanyService
    {
        public Task<CompanyDetails> GetCompanyDetails(string input);
    }
}
