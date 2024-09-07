import { useDispatch } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { BusinessView, setBusinessView } from "@/store/slices/view-slice";
import { setStoreId } from "@/store/slices/store-slice";
import ClickableStoreCard from "@/components/business/store/clickable-store-card";
import useHttp from "@/hooks/common/use-http";
import { BusinessManagement } from "@/utils/endpoints";
import { useAccessToken } from "@/msal/use-access-token";
import { Store } from "@/models/business/models";
import { SkeletonCard } from "@/components/common/skeleton-card";
import { stores as mockStores } from "@/mock/business/mock-data";

interface BusinessViewProps {
    isProtected: boolean;
}

const BusinessView1: React.FC<BusinessViewProps> = ({ isProtected }) => {
    const dispatch = useDispatch();
    const { loading, error, request } = useHttp();
    const [stores, setStores] = useState<Store[]>([]);

    const scopes = [
        process.env.NEXT_PUBLIC_B2C_SCOPE_BUSINESS_MANAGEMENT_READ || "",
        process.env.NEXT_PUBLIC_B2C_SCOPE_BUSINESS_MANAGEMENT_WRITE || ""
    ];

    const accessToken = useAccessToken(isProtected ? scopes : []);

    useEffect(() => {
        if (isProtected && accessToken) {
            request(
                BusinessManagement.GetStores.Uri,
                BusinessManagement.GetStores.Method,
                null,
                undefined,
                accessToken
            ).then(response => {
                const mappedStores = response.map((store: any) => new Store(store));
                setStores(mappedStores);
            });
        } else {
            setStores(mockStores.map(store => new Store(store)));
        }
    }, [accessToken, isProtected, request]);

    const cardClick = useCallback((id: number) => {
        dispatch(setBusinessView(BusinessView.Depth2));
        dispatch(setStoreId(id));
    }, [dispatch]);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full h-full items-center justify-center">
                    <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full h-full items-center justify-center">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                {stores.map((store) => (
                    <ClickableStoreCard
                        onClick={() => cardClick(store.id)}
                        key={store.id}
                        title={store.name}
                        content={store.description}
                        created_at={store.created_at}
                    />
                ))}
            </div>
        </div>
    );
};

export default BusinessView1;
