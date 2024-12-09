import React from "react";
import AppointmentCard from "@/components/client/history/appointment-card";
import {useClientAppointments} from "@/hooks/client/use-client-appointments";
import {AppointmentStatus} from "@/components/business/store/appointment/appointment-tab";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";
import {Appointment} from "@/models/client/models";

interface AppointmentGridProps {
    refresh: boolean;
    selectedAppointmentStatus: AppointmentStatus | 'all';
    onAppointmentEdit: (appointment: Appointment) => void;
    onAppointmentCancel: (id: number) => void;
}

const AppointmentGrid: React.FC<AppointmentGridProps> = (props) => {
    const { clientAppointments , loading, error } = useClientAppointments(props.refresh);

    const filteredAppointments = () => {
        if (props.selectedAppointmentStatus === 'all') return clientAppointments || [];
        return clientAppointments?.filter(appointment => appointment.appointment_status === props.selectedAppointmentStatus) || [];
    };

    if (loading) {return (<Loading/>);}

    if (error) {return (<ErrorPage error={new Error(error)} reset={() => window.location.reload()}/>);}

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Check if appointments exist and map over them */}
            {filteredAppointments().length > 0 ? (
                filteredAppointments().map((appointmentData, index) => (
                    <AppointmentCard
                        key={index}
                        appointment={appointmentData}
                        onEdit={() => {
                            const appointment = clientAppointments.find(appointment => appointment.appointment_id == appointmentData.appointment_id);
                            if (appointment) props.onAppointmentEdit(appointment);
                        }}
                        onCancel={() => props.onAppointmentCancel(appointmentData.appointment_id)}
                    />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500">
                    No appointments found.
                </div>
            )}
        </div>
    );
}

export default AppointmentGrid;
