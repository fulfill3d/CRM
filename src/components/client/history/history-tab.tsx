import React, {useState} from "react";
import AppointmentContainer from "@/components/client/history/appointment-container";
import {AppointmentStatus} from "@/components/business/store/appointment/appointment-tab";
import AppointmentFilter from "@/components/client/history/appointment-filter";

interface HistoryTabProps {}

const HistoryTab: React.FC<HistoryTabProps> = () => {
    const [selectedStatus, setSelectedStatus] = useState<AppointmentStatus | 'all'>('all');

    return (
        <div className="w-full h-full">
            <text className="container mx-auto text-xl font-semibold">
                Your appointment history
            </text>

            {/* AppointmentFilter to Filter by Status */}
            <AppointmentFilter
                onFilterChange={(status) => setSelectedStatus(status)}
            />

            {/* AppointmentContainer */}
            <AppointmentContainer selectedAppointmentStatus={selectedStatus}/>

        </div>
    );
}

export default HistoryTab;
