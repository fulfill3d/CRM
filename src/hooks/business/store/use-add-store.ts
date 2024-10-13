import {addStore} from "@/services/business/store-service";
import {useBusinessAccessToken} from "@/msal/use-access-token";
import {Store} from "@/models/business/models";

export const useAddStore = () => {
    const accessToken = useBusinessAccessToken();

    const handleAddStore = async (
        newStore: Store,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken) {
            try {
                await addStore(newStore, accessToken);
                onSuccess(); // Success callback (e.g., refresh the store list)
            } catch (err: any) {
                onError(err.message);
            }
        } else {
            onNoAccessToken();
        }
    };

    return { handleAddStore };
};
