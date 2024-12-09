using Newtonsoft.Json.Linq;

namespace CRM.API.Client.Identity.Services.Interfaces
{
    public interface ITokenService
    {
        Task<JObject?> ExchangeCodeForTokenAsync(string code, bool update = false);
    }
}