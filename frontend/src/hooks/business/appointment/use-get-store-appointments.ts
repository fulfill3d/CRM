import { useState, useEffect } from "react";
import { getStoreAppointments } from "@/services/business/appointment-service";
import { mockStoreAppointments } from "@/mock/business/mock-data";
import {useBusinessAccessToken} from "@/msal/use-access-token";
import {Appointment} from "@/models/business/models";

export const useGetStoreAppointments = (storeId: number, refresh: boolean) => {
    const accessToken = useBusinessAccessToken();
    const [storeAppointments, setStoreAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken && storeId) {
            setLoading(true);
            getStoreAppointments(storeId, accessToken)
                .then(appointments => setStoreAppointments(appointments))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            // For non-protected mode, fetch from mock data
            const currentAppointments = mockStoreAppointments.find(app => app.store_id === storeId);
            if (currentAppointments) setStoreAppointments(currentAppointments.appointments);
        }
    }, [accessToken, storeId, refresh]);

    return { storeAppointments, loading, error };
};
