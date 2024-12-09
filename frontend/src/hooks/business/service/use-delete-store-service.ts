import {useBusinessAccessToken} from "@/msal/use-access-token";
import {deleteStoreService} from "@/services/business/service-service";

export const useDeleteStoreService = () => {
    const accessToken = useBusinessAccessToken();

    const handleDeleteStoreService = async (
        serviceId: number,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await deleteStoreService(serviceId, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleDeleteStoreService }
}
