import Link from "next/link";
import { IFundraiserCard } from "@/components/fundraiser/IFundraiser";
import { FundraiserCategory } from "@/components/fundraiser/FundraiserCategoryEnum";
import FundraiserEdit from "@/components/fundraiser/FundraiserEdit";

const FundraiserCard: React.FC<IFundraiserCard> = ({
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
                                                   }) => {
    const truncatedDescription: string = description.length > 250
        ? description.substring(0, 200) + "..."
        : description;

    return (
        <li className='bg-gray-200 w-full h-auto mt-3 mb-3 p-4 rounded md:h-auto md:flex md:flex-col md:gap-4'>
            <section className='flex flex-col md:flex-row md:gap-4 h-full'>
                <section className='flex flex-col md:w-3/4'>
                    <Link href={`/fundraiser/${id}`}>
                        <h2 className='hover:text-[#7c7bff] hover:transition transition text-center hidden md:text-left md:block '>{name}</h2>
                        <h4 className='hover:text-[#7c7bff] hover:transition transition text-center md:hidden '>{name}</h4>
                    </Link>
                    <p className='hidden md:block md:text-base'>
                        Користувач: <Link href={`/user/${user_id}`}><strong>{username}</strong></Link>
                    </p>
                    <p className='w-full hidden md:text-base md:block'>
                        Опис: <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{truncatedDescription}
                    </p>
                </section>
                <section className='w-full md:w-1/4 flex flex-col justify-center items-center text-center md:text-left'>
                    <h3 className=''>{amount}₴</h3>
                    <h4 className='text-sm md:text-base'>
                        {is_closed
                            ? <p className='text-red-400'>Збір закритий</p>
                            : <p className='text-green-500'>Збір відкритий</p>}
                    </h4>
                </section>
                {isEdit &&
                    <section className='mt-4 md:mt-0'>
                        <FundraiserEdit
                            amount={amount}
                            name={name}
                            jar_link={jar_link}
                            description={description}
                            is_closed={is_closed}
                            categories={categories}
                            id={id} />
                    </section>
                }
            </section>

            <section className='flex flex-wrap justify-center md:justify-start mt-2'>
                {categories.slice(0, 3).map((category, index) => (
                    <p key={index} className="ml-2 mr-2 text-sm md:text-base">
                        #{FundraiserCategory[category as keyof typeof FundraiserCategory]}
                    </p>
                ))}
            </section>
        </li>
    );
};

export default FundraiserCard;
