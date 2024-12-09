import React from 'react';
import AddCard from "@/components/common/add-card";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";
import ServiceCard from "@/components/business/store/service/service-card";
import NoServiceCard from "@/components/business/store/service/no-service-card";
import {useServiceData} from "@/hooks/business/service/use-service-data";
import {ServiceRequest} from "@/models/business/models";

interface ServiceGridProps {
    refresh: boolean;
    storeId: number;
    triggerDelete: (id: number) => void;
    triggerEdit: (service: ServiceRequest) => void;
    onAddService: () => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = (props) => {
    const { storeServices, loading, error } = useServiceData(props.storeId, props.refresh);

    if (loading) return <Loading />;
    if (error) return <ErrorPage error={new Error(error || "Unknown error")} reset={() => window.location.reload()} />;

    return (
        <div className="container mx-auto mt-10">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                {storeServices.length > 0 ? (
                    storeServices.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onDelete={() => {if (service.id) props.triggerDelete(service.id);}}
                            onEdit={() => props.triggerEdit(ServiceRequest.fromService(service))}
                        />
                    ))
                ) : (
                    <NoServiceCard/>
                )}
                <div className="flex items-center justify-center">
                    <AddCard onClick={props.onAddService}/>
                </div>
            </div>
        </div>
    );
};

export default ServiceGrid;
