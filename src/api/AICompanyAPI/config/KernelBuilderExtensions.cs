using Microsoft.SemanticKernel;

namespace AICompanyAPI.config
{
    public static class KernelBuilderExtensions
    {
        public static KernelBuilder WithKernelConfig(this KernelBuilder builder, KernelConfig config)
        {
            switch (config.ServiceType.ToUpperInvariant())
            {
                case "AZUREOPENAI":
                    builder.WithAzureTextCompletionService(config.ModelId, config.Endpoint, apiKey: config.ApiKey, serviceId: config.ServiceId); 
                    break;
                case "OPENAI":
                    builder.WithOpenAITextCompletionService(config.ModelId, config.ApiKey, config.OrganizationId, config.ServiceId);
                    break;
                default:
                    throw new ArgumentException($"Invalid ServiceType: {config.ServiceType}");
            }

            return builder;
        }
    }
}
