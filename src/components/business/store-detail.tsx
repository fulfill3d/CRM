import { storeAppointments, stores, storeServices } from "@/mock/business/mock-data";
import EmployeeTab from "@/components/business/store/employee-tab";
import ServiceTab from "@/components/business/store/service-tab";
import AppointmentTab from "@/components/business/store/appointment-tab";
import CustomTabs from "@/components/common/custom-tabs";
import useHttp from "@/hooks/common/use-http";
import React, { useEffect, useState } from "react";
import { Store, StoreService } from "@/models/business/models";
import { useAccessToken } from "@/msal/use-access-token";
import { BusinessManagement } from "@/utils/endpoints";
import {SkeletonCard} from "@/components/common/skeleton-card";

interface StoreDetailProps {
    isProtected: boolean;
    storeId: number;
}

const StoreDetail: React.FC<StoreDetailProps> = (params) => {
    const [store, setStore] = useState<Store | null>(null);
    const [storeService, setStoreService] = useState<StoreService | null>(null);
    const { loading, error, request } = useHttp();

    const scopes = [
        process.env.NEXT_PUBLIC_B2C_SCOPE_BUSINESS_MANAGEMENT_READ || "",
        process.env.NEXT_PUBLIC_B2C_SCOPE_BUSINESS_MANAGEMENT_WRITE || ""
    ];

    const accessToken = useAccessToken(params.isProtected ? scopes : []);

    useEffect(() => {
        if (params.isProtected && accessToken && params.storeId) {
            request(
                BusinessManagement.GetStore(params.storeId).Uri,
                BusinessManagement.GetStore(params.storeId).Method,
                null,
                undefined,
                accessToken
            ).then(response => {
                const mappedStore = new Store(response);
                setStore(mappedStore);
            });
            request(
                BusinessManagement.GetServices(params.storeId).Uri,
                BusinessManagement.GetServices(params.storeId).Method,
                null,
                undefined,
                accessToken
            ).then(response => {
                const mappedServices = new StoreService(response);
                setStoreService(mappedServices);
            });
        } else if (!params.isProtected && params.storeId) {
            const currentStore = stores.find(store => store.id === params.storeId);
            const currentService = storeServices.find(service => service.store_id === params.storeId);
            if (currentStore) setStore(new Store(currentStore));
            if (currentService) setStoreService(new StoreService(currentService));
        }
    }, [accessToken, request, params]);

    const currentAppointments = storeAppointments.find(app => app.store_id === params.storeId);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
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
            <div className="min-h-screen flex flex-col items-center justify-center">
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
            value: "employees",
            label: "Employees",
            tab_content: <EmployeeTab data={store.employees} />
        },
        {
            value: "services",
            label: "Services",
            tab_content: <ServiceTab data={storeService} />
        },
        {
            value: "appointments",
            label: "Appointments",
            tab_content: <AppointmentTab data={currentAppointments} />
        }
    ];

    return (
        <div className="w-full h-full overflow-y-scroll items-center justify-center">
            <CustomTabs tabs={tabsData} />
        </div>
    );
};

export default StoreDetail;
