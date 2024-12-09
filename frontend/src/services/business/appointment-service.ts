import {httpRequest} from "@/services/common/http-request";
import {BusinessAppointment} from "@/utils/endpoints";
import {Appointment} from "@/models/business/models";

export const getStoreAppointments = async (storeId: number, accessToken: string): Promise<Appointment[]> => {
    try {
        const response = await httpRequest(
            BusinessAppointment.GetAppointments(storeId).Uri,
            BusinessAppointment.GetAppointments(storeId).Method,
            null,
            undefined,
            accessToken
        );
        return response.map((appointment: any) => Appointment.fromJSON(appointment));
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
};

export const cancelStoreAppointment = async (appointmentId: number, accessToken: string) => {
    try {
        return await httpRequest(
            BusinessAppointment.CancelAppointment(appointmentId).Uri,
            BusinessAppointment.CancelAppointment(appointmentId).Method,
            null,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}
