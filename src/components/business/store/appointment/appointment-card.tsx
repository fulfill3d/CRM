import React from 'react';
import { AppointmentProps, AppointmentStatus } from "@/components/business/store/appointment/appointment-tab";

interface AppointmentCardProps {
    appointment: AppointmentProps;
    onCancel: (id: number) => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onCancel }) => {
    // Define a color for each status
    const getStatusColor = () => {
        switch (appointment.status) {
            case AppointmentStatus.SCHEDULED:
                return 'text-blue-600'; // Blue for scheduled
            case AppointmentStatus.CANCELED:
                return 'text-red-600'; // Red for canceled
            case AppointmentStatus.COMPLETED:
                return 'text-green-600'; // Green for completed
            default:
                return 'text-gray-600'; // Default gray for unknown
        }
    };

    // Convert status to a readable format
    const getStatusText = () => {
        switch (appointment.status) {
            case AppointmentStatus.SCHEDULED:
                return 'SCHEDULED';
            case AppointmentStatus.CANCELED:
                return 'CANCELED';
            case AppointmentStatus.COMPLETED:
                return 'COMPLETED';
            default:
                return 'Unknown';
        }
    };

    const handleCancel = () => {
        // Add your cancel logic here
        onCancel(appointment.id);
    };

    return (
        <div className="relative max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                {/* Customer Name */}
                <h2 className="text-xl font-bold text-gray-800">{appointment.customer}</h2>

                {/* Service Name */}
                <p className="text-gray-600 mt-1">Service: {appointment.service}</p>

                {/* Email */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Email</span>
                    <p className="text-gray-800">{appointment.email}</p>
                </div>

                {/* Date */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Date</span>
                    <p className="text-gray-800">{appointment.date}</p>
                </div>

                {/* Duration */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Duration</span>
                    <p className="text-gray-800">{appointment.duration}</p>
                </div>

                {/* Status */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Status</span>
                    <p className={`text-md font-bold ${getStatusColor()}`}>{getStatusText()}</p>
                </div>
            </div>

            {/* Cancel Button (visible only if status is SCHEDULED) */}
            <div className="absolute bottom-4 right-4">
                <button
                    disabled={appointment.status !== AppointmentStatus.SCHEDULED} // Disable if not scheduled
                    className={`px-4 py-2 rounded-lg transition-all ${
                        appointment.status === AppointmentStatus.SCHEDULED
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AppointmentCard;