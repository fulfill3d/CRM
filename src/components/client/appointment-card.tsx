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
                return { label: "Scheduled", color: "bg-green-200 text-green-700" };
            case AppointmentStatus.CANCELED:
                return { label: "Canceled", color: "bg-red-200 text-red-700" };
            case AppointmentStatus.COMPLETED:
                return { label: "Completed", color: "bg-blue-200 text-blue-700" };
            default:
                return { label: "Unknown", color: "bg-gray-200 text-gray-700" };
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
