'use client'

import StoreCardGridContainer from "@/components/business/store-card-grid-container";
import MsalAuthProvider from "@/msal/auth-provider";
import React from "react";

export default function Business(){
    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <StoreCardGridContainer isProtected={false}/>
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <StoreCardGridContainer isProtected={true}/>
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    )
}
