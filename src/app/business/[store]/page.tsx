"use client";

import CustomTable from "@/components/common/custom-table";
import CustomTabs from "@/components/common/custom-tabs";
import { usePathname } from 'next/navigation';
import CustomCard from "@/components/common/custom-card";
import StoreCard from "@/components/store/store-card";
import EmployeeCard from "@/components/store/employee-card";
import PageLayout from "@/components/common/page-layout";

const StorePage = () => {
    const pathname = usePathname();
    const storeId = pathname.split('/').pop();

    const stores = [
        {
            "id": 1,
            "name": "Sample Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-07-30T21:19:22.113",
            "updated_at": "2024-07-30T21:19:22.113",
            "location": {
                "location_id": 1,
                "address_id": 1,
                "created_at": "2024-07-30T21:19:22.113",
                "updated_at": "2024-07-30T21:19:22.113",
                "location_name": "Main Office",
                "latitude": 0.0,
                "longitude": 0.0,
                "address_first_name": "John",
                "address_last_name": "Doe",
                "street1": "123 Main St",
                "street2": "Apt 4B",
                "city": "Springfield",
                "state": "IL",
                "country": "US",
                "zip_code": "62701"
            },
            "employees": [
                {
                    "id": 1,
                    "nick_name": "Johnny",
                    "first_name": "John",
                    "last_name": "Doe",
                    "e_mail": "john.doe@example.com",
                    "phone": "+1234567890",
                    "created_at": "2024-07-30T21:20:12.07",
                    "updated_at": "2024-07-30T21:20:12.07"
                },
                {
                    "id": 2,
                    "nick_name": "Johnny",
                    "first_name": "John",
                    "last_name": "Doe",
                    "e_mail": "john.doe@example.com",
                    "phone": "+1234567890",
                    "created_at": "2024-08-01T19:35:01.043",
                    "updated_at": "2024-08-01T19:35:01.043"
                },
                {
                    "id": 3,
                    "nick_name": "Johnny",
                    "first_name": "John",
                    "last_name": "Doe",
                    "e_mail": "john.doe@example.com",
                    "phone": "+1234567890",
                    "created_at": "2024-08-01T19:35:05.9",
                    "updated_at": "2024-08-01T19:35:05.9"
                }
            ]
        },
        {
            "id": 8,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T18:47:40.13",
            "updated_at": "2024-08-01T18:47:40.13",
            "location": {
                "location_id": 2,
                "address_id": 8,
                "created_at": "2024-08-01T18:47:40.13",
                "updated_at": "2024-08-01T18:47:40.13",
                "location_name": "Side Office",
                "latitude": 37.7813454,
                "longitude": -122.497668,
                "address_first_name": "John",
                "address_last_name": "Doe",
                "street1": "710 25th Ave",
                "street2": "",
                "city": "San Francisco",
                "state": "CA",
                "country": "US",
                "zip_code": "94121"
            },
            "employees": []
        },
        {
            "id": 9,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T19:24:59.13",
            "updated_at": "2024-08-01T19:24:59.13",
            "location": {
                "location_id": 3,
                "address_id": 9,
                "created_at": "2024-08-01T19:24:59.13",
                "updated_at": "2024-08-01T19:24:59.13",
                "location_name": "Office",
                "latitude": 37.7813454,
                "longitude": -122.497668,
                "address_first_name": "Jesse",
                "address_last_name": "Doe",
                "street1": "710 25th Ave",
                "street2": "",
                "city": "San Francisco",
                "state": "CA",
                "country": "US",
                "zip_code": "94121"
            },
            "employees": []
        },
        {
            "id": 10,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T19:29:27.733",
            "updated_at": "2024-08-01T19:29:27.733",
            "location": {
                "location_id": 4,
                "address_id": 10,
                "created_at": "2024-08-01T19:29:27.733",
                "updated_at": "2024-08-01T19:29:27.733",
                "location_name": "Office",
                "latitude": 37.7813454,
                "longitude": -122.497668,
                "address_first_name": "Jesse",
                "address_last_name": "Doe",
                "street1": "710 25th Ave",
                "street2": "",
                "city": "San Francisco",
                "state": "CA",
                "country": "US",
                "zip_code": "94121"
            },
            "employees": []
        },
        {
            "id": 11,
            "name": "SF Store",
            "description": "This is a sample store for testing purposes.",
            "created_at": "2024-08-01T19:31:47.76",
            "updated_at": "2024-08-01T19:31:47.76",
            "location": {
                "location_id": 5,
                "address_id": 11,
                "created_at": "2024-08-01T19:31:47.76",
                "updated_at": "2024-08-01T19:31:47.76",
                "location_name": "Office",
                "latitude": 37.7813454,
                "longitude": -122.497668,
                "address_first_name": "Jesse",
                "address_last_name": "Doe",
                "street1": "710 25th Ave",
                "street2": "",
                "city": "San Francisco",
                "state": "CA",
                "country": "US",
                "zip_code": "94121"
            },
            "employees": []
        }
    ];

    const currentStore = stores.find((store) => store.id.toString() === storeId);

    if (!currentStore) {
        return null
    }

    const tabsData = [
        {
            value: "store",
            label: "Store",
            tab_content: <StoreCard
                name={currentStore.name}
                description={currentStore.description}
                latitude={currentStore.location.latitude}
                longitude={currentStore.location.longitude}
                address={`
                ${currentStore.location.street1}, 
                ${currentStore.location.street2}, 
                ${currentStore.location.city}, 
                ${currentStore.location.state}, 
                ${currentStore.location.zip_code}`}
            />,
        },
        {
            value: "employees",
            label: "Employees",
            tab_content: <EmployeeCard data={currentStore.employees}/>
        },
        {
            value: "services",
            label: "Services",
            tab_content: <div>Services Content</div>
        }
    ];

    return (
        <PageLayout>
            <PageLayout.Public>
                <div
                    className="flex flex-col md:flex-row w-full h-full overflow-y-auto space-y-4 md:space-y-0 md:space-x-4">
                    <CustomTable
                        tabs={[
                            {value: 'week', label: 'Week'},
                            {value: 'month', label: 'Month'},
                            {value: 'year', label: 'Year'}
                        ]}
                        dropdownItems={[
                            {label: 'Scheduled', checked: true},
                            {label: 'Canceled'},
                            {label: 'Completed'}
                        ]}
                        cardTitle="Appointments"
                        cardDescription="Recent appointments from your store."
                        headers={['Customer', 'Type', 'Status', 'Date', 'Duration', 'Amount']}
                        rows={[
                            {
                                customer: 'Liam Johnson',
                                email: 'liam@example.com',
                                type: 'Sale',
                                status: 'Completed',
                                date: '2023-06-23 14:30',
                                duration: '60 min',
                                amount: '$250.00'
                            },
                            {
                                customer: 'Olivia Smith',
                                email: 'olivia@example.com',
                                type: 'Refund',
                                status: 'Scheduled',
                                date: '2023-06-24 14:30',
                                duration: '40 min',
                                amount: '$150.00'
                            },
                            // Add more rows as needed
                        ]}
                    />
                    <CustomTabs tabs={tabsData}/>
                </div>
            </PageLayout.Public>
            <PageLayout.Protected>
                <>Protected BusinessManagementPage</>
            </PageLayout.Protected>
        </PageLayout>
    );
}


export default StorePage;
