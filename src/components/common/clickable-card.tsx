import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface ClickableCardProps {
    title: string;
    href: string;
    content?: React.ReactNode;
}

const ClickableCard = (props: ClickableCardProps) => {
    return(
        <Link href={props.href}>
            <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium text-center">
                        {props.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {props.content}
                </CardContent>
            </Card>
        </Link>
    )
}

export default ClickableCard;
