'use client';

import React, { createContext, ReactNode, ReactElement } from "react";
import MsalAuthProvider from "@/msal/auth-provider";

interface PageLayoutProps {
    children: ReactNode;
}

interface PageLayoutContextProps {
    publicContent: ReactNode | null;
    protectedContent: ReactNode | null;
}

const PageLayoutContext = createContext<PageLayoutContextProps>({
    publicContent: null,
    protectedContent: null
});

function isValidElementWithProps(element: ReactNode): element is ReactElement<{ children: ReactNode }> {
    return React.isValidElement(element);
}

export default function PageLayout({ children }: PageLayoutProps) {

    let publicContent: ReactNode = null;
    let protectedContent: ReactNode = null;

    React.Children.forEach(children, child => {
        if (isValidElementWithProps(child)) {
            if (child.type === PageLayout.Public) {
                publicContent = child.props.children;
            } else if (child.type === PageLayout.Protected) {
                protectedContent = child.props.children;
            }
        }
    });

    return (
        <div className="w-full h-full">
            <MsalAuthProvider>
                <MsalAuthProvider.Public>
                    {publicContent}
                </MsalAuthProvider.Public>
                <MsalAuthProvider.Protected>
                    {protectedContent}
                </MsalAuthProvider.Protected>
            </MsalAuthProvider>
        </div>
    );
}

PageLayout.Public = function Public({ children }: { children: ReactNode }) {
    return <>{children}</>;
};

PageLayout.Protected = function Protected({ children }: { children: ReactNode }) {
    return <>{children}</>;
};
