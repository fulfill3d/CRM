import CustomCard from "@/components/common/custom-card";
import {Button} from "@/components/ui/button";
import {CircleMinus, EllipsisVertical} from "lucide-react";
import {NewServiceDialog} from "@/components/store/new-service-dialog";
import {useToast} from "@/components/ui/use-toast";

interface SubCategory{
    id: number
    name: string
    description: string
}

interface Category{
    id: number
    name: string
    description: string
    sub_categories: SubCategory[]
}

interface ServiceProps {
    id: number
    name: string
    description: string
    duration: number
    price: number
    categories: Category[]
}

interface ServiceCardProps{
    store_id: number
    services: ServiceProps[]
}

interface Props{
    data: ServiceCardProps
}

const ServiceCard = (props: Props) => {
    const { toast } = useToast()
    return(
        <CustomCard title=''>
            <div className='flex items-start justify-start'>
                <NewServiceDialog/>
            </div>
            {props.data.services.map(service => (
                <div key={service.id} className='mb-4'>
                    <hr className="border-t border-gray-300 my-4"/>
                    <div className='flex items-end justify-end'>
                        <Button
                            onClick={() => {
                                toast({
                                    title: "Uh oh! Something went wrong.",
                                    description: "MockUp data cannot be deleted",
                                })
                            }}
                            variant="default"
                            size="sm"
                            className="h-4 w-4 p-0 gap-1 text-sm"
                        >
                            <CircleMinus className="h-4 w-4"/>
                        </Button>
                        <Button
                            onClick={() => {
                                toast({
                                    title: "Uh oh! Something went wrong.",
                                    description: "MockUp data cannot be edited",
                                })
                            }}
                            variant="default"
                            size="sm"
                            className="h-4 w-4 p-0 gap-1 text-sm"
                        >
                            <EllipsisVertical className="h-4 w-4"/>
                        </Button>
                    </div>
                    <p>{service.name}</p>
                    <p>{service.description}</p>
                    <p>{service.duration} min</p>
                    <p>${service.price}</p>
                    {service.categories.map(category => (
                        <div key={category.id}>
                            <p>{category.name}</p>
                            {category.sub_categories.map(sub_category => (
                                <div key={sub_category.id}>
                                    <p>{sub_category.name}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </CustomCard>
    )
}

export default ServiceCard;
