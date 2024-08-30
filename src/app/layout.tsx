import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/store-provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CRM",
    description: "CRM demo with business/client side together",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <body className={`${inter.className} h-full`}>
        <div className="flex min-h-screen h-full w-full flex-col">
            <StoreProvider>
                {children}
            </StoreProvider>
        </div>
        </body>
        </html>
    );
}

