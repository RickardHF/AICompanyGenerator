namespace AICompanyAPI.Contracts
{
    public interface ICompanyService
    {
        public string GetCompanyName(string input);
        public string GetCompanySlogan(string companyName, string input);
        public string[] GetCompanyColors(string input);
    }
}
