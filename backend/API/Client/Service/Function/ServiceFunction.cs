using System.Net;
using CRM.API.Client.Service.Data.Models.Response;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.OpenApi.Models;
using CRM.API.Client.Service.Services.Interfaces;
using CRM.Common.Services.Interfaces;
using CRM.Common.Services.Options;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace CRM.API.Client.Service
{
    public class ServiceFunction(
        IJwtValidatorService jwtValidatorService,
        IOptions<AuthorizationScope> opt,
        IServiceService serviceService)
    {
        private readonly AuthorizationScope _serviceScope = opt.Value;

        [Function(nameof(Services))]
        [OpenApiOperation(
            operationId: "Services",
            tags: new[] { "GetServices" },
            Description="The Services within given range and filter query parameters. " +
                        "Provide a correct zip code to get nearby services")]
        [OpenApiResponseWithBody(
            statusCode: HttpStatusCode.OK,
            contentType: "application/json",
            bodyType: typeof(List<ServiceViewModel>),
            Description = "List<ServiceViewModel> response")]
        public async Task<HttpResponseData> Services(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "services/get-all")]
            HttpRequestData req,
            FunctionContext executionContext)
        {
            var response = req.CreateResponse();
            var acceptedScopes = new[] { _serviceScope.Read };
            var clientRefId = await jwtValidatorService.AuthenticateAndAuthorize(req, acceptedScopes);
            
            if (clientRefId == null)
            {
                response.StatusCode = HttpStatusCode.Unauthorized;
                return response;
            }
            
            var queryParameters = QueryHelpers.ParseQuery(req.Url.Query);
            var services = await serviceService.GetServices(queryParameters);
            response.StatusCode = HttpStatusCode.OK;
            response.Headers.Add("Content-Type", "application/json");
            await response.WriteStringAsync(JsonConvert.SerializeObject(services));
            return response;
        }
        
        [Function(nameof(Service))]
        [OpenApiOperation(
            operationId: "GetService",
            tags: new[] { "GetService" }, 
            Description="Get a service in detail")]
        [OpenApiParameter(
            name: "integerId",
            In = ParameterLocation.Path,
            Required = true,
            Type = typeof(int),
            Description = "The integer ID parameter")]
        [OpenApiResponseWithBody(
            statusCode: HttpStatusCode.OK,
            contentType: "application/json",
            bodyType: typeof(ServiceDetailViewModel),
            Description = "ServiceDetailViewModel response")]
        public async Task<HttpResponseData> Service(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "services/get/{serviceId}")]
            HttpRequestData req,
            FunctionContext executionContext, 
            int serviceId)
        {
            var response = req.CreateResponse();
            var acceptedScopes = new[] { _serviceScope.Read };
            var clientRefId = await jwtValidatorService.AuthenticateAndAuthorize(req, acceptedScopes);
            
            if (clientRefId == null)
            {
                response.StatusCode = HttpStatusCode.Unauthorized;
                return response;
            }
            var service = await serviceService.GetService(serviceId);
            if (service == null)
            {
                response.StatusCode = HttpStatusCode.NotFound;
                return response;
            }
            response.StatusCode = HttpStatusCode.OK;
            response.Headers.Add("Content-Type", "application/json");
            await response.WriteStringAsync(JsonConvert.SerializeObject(service, Formatting.Indented));
            return response;
        }
    }
}