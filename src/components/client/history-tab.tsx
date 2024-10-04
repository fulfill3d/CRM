import React, {useState} from "react";
import AppointmentGrid, {AppointmentListProps} from "@/components/client/appointment-grid";
import {AppointmentStatus} from "@/components/business/store/appointment-tab";


// Function to dynamically determine the color based on the status
const getStatusColor = (status: AppointmentStatus | 'all') => {
    switch (status) {
        case AppointmentStatus.SCHEDULED:
            return { text: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-600' };
        case AppointmentStatus.CANCELED:
            return { text: 'text-red-600', bg: 'bg-red-100', border: 'border-red-600' };
        case AppointmentStatus.COMPLETED:
            return { text: 'text-green-600', bg: 'bg-green-100', border: 'border-green-600' };
        default:
            return { text: 'text-gray-600', bg: 'bg-gray-100', border: 'border-gray-600' };
    }
};

const HistoryTab: React.FC<AppointmentListProps> = ({ appointments }) => {
    const [selectedStatus, setSelectedStatus] = useState<AppointmentStatus | 'all'>('all');

    // List of filter options including 'all'
    const statusOptions = [
        { value: 'all' as const, label: 'All' },
        { value: AppointmentStatus.SCHEDULED, label: 'Scheduled' },
        { value: AppointmentStatus.CANCELED, label: 'Canceled' },
        { value: AppointmentStatus.COMPLETED, label: 'Completed' }
    ];

    // Filter appointments based on selected status
    const filteredAppointments = () => {
        if (selectedStatus === 'all') return appointments || [];
        return appointments?.filter(appointment => appointment.appointment_status === selectedStatus) || [];
    };

    return (
        <div className="w-full h-full">
            <text className="container mx-auto text-xl font-semibold">Your appointment history</text>
            <div className="container mx-auto mt-4 md:mt-0">
                {/* Button-like options to Filter by Status */}
                <div className="mb-8 flex flex-wrap justify-center items-center gap-4">
                    {statusOptions.map(option => {
                        const {text, bg, border} = getStatusColor(option.value);
                        const isSelected = selectedStatus === option.value;

                        return (
                            <button
                                key={option.value}
                                onClick={() => setSelectedStatus(option.value)}
                                className={`px-4 py-2 rounded-lg border ${isSelected ? `${bg} ${border}` : 'border-gray-300'} ${isSelected ? text : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-150 ease-in-out`}
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>
                <AppointmentGrid appointments={filteredAppointments()}/>
            </div>
        </div>
    );
}

export default HistoryTab;
