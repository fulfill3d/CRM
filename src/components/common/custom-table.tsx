import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { File, ListFilter } from "lucide-react";
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
            <div className="flex items-center">
                <TabsList>
                    {props.data.tabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                    ))}
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                                <ListFilter className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Filter</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {props.data.dropdownItems.map((item, index) => (
                                <DropdownMenuCheckboxItem key={index} checked={item.checked}>
                                    {item.label}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Export</span>
                    </Button>
                </div>
            </div>
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
