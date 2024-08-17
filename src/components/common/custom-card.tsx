import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

interface CustomCardProps {
    title: string;
    children: React.ReactNode;
}

const CustomCard = (props: CustomCardProps) => {

    return(
        <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                    {props.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default CustomCard;
