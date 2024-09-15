import React from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import {IdentityControl} from "@/msal/identity-control";

interface SvgDropdownProps {
    children: JSX.Element; // The SVG element to render
}

const SvgDropdown: React.FC<SvgDropdownProps> = ({ children }) => {
    return (
        <div className="relative z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="p-2 rounded-full focus:outline-none">
                        {children}
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-md">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <IdentityControl />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default SvgDropdown;
