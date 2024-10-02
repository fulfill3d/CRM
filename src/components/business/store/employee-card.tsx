import React from 'react';

interface EmployeeProps {
    id: number;
    nick_name: string;
    first_name: string;
    last_name: string;
    e_mail: string;
    phone: string;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeProps> = ({ id, nick_name, first_name, last_name, e_mail, phone, onDelete, onEdit }) => {
    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                {/* Nickname */}
                <h2 className="text-xl font-bold text-gray-800">{nick_name}</h2>

                {/* Full Name */}
                <p className="text-gray-600 mt-1">
                    {first_name} {last_name}
                </p>

                {/* Email */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Email</span>
                    <p className="text-gray-800">{e_mail}</p>
                </div>

                {/* Phone */}
                <div className="mt-3">
                    <span className="block text-sm font-medium text-gray-500">Phone</span>
                    <p className="text-gray-800">{phone}</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    {/* Edit Button */}
                    <button
                        onClick={() => onEdit(id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Edit
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => onDelete(id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
