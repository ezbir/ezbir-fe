import {FormEvent, useState} from "react";
import {Button, Drawer, DrawerProps, Space} from "antd";
import FundraiserForm from "@/app/profile/components/FundraiserForm";
import axios from "axios";
import FundraiserEditForm from "@/app/fundraiser/components/FundraiserEditForm";

export interface FundraiserEditData {
    amount: number,
    name: string,
    jar_link: string,
    description: string,
    is_closed: boolean,
    categories: string[],
    id?: number,
}

const FundraiserEdit: React.FC<FundraiserEditData> = ({amount, id, name, is_closed, categories, description, jar_link}) =>{
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const hundleSubmit = (e: FormEvent<HTMLFormElement>, data:FundraiserEditData) => {
        e.preventDefault()
        e.stopPropagation();
    };
    return(
        <>
            <img src="/img/redactIcon.svg"
                 alt="edit"
                 className='hover:cursor-pointer'
                 onClick={showDrawer}
            />
            <Drawer
                title="Редагування збору"
                placement='bottom'
                closable={false}
                size='large'
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <button onClick={onClose} className="border border-red-500 hover:border-red-600 text-red-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Скасувати
                        </button>
                        <button className="border border-green-500 hover:border-green-600 text-green-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type='submit' form='fundraiserForm'>
                            Зберегти
                        </button>
                    </Space>
                }
            >
                <FundraiserEditForm
                    submit={hundleSubmit}
                    amount={amount}
                    name={name}
                    jar_link={jar_link}
                    description={description}
                    is_closed={is_closed}
                    categories={categories}
                    id={id}/>

            </Drawer>
        </>
    );
};

export default FundraiserEdit;
