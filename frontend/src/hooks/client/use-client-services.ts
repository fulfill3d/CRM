import {useEffect, useState} from "react";
import {Service} from "@/models/client/models";
import {nearbyServices as mockNearbyServices} from "@/mock/client/mock-data";
import {getClientServices} from "@/services/client/service-service";
import {useClientAccessToken} from "@/msal/use-access-token";

export const useClientServices = () => {
    const accessToken = useClientAccessToken();
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken) {
            setLoading(true);
            getClientServices(accessToken)
                .then(services => setServices(services))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            setServices(mockNearbyServices.map(service => new Service(service)));
        }
    }, [accessToken]);

    return {services, loading, error};
}
