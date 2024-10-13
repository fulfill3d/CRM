'use client'

import MsalAuthProvider from "@/msal/auth-provider";
import React from "react";
import ClientView from "@/components/client/client-view";
import {useAcquireClientAccessToken} from "@/hooks/common/use-acquire-access-token";

const Client = () => {

    useAcquireClientAccessToken();

    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <ClientView />
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <ClientView />
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    )
}

export default Client;
