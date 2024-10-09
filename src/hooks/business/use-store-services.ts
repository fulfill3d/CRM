import { useState, useEffect } from "react";
import {Service} from "@/models/business/models";
import { getStoreServices } from "@/services/business/service-service";
import { mockStoreServices } from "@/mock/business/mock-data";

export const useStoreServices = (storeId: number, accessToken: string | null) => {
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
            if (currentStore) setStoreServices(currentStore.services.map(service => new Service(service)));
        }
    }, [accessToken, storeId]);

    return { storeServices, loading, error };
};
