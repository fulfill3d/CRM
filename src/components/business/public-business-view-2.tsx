import {appointments, storeAppointments, stores, storeServices} from "@/mock/business/mock-data";
import StoreCard from "@/components/business/store/store-card";
import EmployeeCard from "@/components/business/store/employee-card";
import ServiceCard from "@/components/business/store/service-card";
import CustomTabs from "@/components/common/custom-tabs";
import AppointmentCard from "@/components/business/store/appointment-card";

const PublicBusinessView2 = () => {
    const storeId = 1;
    const currentStore= stores.find(store => store.id === storeId);
    const currentService = storeServices.find(service => service.store_id === storeId)

    const currentAppointments = storeAppointments.find(app => app.store_id === storeId);

    if (!currentStore || !currentService) {
        return null
    }

    const tabsData = [
        {
            value: "store",
            label: "Store",
            tab_content: <StoreCard data={currentStore}/>,
        },
        {
            value: "employees",
            label: "Employees",
            tab_content: <EmployeeCard data={currentStore.employees}/>
        },
        {
            value: "services",
            label: "Services",
            tab_content: <ServiceCard data={currentService}/>
        },
        {
            value: "appointments",
            label: "Appointments",
            tab_content: <AppointmentCard data={currentAppointments}/>
        }
    ];

    return (
        <div className="w-full h-full overflow-y-scroll items-center justify-center mt-24">
            <CustomTabs tabs={tabsData}/>
        </div>
    );
}

export default PublicBusinessView2
