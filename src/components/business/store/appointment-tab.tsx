import AppointmentGrid from "@/components/business/store/appointment-grid";

export enum AppointmentStatus {
    SCHEDULED = 1,
    CANCELED = 2,
    COMPLETED = 3,
}

export interface AppointmentProps {
    customer: string;
    email: string;
    service: string;
    status: AppointmentStatus; // Use the enum for status
    date: string;
    duration: string;
}

interface StoreAppointmentProps{
    store_id: number;
    appointments: AppointmentProps[];
}

interface AppointmentCardProps{
    data: StoreAppointmentProps | undefined;
}

const AppointmentTab = (props: AppointmentCardProps) => {
    return(
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <AppointmentGrid appointments={props.data?.appointments}/>
            </div>
        </div>
    )
}

export default AppointmentTab;
