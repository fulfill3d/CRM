import {Button} from "@/components/ui/button";
import {newEmployeeMock, updateEmployeeMock} from "@/mock/business/mock-data";

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
    const employees = JSON.stringify(props.data, null, 4);
    return(
        <div>
            <span>Store`s Employee List</span>
            <textarea
                className='w-full h-48 p-2 bg-transparent border border-gray-300 rounded resize-none'
                value={employees}/>
            <div className='flex items-center justify-center'>
                <div className='w-1/2'>
                    <textarea
                        className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
                        value={JSON.stringify(newEmployeeMock, null, 4)}/>
                    <div className='flex items-center justify-center'>
                        <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
                            <span>Add a New Employee</span>
                        </Button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <textarea
                        className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
                        value={JSON.stringify(updateEmployeeMock, null, 4)}/>
                    <div className='flex items-center justify-center'>
                        <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
                            <span>Update an Employee</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center p-2'>
                <span className='m-2'>Employee Id</span>
                <textarea className='w-8 h-8 bg-transparent border border-gray-300 rounded resize-none m-2' value={1}/>
                <Button className='bg-amber-100 rounded m-2' variant='default'>
                    <span>Delete an Employee</span>
                </Button>
            </div>
        </div>
    );
}

export default EmployeeCard;
