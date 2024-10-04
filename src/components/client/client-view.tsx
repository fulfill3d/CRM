import React, { useEffect, useState } from 'react';
import { nearbyServices as mockNearbyServices, appointments as mockAppointments } from '@/mock/client/mock-data';
import useHttp from '@/hooks/common/use-http';
import { useAccessToken } from '@/msal/use-access-token';
import { ClientAppointment, ClientService } from '@/utils/endpoints';
import { Appointment, Service } from '@/models/client/models';
import { SkeletonCard } from '@/components/common/skeleton-card';
import ServiceTab from "@/components/client/service-tab";
import HistoryTab from "@/components/client/history-tab";
import CustomTabs from "@/components/common/custom-tabs";
import ErrorPage from "@/app/error";

interface ClientViewProps {
    isProtected: boolean;
}

const ClientView: React.FC<ClientViewProps> = ({ isProtected }) => {
    const { loading, error, request } = useHttp();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [nearbyServices, setNearbyServices] = useState<Service[]>([]);

    const scopes = [
        process.env.NEXT_PUBLIC_B2C_SCOPE_CLIENT_SERVICE_READ || "",
        process.env.NEXT_PUBLIC_B2C_SCOPE_CLIENT_SERVICE_WRITE || "",
        process.env.NEXT_PUBLIC_B2C_SCOPE_CLIENT_APPOINTMENT_READ || "",
        process.env.NEXT_PUBLIC_B2C_SCOPE_CLIENT_APPOINTMENT_WRITE || ""
    ];

    const accessToken = useAccessToken(isProtected ? scopes : []);

    useEffect(() => {
        if (isProtected && accessToken) {
            request(
                ClientAppointment.GetAppointments.Uri,
                ClientAppointment.GetAppointments.Method,
                null,
                undefined,
                accessToken
            ).then(response => {
                const mappedAppointments = response.map((appointment: any) => new Appointment(appointment));
                setAppointments(mappedAppointments);
            });

            request(
                ClientService.GetServices.Uri,
                ClientService.GetServices.Method,
                null,
                undefined,
                accessToken
            ).then(response => {
                const mappedServices = response.map((service: any) => new Service(service));
                setNearbyServices(mappedServices);
            });
        } else {
            setAppointments(mockAppointments.map(app => new Appointment(app)));
            setNearbyServices(mockNearbyServices.map(service => new Service(service)));
        }
    }, [isProtected, accessToken, request]);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full h-full items-center justify-center">
                    <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        const err = new Error(error)
        return (
            <ErrorPage error={err} reset={() => window.location.reload()}/>
        );
    }

    const tabsData = [
        {
            value: "nearby",
            label: "Nearby Services",
            tab_content: <ServiceTab services={nearbyServices} />
        },
        {
            value: "history",
            label: "My Appointments",
            tab_content: <HistoryTab appointments={appointments}/>
        }
    ]

    return (
        <div className="w-full h-full pt-4 overflow-y-scroll items-center justify-center">
            <CustomTabs tabs={tabsData}/>
        </div>
    );
}

export default ClientView;
