import { useState } from "react";
import {addStore} from "@/services/business/store-service";
import {useBusinessAccessToken} from "@/msal/use-access-token";
import {Store} from "@/models/business/models";

export const useAddStore = () => {
    const accessToken = useBusinessAccessToken();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAddStore = async (
        newStore: Store,
        onSuccess: () => void,
        onNoAccessToken: () => void) => {
        if (accessToken) {
            setLoading(true);
            try {
                await addStore(newStore, accessToken);
                onSuccess(); // Success callback (e.g., refresh the store list)
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        } else {
            onNoAccessToken();
        }
    };

    return { handleAddStore, loading, error };
};
