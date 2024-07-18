import {useState} from "react";
import {Button, Drawer, DrawerProps, Space} from "antd";
import {IFundraiserForm} from "@/components/fundraiser/IFundraiser";
import FundraiserEditForm from "@/components/fundraiser/FundraiserEditForm";
import {onEditFundraiser} from "@/components/fundraiser/FundraiserEdit.func";



const FundraiserEdit: React.FC<IFundraiserForm> = ({amount, id, name, is_closed, categories, description, jar_link}) =>{
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data:IFundraiserForm) => {
        onEditFundraiser(data)
        console.log(data)
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
                        <button className="border border-green-500 hover:border-green-600 text-green-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type='button' form='editFundraiser' >
                            Зберегти
                        </button>
                    </Space>
                }
            >
                <FundraiserEditForm
                    submit={onSubmit}
                    amount={amount}
                    name={name}
                    jar_link={jar_link}
                    description={description}
                    is_closed={is_closed}
                    categories={categories}
                    idTest={'editFundraiser'}
                    id={id}/>

            </Drawer>
        </>
    );
};

export default FundraiserEdit;
