'use client';

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import MsalAuthProvider from "@/msal/auth-provider";
import {RootState} from "@/store";
import {BusinessView, ClientView, setBusinessView, setClientView} from "@/store/slices/view-slice";
import BusinessLogo from "@/svg/business-logo";
import ClientLogo from "@/svg/client-logo";
import CRMIcon from "@/svg/crm-icon";
import ProfileIcon from "@/svg/profile-icon";
import SvgDropdown from "@/components/svg-dropdown";
import BreadcrumbComponent from "@/components/common/breadcrumb";
import PublicClientView1 from "@/components/client/public-client-view-1";
import ProtectedClientView1 from "@/components/client/protected-client-view-1";
import BusinessView1 from "@/components/business/business-view-1";
import BusinessView2 from "@/components/business/business-view-2";

export default function Home() {
    const dispatch = useDispatch();
    const businessView = useSelector((state: RootState) => state.view.businessView);
    const clientView = useSelector((state: RootState) => state.view.clientView);

    const publicBusinessViews: { [key in BusinessView]: JSX.Element } = {
        [BusinessView.Cover]: <BusinessLogo onClick={() => dispatch(setBusinessView(BusinessView.Depth1))} />,
        [BusinessView.Depth1]: <BusinessView1 isProtected={false}/>,
        [BusinessView.Depth2]: <BusinessView2 isProtected={false}/>,
    };

    const publicClientViews: { [key in ClientView]: JSX.Element } = {
        [ClientView.Cover]: <ClientLogo onClick={() => dispatch(setClientView(ClientView.Depth1))} />,
        [ClientView.Depth1]: <PublicClientView1 />
    };

    const protectedBusinessViews: { [key in BusinessView]: JSX.Element } = {
        [BusinessView.Cover]: <BusinessLogo onClick={() => dispatch(setBusinessView(BusinessView.Depth1))} />,
        [BusinessView.Depth1]: <BusinessView1 isProtected={true} />,
        [BusinessView.Depth2]: <BusinessView2 isProtected={true}/>,
    };

    const protectedClientViews: { [key in ClientView]: JSX.Element } = {
        [ClientView.Cover]: <ClientLogo onClick={() => dispatch(setClientView(ClientView.Depth1))} />,
        [ClientView.Depth1]: <ProtectedClientView1 />
    };

    return (
        <div className="relative min-h-full h-full w-full bg-blue-800">
            <div className="flex flex-col md:flex-row w-full h-full items-center justify-center space-x-4">
                {/* Business Container */}
                <div className="relative w-full h-full md:w-1/2 flex items-center justify-center bg-transparent transition-all z-10">
                    <div className="relative w-full h-full">
                        <BreadcrumbComponent view={businessView} viewType="business" />
                        <MsalAuthProvider>
                            <MsalAuthProvider.Public>
                                {publicBusinessViews[businessView]}
                            </MsalAuthProvider.Public>
                            <MsalAuthProvider.Protected>
                                {protectedBusinessViews[businessView]}
                            </MsalAuthProvider.Protected>
                        </MsalAuthProvider>
                    </div>
                </div>

                {/* Client Container */}
                <div className="relative w-full h-full md:w-1/2 flex items-center justify-center bg-transparent transition-all z-10">
                    <div className="relative w-full h-full">
                        <BreadcrumbComponent view={clientView} viewType="client" />
                        <MsalAuthProvider>
                            <MsalAuthProvider.Public>
                                {publicClientViews[clientView]}
                            </MsalAuthProvider.Public>
                            <MsalAuthProvider.Protected>
                                {protectedClientViews[clientView]}
                            </MsalAuthProvider.Protected>
                        </MsalAuthProvider>
                    </div>
                </div>
            </div>

            {/* CRM Icon on top-left */}
            <div className="fixed top-4 left-4 z-50 cursor-pointer">
                <CRMIcon />
            </div>

            {/* Profile Icon on top-right */}
            <div className="fixed top-4 right-4 z-50 cursor-pointer">
                <SvgDropdown>
                    <ProfileIcon />
                </SvgDropdown>
            </div>
        </div>
    );
}
