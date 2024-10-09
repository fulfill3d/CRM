import ServiceGrid from "@/components/business/store/service/service-grid";
import ServiceCategoriesDropdown from "@/components/business/store/service/service-categories-dropdown";
import React from "react";

interface ServiceTabProps{
    storeId: number;
}

const ServiceTab: React.FC<ServiceTabProps> = ({storeId}) => {
    return (
        <div className="w-full h-full">
            <text className="container mx-auto text-xl font-semibold">Services of this store</text>
            <div className="container mx-auto mt-4 md:mt-0">
                <ServiceCategoriesDropdown />
            </div>
            <div className="container mx-auto mt-10">
                <ServiceGrid storeId={storeId}/>
            </div>
        </div>
    )
}

export default ServiceTab;
