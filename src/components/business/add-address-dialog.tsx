import React, { useState } from "react";
import Toast from "@/components/common/toast";
import {Address} from "@/models/business/models";
import {useToast} from "@/hooks/common/use-toast";

interface AddAddressDialogProps {
    isOpen: boolean;
    onAddressSubmit: (address: Address) => void;
    onBack: () => void;
}

const AddAddressDialog: React.FC<AddAddressDialogProps> = ({ isOpen, onAddressSubmit, onBack }) => {
    const initialState = {
        location_name: "",
        first_name: "",
        last_name: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
    }

    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const [addressData, setAddressData] = useState(initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddressData({
            ...addressData,
            [name]: value,
        });
    };

    const handleAddAddress = () => {
        const address = Address.fromJSON(addressData);
        const err = address.validate();
        if (err.length == 0){
            onAddressSubmit(address);
            setAddressData(initialState);
        }else {
            showToast(err.join(' '), 'error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">Add Store Address</h2>
                <form className="space-y-4">
                    {/* Address Fields */}
                    <input
                        type="text"
                        name="location_name"
                        value={addressData.location_name}
                        onChange={handleInputChange}
                        placeholder="Location Name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="first_name"
                        value={addressData.first_name}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="last_name"
                        value={addressData.last_name}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="street1"
                        value={addressData.street1}
                        onChange={handleInputChange}
                        placeholder="Street 1"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="street2"
                        value={addressData.street2}
                        onChange={handleInputChange}
                        placeholder="Street 2 (Optional)"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="city"
                        value={addressData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="state"
                        value={addressData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="country"
                        value={addressData.country}
                        onChange={handleInputChange}
                        placeholder="Country"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="zip_code"
                        value={addressData.zip_code}
                        onChange={handleInputChange}
                        placeholder="Zip Code"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </form>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        onClick={onBack}
                    >
                        Back
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={handleAddAddress}
                    >
                        Add Address
                    </button>
                </div>
            </div>

            {isToastActive && (
                <Toast
                    message={toastMessage}
                    type={toastType}
                    onClose={toggleToastActive}
                />
            )}
        </div>
    );
};

export default AddAddressDialog;
