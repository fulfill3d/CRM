"use client";

import ClickableCard from "@/components/common/clickable-card";
import PageLayout from "@/components/common/page-layout";
import {stores} from "@/mock/business/mock-data";

export default function Business(){

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
