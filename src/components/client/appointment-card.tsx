import React from "react";
import {Appointment} from "@/models/client/models";
import {AppointmentStatus} from "@/components/business/store/appointment-tab";

export interface AppointmentCardProps {
    appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
    // Function to get the appointment status label and color
    const getStatusDetails = (status: number) => {
        switch (status) {
            case AppointmentStatus.SCHEDULED:
                return { label: "SCHEDULED", color: "bg-blue-100 text-blue-600" };
            case AppointmentStatus.CANCELED:
                return { label: "CANCELED", color: "bg-red-100 text-red-600" };
            case AppointmentStatus.COMPLETED:
                return { label: "COMPLETED", color: "bg-green-100 text-green-600" };
            default:
                return { label: "Unknown", color: "bg-gray-100 text-gray-600" };
        }
    };

    const statusDetails = getStatusDetails(appointment.appointment_status);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
                {/* Appointment Service Name */}
                <h3 className="text-xl font-bold">{appointment.appointment_service.service_name}</h3>

                {/* Appointment Status */}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusDetails.color}`}>
                    {statusDetails.label}
                </span>
            </div>

            {/* Appointment Date */}
            <div className="text-gray-600 mb-4">
                <strong>Date:</strong> {new Date(appointment.appointment_start_date).toLocaleString()}
            </div>

            {/* Appointment Address */}
            <div className="text-gray-600 mb-4">
                <strong>Location:</strong> {appointment.appointment_address.address_street1}, {appointment.appointment_address.address_city}, {appointment.appointment_address.address_state}, {appointment.appointment_address.address_zip_code}, {appointment.appointment_address.address_country}
            </div>

            {/* Appointment Service Details */}
            <div className="text-gray-600 mb-4">
                <strong>Service Duration:</strong> {appointment.appointment_service.service_duration} minutes
            </div>

            <div className="text-gray-600">
                <strong>Service Price:</strong> {appointment.appointment_service.service_price} {appointment.appointment_service.service_currency}
            </div>

            {/* Appointment Notes */}
            {appointment.appointment_notes && (
                <div className="text-gray-600 mt-4">
                    <strong>Notes:</strong> {appointment.appointment_notes}
                </div>
            )}
        </div>
    );
};

export default AppointmentCard;
