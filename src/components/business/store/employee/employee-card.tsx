import React from 'react';
import {Employee} from "@/models/business/models";

interface EmployeeProps {
    employee: Employee;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeProps> = (props) => {
    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                {/* Nickname */}
                <h2 className="text-xl font-bold text-gray-800">{props.employee.nick_name}</h2>

                {/* Full Name */}
                <p className="text-gray-600 mt-1">
                    {props.employee.first_name} {props.employee.last_name}
                </p>

                {/* Email */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Email</span>
                    <p className="text-gray-800">{props.employee.e_mail}</p>
                </div>

                {/* Phone */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Phone</span>
                    <p className="text-gray-800">{props.employee.phone}</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    {/* Edit Button */}
                    <button
                        onClick={() => {
                            if (props.employee.id) props.onEdit(props.employee.id)
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Edit
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => {
                            if (props.employee.id) props.onDelete(props.employee.id)
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
