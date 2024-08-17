'use client'

import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import * as React from "react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export function Header() {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    useEffect(() => {
        if (pathname) {
            const pathArray = pathname.split('/').filter((path) => path);
            setBreadcrumbs(pathArray);
        }
    }, [pathname]);

    const capitalize = (str: string) => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <header
            className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {breadcrumbs.map((breadcrumb, index) => {
                        const href = `/${breadcrumbs.slice(0, index + 1).join('/')}`;
                        const formattedBreadcrumb = capitalize(breadcrumb);

                        return (
                            <React.Fragment key={href}>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    {index === breadcrumbs.length - 1 ? (
                                        <BreadcrumbPage>{formattedBreadcrumb}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={href}>{formattedBreadcrumb}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    );
}
