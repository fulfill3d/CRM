import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/components/common/nav-bar";
import Fulfill3d from "@/svg/fulfill3d";
import ReduxProvider from "@/components/common/redux-provider";
import MsalRootProvider from "@/msal/root-provider";

export const metadata: Metadata = {
    title: "CRM",
    description: "CRM demo with business/client side together",
};

const links = [
    {name: 'Business', href: '/business'},
    {name: 'Client', href: '/client'},
]

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<Readonly<RootLayoutProps>> = ({ children }) => {
    return (
        <html lang="en">
        <body className="h-screen flex flex-col">
        <ReduxProvider>
            <MsalRootProvider>
                <NavBar brandName="CRM" logoSvg={Fulfill3d} links={links}/>
                <main className="flex-1 pt-16 overflow-hidden">
                    {children}
                </main>
            </MsalRootProvider>
        </ReduxProvider>
        </body>
        </html>
    );
}

export default RootLayout;
