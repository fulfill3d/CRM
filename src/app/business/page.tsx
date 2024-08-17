"use client";

import CustomTable from "@/components/common/custom-table";
import CustomTabs from "@/components/common/custom-tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Activity, CreditCard, DollarSign, Users} from "lucide-react";
import ClickableCard from "@/components/common/clickable-card";
import PageLayout from "@/components/common/page-layout";

export default function Business(){

    const stores = [
        {
            "id": 1,
            "name": "Sample Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-07-30T21:19:22.113",
            "updated_at": "2024-07-30T21:19:22.113",
            "location": null,
            "employees": null
        },
        {
            "id": 8,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T18:47:40.13",
            "updated_at": "2024-08-01T18:47:40.13",
            "location": null,
            "employees": null
        },
        {
            "id": 9,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T19:24:59.13",
            "updated_at": "2024-08-01T19:24:59.13",
            "location": null,
            "employees": null
        },
        {
            "id": 10,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T19:29:27.733",
            "updated_at": "2024-08-01T19:29:27.733",
            "location": null,
            "employees": null
        },
        {
            "id": 11,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T19:31:47.76",
            "updated_at": "2024-08-01T19:31:47.76",
            "location": null,
            "employees": null
        }
    ]

    return (
        <PageLayout>
            <PageLayout.Public>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 ml-4 mr-4">
                    {stores.map((store) => (
                        <ClickableCard
                            key={store.id}
                            href={`/business/${store.id}`}
                            title={store.name}
                            content={store.description}
                            created_at={store.created_at}
                        />
                    ))}
                </div>
            </PageLayout.Public>
            <PageLayout.Protected>
                <>Protected Dashboard</>
            </PageLayout.Protected>
        </PageLayout>
    )


}
