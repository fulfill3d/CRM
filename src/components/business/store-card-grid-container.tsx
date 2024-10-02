'use client'

import React, { useEffect, useState } from "react";
import StoreCard from "@/components/business/store-card";
import useHttp from "@/hooks/common/use-http";
import { BusinessManagement } from "@/utils/endpoints";
import { useAccessToken } from "@/msal/use-access-token";
import { Store } from "@/models/business/models";
import { SkeletonCard } from "@/components/common/skeleton-card";
import { stores as mockStores } from "@/mock/business/mock-data";
import {useRouter} from "next/navigation";

interface BusinessViewProps {
    isProtected: boolean;
}

const StoreCardGridContainer: React.FC<BusinessViewProps> = ({ isProtected }) => {
    const router = useRouter();
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

    const handleClick = (id: number) => {
        router.push(`/business/${id}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
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
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full h-full items-center justify-center">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {stores.map((store) => (
                        <StoreCard
                            onClick={() => handleClick(store.id)}
                            key={store.id}
                            title={store.name}
                            content={store.description}
                            created_at={store.created_at}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoreCardGridContainer;
