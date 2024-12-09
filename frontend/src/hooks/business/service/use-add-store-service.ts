import {useBusinessAccessToken} from "@/msal/use-access-token";
import {addStoreService} from "@/services/business/service-service";
import { ServiceRequest} from "@/models/business/models";

export const useAddStoreService = () => {
    const accessToken = useBusinessAccessToken();

    const handleAddStoreService = async (
        service: ServiceRequest,
        storeId: number,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await addStoreService(service, storeId, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleAddStoreService }
}
