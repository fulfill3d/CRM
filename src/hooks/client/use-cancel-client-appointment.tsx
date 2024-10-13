import {useClientAccessToken} from "@/msal/use-access-token";
import {cancelClientAppointment} from "@/services/client/appointment-service";

export const useCancelClientAppointment = () => {
    const accessToken = useClientAccessToken();

    const handleCancelAppointment = async (
        appointmentId: number,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await cancelClientAppointment(accessToken, appointmentId);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleCancelAppointment }
}
