import {httpRequest} from "@/services/common/http-request";
import {ClientAppointment} from "@/utils/endpoints";
import {Appointment, AppointmentRequest} from "@/models/client/models";

export const getClientAppointments = async (accessToken: string) => {
    try {
        const response = await httpRequest(
            ClientAppointment.GetAppointments.Uri,
            ClientAppointment.GetAppointments.Method,
            null,
            undefined,
            accessToken
        );

        if (response) return response.map((appointment: any) => new Appointment(appointment));
        return [];

    } catch (error) {
        throw new Error("Failed to fetch appointments.");
    }
}

export const setClientAppointment = async (accessToken: string, request: AppointmentRequest) => {
    try {
        return await httpRequest(
            ClientAppointment.SetAppointment.Uri,
            ClientAppointment.SetAppointment.Method,
            request,
            undefined,
            accessToken
        );

    } catch (error) {
        throw new Error("Failed to set appointments.");
    }
}

export const updateClientAppointment = async (accessToken: string, body: AppointmentRequest) => {
    try {
        return await httpRequest(
            ClientAppointment.UpdateAppointment.Uri,
            ClientAppointment.UpdateAppointment.Method,
            body,
            undefined,
            accessToken
        );

    } catch (error) {
        throw new Error("Failed to fetch appointments.");
    }
}


export const cancelClientAppointment = async (accessToken: string, appointmentId: number) => {
    try {
        await httpRequest(
            ClientAppointment.CancelAppointment(appointmentId).Uri,
            ClientAppointment.CancelAppointment(appointmentId).Method,
            null,
            undefined,
            accessToken
        );

    } catch (error) {
        throw new Error("Failed to fetch appointments.");
    }
}
