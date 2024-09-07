import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { storeAppointments, stores, storeServices } from "@/mock/business/mock-data";
import StoreCard from "@/components/business/store/store-card";
import EmployeeCard from "@/components/business/store/employee-card";
import ServiceCard from "@/components/business/store/service-card";
import AppointmentCard from "@/components/business/store/appointment-card";
import CustomTabs from "@/components/common/custom-tabs";
import useHttp from "@/hooks/common/use-http";
import React, { useEffect, useState } from "react";
import { Store, StoreService } from "@/models/business/models";
import { useAccessToken } from "@/msal/use-access-token";
import { BusinessManagement } from "@/utils/endpoints";
import {SkeletonCard} from "@/components/common/skeleton-card";

interface BusinessViewComponent2Props {
    isProtected: boolean;
}

const BusinessView2: React.FC<BusinessViewComponent2Props> = ({ isProtected }) => {
    const storeId = useSelector((state: RootState) => state.store.storeId);
    const [store, setStore] = useState<Store | null>(null);
    const [storeService, setStoreService] = useState<StoreService | null>(null);
    const { loading, error, request } = useHttp();

    const scopes = [
        process.env.NEXT_PUBLIC_B2C_SCOPE_BUSINESS_MANAGEMENT_READ || "",
        process.env.NEXT_PUBLIC_B2C_SCOPE_BUSINESS_MANAGEMENT_WRITE || ""
    ];

    const accessToken = useAccessToken(isProtected ? scopes : []);

    useEffect(() => {
        if (isProtected && accessToken && storeId) {
            request(
                BusinessManagement.GetStore(storeId).Uri,
                BusinessManagement.GetStore(storeId).Method,
                null,
                undefined,
                accessToken
            ).then(response => {
                const mappedStore = new Store(response);
                setStore(mappedStore);
            });
            request(
                BusinessManagement.GetServices(storeId).Uri,
                BusinessManagement.GetServices(storeId).Method,
                null,
                undefined,
                accessToken
            ).then(response => {
                const mappedServices = new StoreService(response);
                setStoreService(mappedServices);
            });
        } else if (!isProtected && storeId) {
            const currentStore = stores.find(store => store.id === storeId);
            const currentService = storeServices.find(service => service.store_id === storeId);
            if (currentStore) setStore(new Store(currentStore));
            if (currentService) setStoreService(new StoreService(currentService));
        }
    }, [accessToken, request, storeId, isProtected]);

    const currentAppointments = storeAppointments.find(app => app.store_id === storeId);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full h-full items-center justify-center">
                    <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full h-full items-center justify-center">
                    Error: {error}
                </div>
            </div>
        );
    }

    if (!store || !storeService) {
        return null;
    }

    const tabsData = [
        {
            value: "store",
            label: "Store",
            tab_content: <StoreCard data={store} />,
        },
        {
            value: "employees",
            label: "Employees",
            tab_content: <EmployeeCard data={store.employees} />
        },
        {
            value: "services",
            label: "Services",
            tab_content: <ServiceCard data={storeService} />
        },
        {
            value: "appointments",
            label: "Appointments",
            tab_content: <AppointmentCard data={currentAppointments} />
        }
    ];

    return (
        <div className="w-full h-full overflow-y-scroll items-center justify-center pt-24">
            <CustomTabs tabs={tabsData} />
        </div>
    );
};

export default BusinessView2;
