import {useClientAccessToken} from "@/msal/use-access-token";
import {useState} from "react";
import {AppointmentRequest} from "@/models/client/models";
import {setClientAppointment} from "@/services/client/appointment-service";

export const useSetClientAppointment = () => {
    const accessToken = useClientAccessToken();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSetAppointment = async (
        request: AppointmentRequest,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken) {
            setLoading(true);
            try {
                await setClientAppointment(accessToken, request);
                onSuccess();
                setLoading(false);
            } catch (err: any) {
                onError(err.message);
                setLoading(false);
            }
        } else {
            onNoAccessToken();
        }
    }

    return {handleSetAppointment, loading, error};
}
