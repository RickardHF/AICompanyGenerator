﻿
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
            var context = new ContextVariables();
            context.Set("input", input);
            var result = await _kernel.RunAsync(context, _skills["Colors"]);
            return result.Result.Split(",");
        }

        public async Task<string> GetCompanyName(string input)
        {
            var context = new ContextVariables();
            context.Set("input", input);
            var result = await _kernel.RunAsync(context, _skills["Naming"]);

            return result.Result;
        }

        public async Task<string> GetCompanySlogan(string companyName, string input)
        {
            var context = new ContextVariables();
            context.Set("name", companyName);
            context.Set("input", input);
            var result = await _kernel.RunAsync(context, _skills["Slogan"]);

            return result.Result;
        }
    }
}
