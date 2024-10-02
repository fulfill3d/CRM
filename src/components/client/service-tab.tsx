import {Service} from "@/models/client/models";
import React from "react";
import ServiceGrid from "@/components/client/service-grid";


interface ServiceListProps {
    services: Service[];
}

const ServiceTab: React.FC<ServiceListProps> = ({ services }) => {
    return(
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <ServiceGrid services={services}/>
            </div>
        </div>
    );
}

export default ServiceTab;
