import { useState, useEffect } from "react";
import { Store } from "@/models/business/models";
import { getStoreById } from "@/services/business/store-service";
import { mockStores } from "@/mock/business/mock-data";
import {useBusinessAccessToken} from "@/msal/use-access-token";

export const useGetStoreDetails = (storeId: number) => {
    const accessToken = useBusinessAccessToken();
    const [store, setStore] = useState<Store | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken && storeId) {
            setLoading(true);
            getStoreById(storeId, accessToken)
                .then(fetchedStore => setStore(fetchedStore))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            // For non-protected mode, fetch from mock data
            const currentStore = mockStores.find(store => store.id === storeId);
            if (currentStore) setStore(Store.fromJSON(currentStore));
        }
    }, [accessToken, storeId]);

    return { store, loading, error };
};
