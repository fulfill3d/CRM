import {useEffect, useState} from "react";
import {Appointment} from "@/models/client/models";
import {getClientAppointments} from "@/services/client/appointment-service";
import {appointments as mockAppointments} from "@/mock/client/mock-data";
import {useClientAccessToken} from "@/msal/use-access-token";

export const useClientAppointments = (refresh: boolean) => {
    const accessToken = useClientAccessToken();
    const [clientAppointments, setClientAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken) {
            setLoading(true);
            getClientAppointments(accessToken)
                .then(app => setClientAppointments(app))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            setClientAppointments(mockAppointments.map(app => new Appointment(app)));
        }
    }, [accessToken, refresh]);

    return { clientAppointments, loading, error };
}
