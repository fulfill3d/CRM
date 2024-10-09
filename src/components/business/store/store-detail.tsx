import React from "react";
import EmployeeTab from "@/components/business/store/employee/employee-tab";
import ServiceTab from "@/components/business/store/service/service-tab";
import AppointmentTab from "@/components/business/store/appointment/appointment-tab";
import CustomTabs from "@/components/common/custom-tabs";
import StoreTab from "@/components/business/store/store-tab";

interface StoreDetailProps {
    storeId: number;
}

const StoreDetail: React.FC<StoreDetailProps> = ({ storeId }) => {

    const tabsData = [
        {
            value: "store",
            label: "Store",
            tab_content: <StoreTab storeId={storeId} />
        },
        {
            value: "employees",
            label: "Employees",
            tab_content: <EmployeeTab storeId={storeId} />
        },
        {
            value: "services",
            label: "Services",
            tab_content: <ServiceTab storeId={storeId}/> // Pass list of services
        },
        {
            value: "appointments",
            label: "Appointments",
            tab_content: <AppointmentTab storeId={storeId} />
        }
    ];

    return (
        <div className="w-full h-full pt-4 overflow-y-scroll items-center justify-center">
            <CustomTabs tabs={tabsData} />
        </div>
    );
};

export default StoreDetail;
