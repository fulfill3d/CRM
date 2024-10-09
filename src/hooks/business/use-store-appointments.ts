import { useState, useEffect } from "react";
import { getStoreAppointments } from "@/services/business/appointment-service";
import { mockStoreAppointments } from "@/mock/business/mock-data";
import {AppointmentProps} from "@/components/business/store/appointment/appointment-tab";

export const useStoreAppointments = (storeId: number, accessToken: string | null) => {
    const [storeAppointments, setStoreAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken && storeId) {
            setLoading(true);
            getStoreAppointments(storeId)
                .then(fetchedAppointments => {
                    if (fetchedAppointments) setStoreAppointments(fetchedAppointments.appointments)
                })
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            // For non-protected mode, fetch from mock data
            const currentAppointments = mockStoreAppointments.find(app => app.store_id === storeId);
            if (currentAppointments) setStoreAppointments(currentAppointments.appointments);
        }
    }, [accessToken, storeId]);

    return { storeAppointments, loading, error };
};
