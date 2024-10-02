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

interface ClientViewProps {
    isProtected: boolean;
}

const ClientView1: React.FC<ClientViewProps> = ({ isProtected }) => {
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
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full h-full items-center justify-center">
                    Error: {error}
                </div>
            </div>
        );
    }

    const tabsData = [
        {
            value: "nearby",
            label: "Nearby",
            tab_content: <ServiceTab services={nearbyServices} />
        },
        {
            value: "history",
            label: "History",
            tab_content: <HistoryTab appointments={appointments}/>
        }
    ]

    return (
        <div className="w-full h-full overflow-y-scroll items-center justify-center">
            <CustomTabs tabs={tabsData}/>
        </div>
        // <div className="w-full h-full">
        //     <div className="container mx-auto mt-10">
        //         <ServiceGrid services={nearbyServices}/>
        //     </div>
        //     <span>Client`s Appointment List</span>
        //     <textarea
        //         className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
        //         value={JSON.stringify(appointments, null, 4)}
        //         readOnly
        //     />
        //     <div className='flex items-center justify-center'>
        //         <div className='w-1/2'>
        //             <textarea
        //                 className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
        //                 value={JSON.stringify(newAppointmentMock, null, 4)}
        //                 readOnly
        //             />
        //             <div className='flex items-center justify-center'>
        //                 <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
        //                     <span>Make a New Appointment</span>
        //                 </Button>
        //             </div>
        //         </div>
        //         <div className='w-1/2'>
        //             <textarea
        //                 className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
        //                 value={JSON.stringify(updateAppointmentMock, null, 4)}
        //                 readOnly
        //             />
        //             <div className='flex items-center justify-center'>
        //                 <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
        //                     <span>Update an Appointment</span>
        //                 </Button>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='flex items-center justify-center p-2'>
        //         <span className='m-2'>Appointment Id</span>
        //         <textarea className='w-8 h-8 bg-transparent border border-gray-300 rounded resize-none m-2' value="1" readOnly />
        //         <Button className='bg-amber-100 rounded m-2' variant='default'>
        //             <span>Delete an Appointment</span>
        //         </Button>
        //     </div>
        // </div>
    );
}

export default ClientView1;
