'use client'

import MsalAuthProvider from "@/msal/auth-provider";
import React from "react";
import ClientView1 from "@/components/client/client-view-1";

export default function Client(){
    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <ClientView1 isProtected={false}/>
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <ClientView1 isProtected={true}/>
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    )
}
