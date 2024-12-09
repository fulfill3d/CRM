import React, {useState} from "react";
import {AppointmentStatus} from "@/components/business/store/appointment/appointment-tab";

interface AppointmentFilterProps{
    onFilterChange:(value: AppointmentStatus | 'all') => void;
}

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

const AppointmentFilter: React.FC<AppointmentFilterProps> = (props) => {
    const [selectedStatus, setSelectedStatus] = useState<AppointmentStatus | 'all'>('all');

    const statusOptions = [
        { value: 'all' as const, label: 'All' },
        { value: AppointmentStatus.SCHEDULED, label: 'Scheduled' },
        { value: AppointmentStatus.CANCELED, label: 'Canceled' },
        { value: AppointmentStatus.COMPLETED, label: 'Completed' }
    ];

    return (
        <div className="mb-8 flex flex-wrap justify-center items-center gap-4">
            {statusOptions.map(option => {
                const {text, bg, border} = getStatusColor(option.value);
                const isSelected = selectedStatus === option.value;

                return (
                    <button
                        key={option.value}
                        onClick={() => {
                            setSelectedStatus(option.value);
                            props.onFilterChange(option.value)
                        }}
                        className={`px-4 py-2 rounded-lg border ${isSelected ? `${bg} ${border}` : 'border-gray-300'} ${isSelected ? text : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-150 ease-in-out`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}

export default AppointmentFilter;
