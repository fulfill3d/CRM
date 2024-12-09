import {useBusinessAccessToken} from "@/msal/use-access-token";
import { editStoreService} from "@/services/business/service-service";
import { ServiceRequest} from "@/models/business/models";

export const useEditStoreService = () => {
    const accessToken = useBusinessAccessToken();

    const handleEditStoreService = async (
        service: ServiceRequest,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await editStoreService(service, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleEditStoreService }
}
