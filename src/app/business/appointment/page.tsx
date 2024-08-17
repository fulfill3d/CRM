import CustomTable from "@/components/common/custom-table";

export default function BusinessAppointmentPage() {
    return (
        <CustomTable
            tabs={[
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
                { value: 'year', label: 'Year' }
            ]}
            dropdownItems={[
                { label: 'Scheduled', checked: true },
                { label: 'Canceled' },
                { label: 'Completed' }
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
    );
}
