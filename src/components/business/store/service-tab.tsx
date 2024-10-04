import {serviceCategories,} from "@/mock/business/mock-data";
import {StoreService} from "@/models/business/models";
import ServiceAccordionGrid from "@/components/business/store/service-accordion-grid";
import ServiceCategoriesDropdown from "@/components/business/store/service-categories-dropdown";
import React from "react";

interface Props{
    data: StoreService
}

const ServiceTab = (props: Props) => {

    return (
        <div className="w-full h-full">
            <text className="container mx-auto text-xl font-semibold">Services of this store</text>
            <div className="container mx-auto mt-4 md:mt-0">
                <ServiceCategoriesDropdown data={serviceCategories}/>
            </div>
            <div className="container mx-auto mt-10">
                <ServiceAccordionGrid services={props.data.services}/>
            </div>
        </div>
    )
}

export default ServiceTab;
