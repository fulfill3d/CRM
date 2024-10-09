import React from 'react';
import ServiceTab from "@/components/client/nearby/service-tab";
import HistoryTab from "@/components/client/history/history-tab";
import CustomTabs from "@/components/common/custom-tabs";

interface ClientViewProps {}

const ClientView: React.FC<ClientViewProps> = () => {

    const tabsData = [
        {
            value: "nearby",
            label: "Nearby Services",
            tab_content: <ServiceTab />
        },
        {
            value: "history",
            label: "My Appointments",
            tab_content: <HistoryTab />
        }
    ]

    return (
        <div className="w-full h-full pt-4 overflow-y-scroll items-center justify-center">
            <CustomTabs tabs={tabsData}/>
        </div>
    );
}

export default ClientView;
