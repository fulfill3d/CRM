import React, {useState} from "react";
import Toast from "@/components/common/toast";
import {Address} from "@/models/business/models";
import {useToast} from "@/hooks/common/use-toast";

interface AddAddressDialogProps {
    isOpen: boolean;
    onAddressSubmit: (address: Address) => void;
    onBack: () => void;
}

const initialState: Address = new Address(
    null,
    "",
    "",
    "",
    "",
    null,
    "",
    "",
    "",
    ""
);

const AddAddressDialog: React.FC<AddAddressDialogProps> = ({ isOpen, onAddressSubmit, onBack }) => {
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const [address, setAddress] = useState<Address>(initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Create a new instance of Address with updated fields
        setAddress(prevState => {
            return new Address(
                prevState.id,
                name === 'location_name' ? value : prevState.location_name,
                name === 'first_name' ? value : prevState.first_name,
                name === 'last_name' ? value : prevState.last_name,
                name === 'street1' ? value : prevState.street_1,
                name === 'street2' ? value : prevState.street_2,
                name === 'city' ? value : prevState.city,
                name === 'state' ? value : prevState.state,
                name === 'country' ? value : prevState.country,
                name === 'zip_code' ? value : prevState.zip_code
            );
        });
    };


    const handleAddAddress = () => {
        const err = address.validate();
        if (err.length == 0){
            onAddressSubmit(address);
            setAddress(initialState);
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
                        value={address.location_name}
                        onChange={handleInputChange}
                        placeholder="Location Name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="first_name"
                        value={address.first_name}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="last_name"
                        value={address.last_name}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="street1"
                        value={address.street_1}
                        onChange={handleInputChange}
                        placeholder="Street 1"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="street2"
                        value={address.street_2 || ""}
                        onChange={handleInputChange}
                        placeholder="Street 2 (Optional)"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="state"
                        value={address.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="country"
                        value={address.country}
                        onChange={handleInputChange}
                        placeholder="Country"
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                        type="text"
                        name="zip_code"
                        value={address.zip_code}
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
