import CustomCard from "@/components/common/custom-card";

interface EmployeeProps {
    id: number;
    nick_name: string;
    first_name: string;
    last_name: string;
    e_mail: string;
    phone: string;
}

interface EmployeeCardProps{
    data: EmployeeProps[]
}

const EmployeeCard = (props: EmployeeCardProps) => {
    return(
        <CustomCard title=''>
            {props.data.map((prop) => (
                <div key={prop.id} className='mb-4'>
                    <p>{prop.nick_name}</p>
                    <p>{prop.first_name}</p>
                    <p>{prop.last_name}</p>
                    <p>{prop.e_mail}</p>
                    <p>{prop.phone}</p>
                </div>
            ))}
        </CustomCard>
    );
}

export default EmployeeCard;
