
namespace AICompanyAPI.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpPost()]
        public async Task<IActionResult> Get([FromBody] CompanyInput input)
        {
            if (string.IsNullOrEmpty(input?.Input))
                return BadRequest("Input is required");
            try
            {
                var result = await _companyService.GetCompanyDetails(input.Input);
                return new OkObjectResult(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}