"use client";

import PageLayout from "@/components/common/page-layout";
import ClickableCard from "@/components/common/clickable-card";
import GameView from "@/components/common/game-view";

export default function Home() {
  return (
    <PageLayout>
      <PageLayout.Public>
          <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2 ml-4 mr-4">
              <ClickableCard title='Business Side' href='/business'/>
              <ClickableCard title='Client Side' href='/client'/>
          </div>
      </PageLayout.Public>
      <PageLayout.Protected>
          <GameView/>
      </PageLayout.Protected>
    </PageLayout>
  );
}
