import AppointmentCard from "@/components/client/appointment-card";
import React from "react";
import {Appointment} from "@/models/client/models";

export interface AppointmentListProps {
    appointments?: Appointment[];
}

const AppointmentGrid: React.FC<AppointmentListProps> = ({ appointments }) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Check if appointments exist and map over them */}
            {appointments && appointments.length > 0 ? (
                appointments.map((appointmentData, index) => (
                    <AppointmentCard key={index} appointment={appointmentData} />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500">
                    No appointments found.
                </div>
            )}
        </div>
    )
}

export default AppointmentGrid;
