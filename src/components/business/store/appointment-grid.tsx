import React from 'react';
import AppointmentCard from "@/components/business/store/appointment-card";
import {AppointmentProps} from "@/components/business/store/appointment-tab";

interface AppointmentListProps {
    appointments?: AppointmentProps[];
}

const AppointmentGrid: React.FC<AppointmentListProps> = ({ appointments }) => {

    if (!appointments || appointments.length === 0) {
        return (
            <div className="text-center p-4">
                <p className="text-gray-500">No appointments available.</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appointment, index) => (
                <AppointmentCard
                    key={index}
                    customer={appointment.customer}
                    email={appointment.email}
                    service={appointment.service}
                    status={appointment.status}
                    date={appointment.date}
                    duration={appointment.duration}
                />
            ))}
        </div>
    );
};

export default AppointmentGrid;
