import {useClientAccessToken} from "@/msal/use-access-token";
import {useEffect, useState} from "react";
import { ServiceDetail } from "@/models/client/models";
import {getClientService} from "@/services/client/service-service";
import {nearbyServices as mockNearbyServices} from "@/mock/client/mock-data";

export const useClientService = (serviceId: number | null) => {
    const accessToken = useClientAccessToken();
    const [serviceDetail, setServiceDetail] = useState<ServiceDetail | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken && serviceId) {
            setLoading(true);
            getClientService(serviceId, accessToken)
                .then(service => setServiceDetail(service))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            const mockService = mockNearbyServices.find(service => service.id === serviceId);
            if (mockService) setServiceDetail(mockService.detail);
        }
    }, [accessToken, serviceId]);

    return {serviceDetail, loading, error};
}
