import React, { useState } from "react";
import Toast from "@/components/common/toast";
import AddAddressDialog from "@/components/business/add-address-dialog";
import {useAddStore} from "@/hooks/business/store/use-add-store";
import {Store} from "@/models/business/models";
import {useToast} from "@/hooks/common/use-toast";

interface AddStoreDialogProps {
    isOpen: boolean;
    onCancel: () => void;
    onSuccess: () => void;
    onError: (message: string) => void,
    onNoAccessToken: () => void;
}

const initialState: Store = new Store(
    null, // id
    "", // name
    "", // description
    null, // address
    "", // created_at
    "", // updated_at
    null, // location
    [] // employees
);

const AddStoreDialog: React.FC<AddStoreDialogProps> = (props) => {
    const { handleAddStore } = useAddStore();
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
    const [store, setStore] = useState<Store>(initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Create a new Store instance with updated fields
        setStore(prevState => new Store(
            prevState.id,
            name === 'name' ? value : prevState.name,
            name === 'description' ? value : prevState.description,
            prevState.address,
            prevState.created_at,
            prevState.updated_at,
            prevState.location,
            prevState.employees
        ));
    };

    const handleProceedToAddress = () => {
        if (store.name && store.description) {
            setIsAddressDialogOpen(true); // Open the address dialog
        } else {
            showToast("Input values cannot be empty!", 'error'); // Show toast if input is invalid
        }
    };

    if (!props.isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                    <h2 className="text-xl font-semibold mb-4">
                        Add New Store
                    </h2>
                    <form className="space-y-4">
                        {/* Store Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Store Name</label>
                            <input
                                type="text"
                                name="name"
                                value={store.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Store Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Store Description</label>
                            <textarea
                                name="description"
                                value={store.description}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm resize-none"
                                rows={3}
                            />
                        </div>
                    </form>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 mt-6">
                        <button
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                            onClick={() => {
                                setStore(initialState);
                                props.onCancel();
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            onClick={handleProceedToAddress}
                        >
                            Next
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

            {/* Address Dialog */}
            {isAddressDialogOpen && (
                <AddAddressDialog
                    isOpen={isAddressDialogOpen}
                    onAddressSubmit={async (address) => {
                        store.address = address;
                        await handleAddStore(store, props.onSuccess, props.onError, props.onNoAccessToken)
                        setIsAddressDialogOpen(false);
                        setStore(initialState);
                    }}
                    onBack={() => {
                        setIsAddressDialogOpen(false);
                    }}
                />
            )}
        </>
    );
};

export default AddStoreDialog;
