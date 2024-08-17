import CustomCard from "@/components/common/custom-card";

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
    return(
        <CustomCard title=''>
            {props.data.services.map(service => (
                <div key={service.id} className='mb-4'>
                    <p>{service.name}</p>
                    <p>{service.description}</p>
                    <p>{service.duration} min</p>
                    <p>${service.price}</p>
                    {service.categories.map(category => (
                        <div key={category.id}>
                            <p>Category {category.name}</p>
                            {category.sub_categories.map(sub_category => (
                                <div key={sub_category.id}>
                                    <p>SubCategory {sub_category.name}</p>
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
