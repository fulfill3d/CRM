'use client'
import SvgDropdown from '@/components/svg-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setBusinessView, setClientView, resetBusinessView, resetClientView } from '@/store/slices/view-slice';
import ClientView1 from '@/app/client/view1';
import BusinessView1 from '@/app/business/view1';
import BreadcrumbComponent from "@/components/common/breadcrumb";

export default function GameStatePage() {
    const dispatch = useDispatch();
    const businessView = useSelector((state: RootState) => state.view.businessView);
    const clientView = useSelector((state: RootState) => state.view.clientView);

    return (
        <div className="relative min-h-full h-full w-full bg-blue-800">
            <div className="flex flex-col md:flex-row w-full h-full items-center justify-center space-x-4">
                {/* Business Container */}
                <div className="relative w-full h-full md:w-1/2 flex items-center justify-center bg-transparent transition-all cursor-pointer z-10">
                    <div className="relative w-full h-full">
                        <BreadcrumbComponent view={businessView} viewType="business" />
                        {businessView === 'default' ? (
                            <BusinessLogo onClick={() => dispatch(setBusinessView('businessView1'))} />
                        ) : (
                            <BusinessView1 /> // Replace this with dynamic views as needed
                        )}
                    </div>
                </div>

                {/* Client Container */}
                <div className="relative w-full h-full md:w-1/2 flex items-center justify-center bg-transparent transition-all cursor-pointer z-10">
                    <div className="relative w-full h-full">
                        <BreadcrumbComponent view={clientView} viewType="client" />
                        {clientView === 'default' ? (
                            <ClientLogo onClick={() => dispatch(setClientView('clientView1'))} />
                        ) : (
                            <ClientView1 /> // Replace this with dynamic views as needed
                        )}
                    </div>
                </div>
            </div>

            {/* CRM Icon on top-left */}
            <div className="fixed top-4 left-4 z-50 cursor-pointer">
                <CRMIcon />
            </div>

            {/* Profile Icon on top-right */}
            <div className="fixed top-4 right-4 z-50 cursor-pointer">
                <SvgDropdown><ProfileIcon /></SvgDropdown>
            </div>
        </div>
    );
}

// CRM Icon Component
const CRMIcon = () => {
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetBusinessView());
        dispatch(resetClientView());
    };

    return (
        <svg
            className="w-8 h-8 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            onClick={handleReset}
        >
            <polygon points="50,15 90,85 10,85" fill="black" />
        </svg>
    );
};

// Profile Icon Component
const ProfileIcon = () => (
    <svg
        className="w-8 h-8 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="5" fill="none" />
        <circle cx="50" cy="40" r="20" fill="black" />
    </svg>
);


// Business Logo Component
interface LogoProps {
    onClick: () => void; // Define the type of the onClick prop
}

const BusinessLogo: React.FC<LogoProps> = ({ onClick }) => (
    <svg className="w-full h-full object-contain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <rect x="20" y="20" width="60" height="60" stroke="black" fill="none" strokeWidth="5" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="black" strokeWidth="5" />
        <circle cx="50" cy="50" r="15" fill="black" />
    </svg>
);

// Client Logo Component
const ClientLogo: React.FC<LogoProps> = ({ onClick }) => (
    <svg className="w-full h-full object-contain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <circle cx="50" cy="50" r="40" stroke="black" fill="none" strokeWidth="5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="5" />
        <circle cx="30" cy="50" r="10" fill="black" />
        <circle cx="70" cy="50" r="10" fill="black" />
    </svg>
);
