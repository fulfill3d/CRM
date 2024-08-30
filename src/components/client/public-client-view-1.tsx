import {appointments, nearbyServices, newAppointmentMock, updateAppointmentMock} from "@/mock/client/mock-data";
import {Button} from "@/components/ui/button";

const PublicClientView1 = () => {
    return(
        <div>
            <span>Nearby Services</span>
            <textarea
                className='w-full h-52 p-2 bg-transparent border border-gray-300 rounded resize-none'
                value={nearbyServices}/>
            <span>Client`s Appointment List</span>
            <textarea
                className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
                value={appointments}/>
            <div className='flex items-center justify-center'>
                <div className='w-1/2'>
                    <textarea
                        className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
                        value={newAppointmentMock}/>
                    <div className='flex items-center justify-center'>
                        <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
                            <span>Make a New Appointment</span>
                        </Button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <textarea
                        className='w-full h-36 p-2 bg-transparent border border-gray-300 rounded resize-none'
                        value={updateAppointmentMock}/>
                    <div className='flex items-center justify-center'>
                        <Button className='flex items-center justify-center bg-amber-100 rounded' variant='default'>
                            <span>Update an Appointment</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center p-2'>
                <span className='m-2'>Appointment Id</span>
                <textarea className='w-8 h-8 bg-transparent border border-gray-300 rounded resize-none m-2' value={1}/>
                <Button className='bg-amber-100 rounded m-2' variant='default'>
                    <span>Delete an Appointment</span>
                </Button>
            </div>
        </div>
    )
}

export default PublicClientView1
