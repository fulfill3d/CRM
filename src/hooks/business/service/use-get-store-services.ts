import { useState, useEffect } from "react";
import {Service} from "@/models/business/models";
import { getStoreServices } from "@/services/business/service-service";
import { mockStoreServices } from "@/mock/business/mock-data";
import {useBusinessAccessToken} from "@/msal/use-access-token";

export const useGetStoreServices = (storeId: number, refresh: boolean) => {
    const accessToken = useBusinessAccessToken();
    const [storeServices, setStoreServices] = useState<Service[]>([]); // This should be an array
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken && storeId) {
            setLoading(true);
            getStoreServices(storeId, accessToken)
                .then(fetchedServices => setStoreServices(fetchedServices))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            const currentStore = mockStoreServices.find(service => service.store_id === storeId);
            if (currentStore) setStoreServices(currentStore.services.map(service => Service.fromJSON(service)));
        }
    }, [accessToken, storeId, refresh]);

    return { storeServices, loading, error };
};
