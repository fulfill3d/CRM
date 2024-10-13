import React, { useState } from "react";
import { useGetStoreDetails } from "@/hooks/business/store/use-get-store-details";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";
import dynamic from "next/dynamic";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import { useDeleteStore } from "@/hooks/business/store/use-delete-store";
import { useToast } from "@/hooks/common/use-toast";
import Toast from "@/components/common/toast";
import { useRouter } from "next/navigation";
const MapView = dynamic(() => import('@/components/common/map-view'), { ssr: false });

interface StoreTabProps {
    storeId: number;
}

const StoreTab: React.FC<StoreTabProps> = ({ storeId }) => {
    const router = useRouter();
    const { store, loading, error } = useGetStoreDetails(storeId);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const { handleDeleteStore } = useDeleteStore();

    const onEdit = () => {
        // Edit logic here
    }

    const onConfirmDelete = async () => {
        try {
            await handleDeleteStore(
                storeId,
                () => {
                    showToast("Store deleted successfully!", "success");
                    setShowConfirmationDialog(false);
                    setTimeout(() => {
                        router.push('/business');
                    }, 800);
                },
                (err) => {
                    setShowConfirmationDialog(false);
                    showToast(`Error deleting store: ${err}`, "error")
                },
                () => {
                    setShowConfirmationDialog(false);
                    showToast("You must be logged in to delete a store!", "info");
                }
            );
        } catch (err) {
            showToast(`Unexpected error: ${err}`, "error");
        }
    }

    if (loading) return <Loading />;
    if (error) return (<ErrorPage error={new Error(error || "Unknown error")} reset={() => window.location.reload()} />);

    return (
        <div className="w-full h-full py-8 bg-gray-50">
            <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg sm:px-6 lg:px-8 items-center justify-center">
                {store?.location && (
                    <div className="relative mb-6">
                        <MapView latitude={store.location.latitude} longitude={store.location.longitude} />
                        <div className="absolute bottom-4 right-4 bg-white rounded-full shadow-md px-3 py-1 text-gray-800 text-sm">
                            {store?.location.city}, {store?.location.country}
                        </div>
                    </div>
                )}
                <div className="text-xl font-semibold text-gray-900 mb-2">
                    {store?.name}
                </div>
                <div className="text-gray-700 font-medium mb-4">
                    <p className="flex items-center">
                        <span className="font-bold">Address:</span>
                        <span className="ml-2">
                            {store?.location?.street1}, {store?.location?.street2 && `${store?.location?.street2}, `}
                            {store?.location?.city}, {store?.location?.state} {store?.location?.zip_code}, {store?.location?.country}
                        </span>
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-4 space-x-2">
                    {/* Edit Button */}
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
                        onClick={onEdit}
                    >
                        Edit Store
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => setShowConfirmationDialog(true)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50 transition ease-in-out duration-150"
                    >
                        Delete Store
                    </button>
                </div>
            </div>

            {/* Reusable Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showConfirmationDialog}
                title="Confirm Deletion"
                message="Are you sure you want to delete this store?"
                onConfirm={onConfirmDelete}
                onCancel={() => setShowConfirmationDialog(false)}
            />

            {isToastActive && (
                <Toast
                    message={toastMessage}
                    type={toastType}
                    onClose={toggleToastActive}
                />
            )}
        </div>
    );
}

export default StoreTab;
