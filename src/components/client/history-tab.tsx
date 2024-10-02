import React from "react";
import AppointmentGrid, {AppointmentListProps} from "@/components/client/appointment-grid";

const HistoryTab: React.FC<AppointmentListProps> = ({ appointments }) => {
    return (
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <AppointmentGrid appointments={appointments}/>
            </div>
        </div>
    );
}

export default HistoryTab;
