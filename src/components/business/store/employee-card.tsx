import CustomCard from "@/components/common/custom-card";
import {NewEmployeeDialog} from "@/components/business/store/new-employee-dialog";
import {Button} from "@/components/ui/button";
import {CircleMinus, EllipsisVertical} from "lucide-react";
import {useToast} from "@/components/ui/use-toast";

interface EmployeeProps {
    id: number;
    nick_name: string;
    first_name: string;
    last_name: string;
    e_mail: string;
    phone: string;
}

interface EmployeeCardProps{
    data: EmployeeProps[]
}

const EmployeeCard = (props: EmployeeCardProps) => {
    const { toast } = useToast();
    return(
        <CustomCard title=''>
            <div className='flex items-start justify-start'>
                <NewEmployeeDialog/>
            </div>
            {props.data.map((prop) => (
                <div key={prop.id} className='mb-4'>
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
                    <p>{prop.nick_name}</p>
                    <p>{prop.first_name}</p>
                    <p>{prop.last_name}</p>
                    <p>{prop.e_mail}</p>
                    <p>{prop.phone}</p>
                </div>
            ))}
        </CustomCard>
    );
}

export default EmployeeCard;
