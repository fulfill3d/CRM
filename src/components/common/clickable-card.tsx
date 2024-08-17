import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface ClickableCardProps {
    title: string;
    icon?: React.ReactNode;
    content: string;
    href: string;
    created_at: string;
}

const ClickableCard = (props: ClickableCardProps) => {
    return(
        <Link href={props.href}>
            <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">
                        {props.title}
                    </CardTitle>
                    {props.icon}
                </CardHeader>
                <CardContent>
                    <p className="text-md text-muted-foreground">{props.content}</p>
                    <div className="p-2"/>
                    <p className="text-xs text-muted-foreground text-right">Created
                        At: {new Date(props.created_at).toLocaleDateString('en-US')}</p>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ClickableCard;
