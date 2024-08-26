import {appointments, storeAppointments, stores, storeServices} from "@/mock/business/mock-data";
import StoreCard from "@/components/business/store/store-card";
import EmployeeCard from "@/components/business/store/employee-card";
import ServiceCard from "@/components/business/store/service-card";
import CustomTable from "@/components/common/custom-table";
import CustomTabs from "@/components/common/custom-tabs";

const PublicBusinessView2 = () => {
    const storeId = 1;
    const currentStore= stores.find(store => store.id === storeId);
    const currentService = storeServices.find(service => service.store_id === storeId)

    const currentAppointments = storeAppointments.find(app => app.store_id === storeId);

    const appointmentRows = currentAppointments ? currentAppointments.appointments.map(app => ({
        customer: app.customer,
        email: app.email,
        type: app.service,  // You can customize the type as needed
        status: app.status,
        date: app.date,
        duration: app.duration,
        amount: app.amount
    })) : [];

    const appointmentsData = {
        ...appointments,
        rows: appointmentRows
    };

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
        }
    ];

    return (
        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto space-y-4 md:space-y-0 md:space-x-4">
            <CustomTable data={appointmentsData}/>
            <CustomTabs tabs={tabsData}/>
        </div>
    );
}

export default PublicBusinessView2
