namespace AICompanyAPI.Contracts
{
    public interface ICompanyRepository
    {
        public Task<string> GetCompanyName(string input);
        public Task<string> GetCompanySlogan(string companyName, string input);
        public Task<string[]> GetCompanyColors(string input);
    }
}
