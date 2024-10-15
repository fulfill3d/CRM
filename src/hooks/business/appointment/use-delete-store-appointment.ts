import {useBusinessAccessToken} from "@/msal/use-access-token";
import {cancelStoreAppointment} from "@/services/business/appointment-service";

export const useDeleteStoreAppointment = () => {
    const accessToken = useBusinessAccessToken();

    const handleCancelStoreAppointment = async (
        appointmentId: number,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await cancelStoreAppointment(appointmentId, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleCancelStoreAppointment }
}
