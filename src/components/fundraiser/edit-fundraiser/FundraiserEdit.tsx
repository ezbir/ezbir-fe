import {useState} from "react";
import {Button, Drawer, DrawerProps, Space} from "antd";
import {IFundraiserForm} from "@/components/fundraiser/IFundraiser";
import FundraiserEditForm from "@/components/fundraiser/edit-fundraiser/FundraiserEditForm";
import {onEditFundraiser} from "@/components/fundraiser/edit-fundraiser/FundraiserEdit.func";



const FundraiserEdit: React.FC<IFundraiserForm> = ({amount, id, name, is_closed, categories, description, jar_link}) =>{
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data:IFundraiserForm) => {
        onEditFundraiser(data, id)
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
            >
                <FundraiserEditForm
                    submit={onSubmit}
                    amount={amount}
                    name={name}
                    jar_link={jar_link}
                    description={description}
                    is_closed={is_closed}
                    categories={categories}
                    id={id}
                    onCloseForm={onClose}
                />

            </Drawer>
        </>
    );
};

export default FundraiserEdit;
