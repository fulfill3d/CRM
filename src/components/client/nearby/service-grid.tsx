import React from "react";
import ServiceCard from "@/components/client/nearby/service-card";
import NoServiceCard from "@/components/client/nearby/no-service-card";
import {useClientServices} from "@/hooks/client/use-client-services";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

interface ServiceListProps {
    onServiceCardClick: (id: number) => void
}

const ServiceGrid: React.FC<ServiceListProps> = (props) => {

    const { services, loading, error } = useClientServices();

    if (loading) {return (<Loading/>);}

    if (error) {return (<ErrorPage error={new Error(error)} reset={() => window.location.reload()}/>);}

    return (
        <div className="container mx-auto">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 ">
                {services.length > 0 ? (
                    services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onClick={() => props.onServiceCardClick(service.id)} // Pass click handler
                        />
                    ))
                ) : (
                    <NoServiceCard/>
                )}
            </div>
        </div>
    );
};

export default ServiceGrid;
