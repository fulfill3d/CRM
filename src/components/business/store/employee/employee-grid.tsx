import EmployeeCard from "@/components/business/store/employee/employee-card";
import NoEmployeeCard from "@/components/business/store/employee/no-employee-card";
import AddCard from "@/components/common/add-card";
import React from "react";
import {useStoreEmployees} from "@/hooks/business/use-store-employees";
import {Employee} from "@/models/business/models";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

interface EmployeeGridProps {
    storeId: number;
    triggerDelete: (id: number) => void;
    triggerEdit: (employee: Employee) => void;
    onAddEmployee: () => void;
}

const EmployeeGrid: React.FC<EmployeeGridProps> = (props) => {

    const { employees, loading, error } = useStoreEmployees(props.storeId);

    if (loading) return <Loading />;

    if (error) return (<ErrorPage error={new Error(error)} reset={() => window.location.reload()}/>);

    return (
        <div className="container mx-auto mt-4">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                {employees.length > 0 ? (
                    employees.map(employee => (
                        <EmployeeCard
                            key={employee.id}
                            {...employee}
                            onDelete={() => props.triggerDelete(employee.id)} // Trigger
                            onEdit={() => props.triggerEdit(employee)} // Trigger edit dialog
                        />
                    ))
                ) : (
                    <NoEmployeeCard/>
                )}
                <div className="flex items-center justify-center">
                    <AddCard onClick={() => props.onAddEmployee()}/>
                </div>
            </div>
        </div>
    )
}

export default EmployeeGrid;
