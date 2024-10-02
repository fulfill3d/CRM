import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/components/store-provider";
import React from "react";
import NavBar from "@/components/common/nav-bar";
import Fulfill3d from "@/svg/fulfill3d";

export const metadata: Metadata = {
    title: "CRM",
    description: "CRM demo with business/client side together",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className="h-screen flex flex-col">
        <NavBar brandName="CRM" logoSvg={Fulfill3d} />
        <main className="flex-1 pt-16 overflow-hidden">
            <StoreProvider>{children}</StoreProvider>
        </main>
        </body>
        </html>
    );
}
