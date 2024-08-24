'use client';

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import * as React from "react";
import { useDispatch } from 'react-redux';
import { resetBusinessView, resetClientView } from '@/store/slices/view-slice'; // Import the reset actions

interface BreadcrumbComponentProps {
    view: string;
    viewType: 'business' | 'client'; // To determine which view to reset
}

export default function BreadcrumbComponent({ view, viewType }: BreadcrumbComponentProps) {
    const dispatch = useDispatch();

    // Determine which reset action to dispatch based on the viewType prop
    const handleReset = () => {
        if (viewType === 'business') {
            dispatch(resetBusinessView());
        } else if (viewType === 'client') {
            dispatch(resetClientView());
        }
    };

    const capitalize = (str: string) => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div className="absolute top-4 left-4 z-40 bg-white bg-opacity-70 p-2 rounded-md">
            <Breadcrumb className="flex">
                <BreadcrumbList>
                    {view !== 'default' && (
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#" onClick={handleReset}>{capitalize(view)}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
