"use client";

import PageLayout from "@/components/common/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <PageLayout.Public>
        <>Public Dashboard</>
      </PageLayout.Public>
      <PageLayout.Protected>
        <>Protected Dashboard</>
      </PageLayout.Protected>
    </PageLayout>
  );
}
