using AICompanyAPI.config;
using AICompanyAPI.Contracts;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Orchestration;
using Microsoft.SemanticKernel.SkillDefinition;

namespace AICompanyAPI.Repository
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly IKernel _kernel;
        private readonly IDictionary<string, ISKFunction> _skills;
        public CompanyRepository(KernelConfig config) 
        {
            _kernel = new KernelBuilder().WithKernelConfig(config).Build();
            _skills = _kernel.ImportSemanticSkillFromDirectory(Path.Combine(System.IO.Directory.GetCurrentDirectory(), "skills"), "CompanySkills");
        }
        public async Task<string[]> GetCompanyColors(string input)
        {
            throw new NotImplementedException();
        }

        public async Task<string> GetCompanyName(string input)
        {
            var context = new ContextVariables();
            context.Set("input", input);
            var result = await _kernel.RunAsync(context, _skills["Naming"]);

            return result.Result;
        }

        public Task<string> GetCompanySlogan(string companyName, string input)
        {
            throw new NotImplementedException();
        }
    }
}
