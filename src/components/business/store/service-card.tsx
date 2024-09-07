import {Button} from "@/components/ui/button";
import {
    newServiceMock,
    serviceCategories,
    updateServiceMock
} from "@/mock/business/mock-data";
import {StoreService} from "@/models/business/models";

interface Props{
    data: StoreService
}

const ServiceCard = (props: Props) => {
    const services = JSON.stringify(props.data.services, null, 4);
    return (
        <div>
            <span>Service Categories</span>
            <textarea
                className='w-full h-32 p-2 bg-transparent border border-gray-300 rounded resize-none'
                value={JSON.stringify(serviceCategories, null, 4)}/>
            <span>Store`s Service List</span>
            <textarea
                className='w-full h-48 p-2 bg-transparent border border-gray-300 rounded resize-none'
                value={services}/>
            <div className='flex items-center justify-center'>
                <div className='w-1/2'>
                    <textarea
                        className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
                        value={JSON.stringify(newServiceMock, null, 4)}/>
                    <div className='flex items-center justify-center'>
                        <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
                            <span>Add a New Service</span>
                        </Button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <textarea
                        className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
                        value={JSON.stringify(updateServiceMock, null, 4)}/>
                    <div className='flex items-center justify-center'>
                        <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
                            <span>Update a Service</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center p-2'>
                <span className='m-2'>Service Id</span>
                <textarea className='w-8 h-8 bg-transparent border border-gray-300 rounded resize-none m-2' value={1}/>
                <Button className='bg-amber-100 rounded m-2' variant='default'>
                    <span>Delete a Service</span>
                </Button>
            </div>
        </div>
    )
}

export default ServiceCard;
