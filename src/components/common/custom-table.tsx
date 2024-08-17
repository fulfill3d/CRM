import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface TableProps {
    tabs: { value: string; label: string }[];
    dropdownItems: { label: string; checked?: boolean }[];
    cardTitle: string;
    cardDescription: string;
    headers: string[];
    rows: {
        customer: string;
        email: string;
        type: string;
        status: string;
        date: string;
        duration: string;
        amount: string;
    }[];
}

interface CustomTableProps{
    data: TableProps;
}

const CustomTable: React.FC<CustomTableProps> = (props: CustomTableProps) => {
    return (
        <Tabs defaultValue={props.data.tabs[0].value}>
            {props.data.tabs.map(tab => (
                <TabsContent key={tab.value} value={tab.value}>
                    <Card x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>{props.data.cardTitle}</CardTitle>
                            <CardDescription>
                                {props.data.cardDescription}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {props.data.headers.map((header, index) => (
                                            <TableHead key={index} className={`text-left ${index === props.data.headers.length - 1 ? 'text-right' : ''}`}>
                                                {header}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {props.data.rows.map((row, index) => (
                                        <TableRow key={index} className={index % 2 === 0 ? "bg-accent" : ""}>
                                            <TableCell>
                                                <div className="font-medium">{row.customer}</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    {row.email}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                {row.type}
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className={`text-xs ${row.status === 'Completed' ? "variant-secondary" : "variant-outline"}`}>
                                                    {row.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                {row.date}
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                {row.duration}
                                            </TableCell>
                                            <TableCell className="text-right">{row.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default CustomTable;
