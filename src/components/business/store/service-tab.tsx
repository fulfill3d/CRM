import {serviceCategories,} from "@/mock/business/mock-data";
import {StoreService} from "@/models/business/models";
import ServiceAccordionGrid from "@/components/business/store/service-accordion-grid";
import ServiceCategoriesDropdown from "@/components/business/store/service-categories-dropdown";

interface Props{
    data: StoreService
}

const ServiceTab = (props: Props) => {
    return (
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <ServiceCategoriesDropdown data={serviceCategories}/>
            </div>
            <div className="container mx-auto mt-10">
                <ServiceAccordionGrid services={props.data.services}/>
            </div>
        </div>
    )
}

export default ServiceTab;
