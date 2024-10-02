import React from 'react';
import {AppointmentProps, AppointmentStatus} from "@/components/business/store/appointment-tab";

const AppointmentCard: React.FC<AppointmentProps> = ({ customer, email, service, status, date, duration }) => {
    // Define a color for each status
    const getStatusColor = () => {
        switch (status) {
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
        switch (status) {
            case AppointmentStatus.SCHEDULED:
                return 'Scheduled';
            case AppointmentStatus.CANCELED:
                return 'Canceled';
            case AppointmentStatus.COMPLETED:
                return 'Completed';
            default:
                return 'Unknown';
        }
    };

    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                {/* Customer Name */}
                <h2 className="text-xl font-bold text-gray-800">{customer}</h2>

                {/* Service Name */}
                <p className="text-gray-600 mt-1">
                    Service: {service}
                </p>

                {/* Email */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Email</span>
                    <p className="text-gray-800">{email}</p>
                </div>

                {/* Status */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Status</span>
                    <p className={`text-sm ${getStatusColor()}`}>
                        {getStatusText()}
                    </p>
                </div>

                {/* Date */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Date</span>
                    <p className="text-gray-800">{date}</p>
                </div>

                {/* Duration */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Duration</span>
                    <p className="text-gray-800">{duration}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
