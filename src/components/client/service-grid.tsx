// Assuming you have the Service class and related data structures
import ServiceCard from "@/components/client/service-card";
import {Service} from "@/models/client/models";
import React from "react";

interface ServiceListProps {
    services: Service[];
}

const ServiceGrid: React.FC<ServiceListProps> = ({ services }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    );
};

export default ServiceGrid;
