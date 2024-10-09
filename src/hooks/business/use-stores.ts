import { useEffect, useState } from "react";
import { Store } from "@/models/business/models";
import {getStores} from "@/services/business/store-service";
import {mockStores} from "@/mock/business/mock-data";
import {useBusinessAccessToken} from "@/msal/use-access-token";

export const useStores = (refresh: boolean) => {
    const accessToken = useBusinessAccessToken();
    const [stores, setStores] = useState<Store[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken) {
            setLoading(true);
            getStores(accessToken)
                .then((fetchedStores) => {
                    setStores(fetchedStores);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        } else {
            setStores(mockStores.map(store => Store.fromJSON(store)));
        }
    }, [accessToken, refresh]);

    return { stores, loading, error };
};
