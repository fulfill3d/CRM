using Newtonsoft.Json;

namespace CRM.API.Business.Store.Data.Models
{
    public class StoreLocationViewModel
    {
        [JsonProperty("location_id")] public int LocationId {get; set; }
        [JsonProperty("address_id")] public int AddressId {get; set; }
        [JsonProperty("created_at")] public DateTime CreatedAt {get; set; }
        [JsonProperty("updated_at")] public DateTime UpdatedAt {get; set; }
        [JsonProperty("location_name")] public string LocationName {get; set; }
        [JsonProperty("latitude")] public decimal Latitude {get; set; }
        [JsonProperty("longitude")] public decimal Longitude {get; set; }
        [JsonProperty("address_first_name")] public string AddressFirstName {get; set; }
        [JsonProperty("address_last_name")] public string AddressLastName {get; set; }
        [JsonProperty("street1")] public string Street1 {get; set; }
        [JsonProperty("street2")] public string? Street2 {get; set; }
        [JsonProperty("city")] public string City { get; set; }
        [JsonProperty("state")] public string State { get; set; }
        [JsonProperty("country")] public string Country { get; set; }
        [JsonProperty("zip_code")] public string ZipCode { get; set; }
    }
}