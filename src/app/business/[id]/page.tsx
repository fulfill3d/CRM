'use client'

import MsalAuthProvider from "@/msal/auth-provider";
import StoreDetail from "@/components/business/store/store-detail";
import React from "react";

export default function Store({ params }: { params: { id: string } }){
    const { id } = params;

    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <StoreDetail isProtected={false} storeId={parseInt(id)}/>
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <StoreDetail isProtected={true} storeId={parseInt(id)}/>
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    );
}
