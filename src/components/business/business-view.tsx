'use client'

import React, { useState } from "react";
import AddStoreDialog from "@/components/business/add-store-dialog";
import Toast from "@/components/common/toast";
import { useRouter } from "next/navigation";
import StoreGrid from "@/components/business/store-grid";
import {useToast} from "@/hooks/common/use-toast";

interface BusinessViewProps {}

const BusinessView: React.FC<BusinessViewProps> = () => {
    const router = useRouter();
    const [refresh, setRefresh] = useState(false);
    const [showAddStoreDialog, setShowAddStoreDialog] = useState(false);
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();

    return (
        <div className="w-full h-full overflow-y-scroll items-center justify-center">
            <StoreGrid
                refresh={refresh}
                handleStoreCardClick={(id: number) => router.push(`/business/${id}`)}
                handleAddStoreClick={() => setShowAddStoreDialog(true)}
            />

            <AddStoreDialog
                isOpen={showAddStoreDialog}
                onSuccess={() => {
                    setShowAddStoreDialog(false);
                    showToast("Successful!", 'success');
                    setRefresh(prev => !prev);
                }}
                onCancel={() => setShowAddStoreDialog(false)}
                onNoAccessToken={() => {
                    setShowAddStoreDialog(false);
                    showToast("You need to log in to add a store.", 'info')
                }}
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
};

export default BusinessView;
