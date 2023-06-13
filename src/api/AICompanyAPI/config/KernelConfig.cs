using Microsoft.AspNetCore.Http.HttpResults;
using System.Text.Json.Serialization;

public class KernelConfig
{
    public const string ConfigFileName = "appsettings.json";

    [JsonPropertyName("ServiceType")]
    public string ServiceType { get; set; } = string.Empty;
    [JsonPropertyName("ServiceId")]
    public string ServiceId { get; set; } = string.Empty;
    [JsonPropertyName("ModelId")]
    public string ModelId { get; set; } = string.Empty;
    [JsonPropertyName("ApiKey")]
    public string ApiKey { get; set; } = string.Empty;
    [JsonPropertyName("OrganizationId")]
    public string OrganizationId { get; set; } = string.Empty;
    [JsonPropertyName("Endpoint")]
    public string Endpoint { get; set; } = string.Empty;
    
    public static KernelConfig LoadSettings()
    {
        if (File.Exists(ConfigFileName))
        {
            return LoadSettingsFromFile();
        }
        else
        {
            throw new Exception("appsettings file missing");
        }
    }

    private static KernelConfig LoadSettingsFromFile()
    {
        var config = new ConfigurationBuilder()
            .AddJsonFile(ConfigFileName)
            .Build();

        // Extract the AIConnection settings
        var aiConnection = config.GetSection("AIConnection");
        var kernelConfig = new KernelConfig
        {
            ServiceType = aiConnection["ServiceType"],
            ServiceId = aiConnection["ServiceId"],
            ModelId = aiConnection["ModelId"],
            ApiKey = aiConnection["ApiKey"],
            OrganizationId = aiConnection["OrganizationId"],
            Endpoint = aiConnection["Endpoint"]
        };

        return kernelConfig;
    }

}
