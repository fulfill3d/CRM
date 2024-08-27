import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import * as React from "react";
import { useDispatch } from 'react-redux';
import { setBusinessView, setClientView } from '@/store/slices/view-slice'; // Import the set actions
import { BusinessView, ClientView } from '@/store/slices/view-slice'; // Import enums

type BreadcrumbComponentProps =
    | { view: BusinessView; viewType: 'business' }
    | { view: ClientView; viewType: 'client' };

export default function BreadcrumbComponent({ view, viewType }: BreadcrumbComponentProps) {
    const dispatch = useDispatch();

    const handleBreadcrumbClick = (selectedView: BusinessView | ClientView) => {
        if (viewType === 'business') {
            dispatch(setBusinessView(selectedView as BusinessView));
        } else if (viewType === 'client') {
            dispatch(setClientView(selectedView as ClientView));
        }
    };

    const generateBreadcrumbs = () => {
        const breadcrumbs = [];
        if (viewType === 'business') {
            if (view === BusinessView.Depth2) {
                breadcrumbs.push({ label: 'Root', view: BusinessView.Cover });
                breadcrumbs.push({ label: 'Depth1', view: BusinessView.Depth1 });
                breadcrumbs.push({ label: 'Depth2', view: BusinessView.Depth2 });
            } else if (view === BusinessView.Depth1) {
                breadcrumbs.push({ label: 'Root', view: BusinessView.Cover });
                breadcrumbs.push({ label: 'Depth1', view: BusinessView.Depth1 });
            } else {
                breadcrumbs.push({ label: 'Root', view: BusinessView.Cover });
            }
        } else if (viewType === 'client') {
            if (view === ClientView.Depth2) {
                breadcrumbs.push({ label: 'Root', view: ClientView.Cover });
                breadcrumbs.push({ label: 'Depth1', view: ClientView.Depth1 });
                breadcrumbs.push({ label: 'Depth2', view: ClientView.Depth2 });
            } else if (view === ClientView.Depth1) {
                breadcrumbs.push({ label: 'Root', view: ClientView.Cover });
                breadcrumbs.push({ label: 'Depth1', view: ClientView.Depth1 });
            } else {
                breadcrumbs.push({ label: 'Root', view: ClientView.Cover });
            }
        }
        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 p-2 rounded-md">
            <Breadcrumb className="flex">
                <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link
                                        href="#"
                                        onClick={() => handleBreadcrumbClick(breadcrumb.view)}
                                        className="text-lg font-bold underline"
                                    >
                                        {breadcrumb.label}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {index < breadcrumbs.length - 1 && (
                                <BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
