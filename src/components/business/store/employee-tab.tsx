import EmployeeCard from "@/components/business/store/employee-card";
import AddCard from "@/components/common/add-card";
import React from "react";

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

const EmployeeTab = (props: EmployeeCardProps) => {

    const handleDelete = (id: number) => {
        console.log(`Deleting employee with id: ${id}`);
        // Add your delete logic here
    };

    const handleEdit = (id: number) => {
        console.log(`Editing employee with id: ${id}`);
        // Add your edit logic here
    };

    return(
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {props.data.map(employee => (
                        <EmployeeCard
                            key={employee.id}
                            {...employee}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                    <div className="flex items-center justify-center">
                        <AddCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeTab;
