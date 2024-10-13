import {useClientAccessToken} from "@/msal/use-access-token";
import {AppointmentRequest} from "@/models/client/models";
import {updateClientAppointment} from "@/services/client/appointment-service";

export const useEditClientAppointment = () => {
    const accessToken = useClientAccessToken();

    const handleEditAppointment = async (
        request: AppointmentRequest,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        
        if (accessToken){
            try {
                await updateClientAppointment(accessToken, request);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleEditAppointment }
}
