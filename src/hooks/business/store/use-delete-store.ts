import {useBusinessAccessToken} from "@/msal/use-access-token";
import {deleteStore} from "@/services/business/store-service";

export const useDeleteStore = () => {
    const accessToken = useBusinessAccessToken();

    const handleDeleteStore = async (
        storeId: number,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await deleteStore(storeId, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleDeleteStore }
}
