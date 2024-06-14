import Link from "next/link";
import {FundraiserData} from "@/interfaces/FundraiserData";
import FundraiserEdit from "@/components/FundraiserEdit";

export enum FundraiserCategory {
    Medical_Supplies_Equipment = 'Медичне обладнання',
    Support_Military_Forces = 'Підтримка військових',
    Psychological_Support = 'Психологічна підтримка',
    Education_Training = 'Навчання',
    Emergency_Medical_Assistance = 'Невідкладна медична допомога',
    Child_Protection = 'Захист дітей',
    Environmental_Safety = 'Екологія',
    Cyber_Security = 'Кібербезпека',
    Infrastructure_Restoration = 'Інфраструктура',
    Housing_Conditions = 'Житло',
    Support_Vulnerable_Groups = 'Підтримка вразливих груп людей',
    OTHER = 'Інше'
}


const FundraiserCard: React.FC<FundraiserData> = (
    {
        id,
        categories,
        description,
        is_closed,
        jar_link,
        name,
        posts,
        amount,
        user_id,
        username,
        views,
        key,
        isEdit
    }) =>{
    const truncatedDescription:string = description.length > 250
        ? description.substring(0, 200) + "..."
        : description;


    return (
        <li className='bg-gray-200 w-full h-[220px] mt-3 mb-3 p-4 rounded'
            key={key}>
            <section className='flex flex-col h-full'>
                <section className='flex h-[90%]'>
                    <section className='flex flex-col w-3/4'>
                        <Link href={`/fundraiser/${id}`}><h2
                            className='hover:text-[#7c7bff] hover:transition transition'>{name}</h2></Link>
                        <p>Користувач: <Link href={`/user/${user_id}`}><strong>{username}</strong></Link></p>
                        <p className='w-[700px] break-words'>
                            Опис: <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{truncatedDescription}
                        </p>
                    </section>
                    <section className='w-1/4 flex flex-col justify-center items-center'>
                        <h3>{amount}₴</h3>
                        <h4>{is_closed ? <p className='text-red-400'>Збір закритий</p> :
                            <p className='text-green-500'>Збір відкритий</p>}</h4>
                    </section>
                    {
                        isEdit ?
                            <section>
                                <FundraiserEdit
                                    amount={amount}
                                    name={name}
                                    jar_link={jar_link}
                                    description={description}
                                    is_closed={is_closed}
                                    categories={categories}
                                    id={id}/>

                            </section>
                            : ''
                    }

                </section>


                <section className='flex justify-center'>
                    {categories.slice(0, 3).map((category, index) => (
                        <p key={index} className="ml-2 mr-2">
                            #{FundraiserCategory[category as keyof typeof FundraiserCategory]}
                        </p>
                    ))}
                </section>
            </section>

        </li>
    );
};

export default FundraiserCard;
