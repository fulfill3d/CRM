import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

interface CustomTabsProp{
    tabs: { value: string; label: string, tab_content: any }[];
}

const CustomTabs: React.FC<CustomTabsProp> = ({tabs}) => {

    return(
        <Tabs defaultValue={tabs[0].value}>
            <div className="flex items-center">
                <TabsList>
                    {tabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                    ))}
                </TabsList>
            </div>
            {tabs.map(tab => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.tab_content}
                </TabsContent>
            ))}
        </Tabs>
    );
}


export default CustomTabs;
