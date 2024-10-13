'use client'

import MsalAuthProvider from "@/msal/auth-provider";
import StoreDetailView from "@/components/business/store/store-detail-view";
import React from "react";
import {useAcquireBusinessAccessToken} from "@/hooks/common/use-acquire-access-token";

interface StoreProps {
    params: { id: string }
}

const Store: React.FC<StoreProps> = (props) => {

    useAcquireBusinessAccessToken();

    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <StoreDetailView storeId={parseInt(props.params.id)}/>
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <StoreDetailView storeId={parseInt(props.params.id)}/>
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    );
}

export default Store;
