'use client'

import MsalAuthProvider from "@/msal/auth-provider";
import React from "react";
import ClientView from "@/components/client/client-view";

export default function Client(){
    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <ClientView isProtected={false}/>
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <ClientView isProtected={true}/>
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    )
}
