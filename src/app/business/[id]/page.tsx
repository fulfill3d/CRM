'use client'

import MsalAuthProvider from "@/msal/auth-provider";
import StoreDetail from "@/components/business/store/store-detail";
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
                <StoreDetail storeId={parseInt(props.params.id)}/>
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <StoreDetail storeId={parseInt(props.params.id)}/>
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    );
}

export default Store;
