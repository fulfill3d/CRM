'use client'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import {
    BriefcaseBusiness, Building, Calendar,
    FileText,
    Microscope,
    Package2,
    Settings, User,
} from "lucide-react";
import * as React from "react";

import { usePathname } from 'next/navigation';

export function Aside() {
    const pathname = usePathname();

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <TooltipProvider>
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                    <Link
                        href="/"
                        className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full ${pathname === '/' ? 'bg-primary text-primary-foreground' : 'bg-primary text-lg font-semibold text-primary-foreground'} md:h-8 md:w-8 md:text-base`}
                    >
                        <Package2 className="h-8 w-8 transition-all group-hover:scale-110"/>
                        <span className="sr-only">CRM</span>
                    </Link>
                    <div className="p-1"/>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/business"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${pathname.includes('/projects') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                            >
                                <Building className="h-10 w-10"/>
                                <span className="sr-only">Business</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Business</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/client"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${pathname.includes('/docs') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                            >
                                <Calendar className="h-10 w-10"/>
                                <span className="sr-only">Client</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Client</TooltipContent>
                    </Tooltip>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/settings"
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${pathname.includes('/settings') ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                            >
                                <Settings className="h-10 w-10"/>
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </TooltipProvider>
        </aside>
    )
}

