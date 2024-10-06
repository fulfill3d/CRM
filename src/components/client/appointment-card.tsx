import React from "react";
import { Appointment } from "@/models/client/models";
import { AppointmentStatus } from "@/components/business/store/appointment/appointment-tab";

export interface AppointmentCardProps {
    appointment: Appointment;
    onEdit: () => void; // Callback for editing
    onCancel: () => void; // Callback for canceling
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onEdit, onCancel }) => {
    // Function to get the appointment status label and color
    const getStatusDetails = (status: number) => {
        switch (status) {
            case AppointmentStatus.SCHEDULED:
                return { label: "Scheduled", color: "bg-blue-100 text-blue-600" };
            case AppointmentStatus.CANCELED:
                return { label: "Canceled", color: "bg-red-100 text-red-600" };
            case AppointmentStatus.COMPLETED:
                return { label: "Completed", color: "bg-green-100 text-green-600" };
            default:
                return { label: "Unknown", color: "bg-gray-100 text-gray-600" };
        }
    };

    const statusDetails = getStatusDetails(appointment.appointment_status);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
                {/* Appointment Service Name */}
                <h3 className="text-2xl font-semibold text-gray-800">{appointment.appointment_service.service_name}</h3>

                {/* Appointment Status */}
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusDetails.color}`}>
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

            <div className="text-gray-600 mb-4">
                <strong>Service Price:</strong> {appointment.appointment_service.service_price} {appointment.appointment_service.service_currency}
            </div>

            {/* Appointment Notes */}
            {appointment.appointment_notes && (
                <div className="text-gray-600 mb-4">
                    <strong>Notes:</strong> {appointment.appointment_notes}
                </div>
            )}

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
                {/* Cancel Button */}
                <button
                    onClick={onCancel}
                    disabled={appointment.appointment_status !== AppointmentStatus.SCHEDULED} // Disable if not scheduled
                    className={`px-4 py-2 rounded-lg transition-all ${
                        appointment.appointment_status === AppointmentStatus.SCHEDULED
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Cancel
                </button>

                {/* Edit Button */}
                <button
                    onClick={onEdit}
                    disabled={appointment.appointment_status !== AppointmentStatus.SCHEDULED} // Disable if not scheduled
                    className={`px-4 py-2 rounded-lg transition-all ${
                        appointment.appointment_status === AppointmentStatus.SCHEDULED
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Edit
                </button>
            </div>

        </div>
    );
};

export default AppointmentCard;
