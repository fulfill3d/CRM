'use client'

import BusinessView from "@/components/business/business-view";
import MsalAuthProvider from "@/msal/auth-provider";
import React from "react";
import {useAcquireBusinessAccessToken} from "@/hooks/common/use-acquire-access-token";

const Business = () => {

    useAcquireBusinessAccessToken();

    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <BusinessView />
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <BusinessView />
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    )
}

export default Business;
