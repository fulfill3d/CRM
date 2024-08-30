interface AppointmentProps{
    customer: string;
    email: string;
    service: string;
    status: string;
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

const AppointmentCard = (props: AppointmentCardProps) => {
    const appointments = JSON.stringify(props.data?.appointments, null, 4);
    return(
        <div>
            <span>Store`s Appointment List</span>
            <textarea
                className='w-full h-48 p-2 bg-transparent border border-gray-300 rounded resize-none'
                value={appointments}/>
        </div>
    )
}

export default AppointmentCard;
