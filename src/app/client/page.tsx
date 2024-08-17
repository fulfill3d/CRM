"use client";

import PageLayout from "@/components/common/page-layout";

export default function Client(){
    return(
        <PageLayout>
            <PageLayout.Public>
                <>Public Client</>
                <>Appointment List</>
                <>Nearby Service List</>
            </PageLayout.Public>
            <PageLayout.Protected>
                <>Protected Client</>
                <>Appointment List</>
                <>Nearby Service List</>
            </PageLayout.Protected>
        </PageLayout>
    )
}
