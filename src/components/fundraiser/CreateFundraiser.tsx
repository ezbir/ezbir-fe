import {FormEvent, useState} from "react";
import {Drawer, Space} from "antd";
import {onCreateFundraiser} from "@/components/fundraiser/CreateFundraiser.func";
import {IFundraiserForm} from "@/components/fundraiser/IFundraiser";
import CreateFundraiserForm from "@/components/fundraiser/CreateFundraiserForm";

export interface formData {
    name: string,
    amount: number,
    description: string,
    categories: string[],
    jar_link: string
}

const CreateFundraiser: React.FC = (props) =>{
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data:IFundraiserForm) => {
        onCreateFundraiser(data)
    };
    return(
        <>
            <button onClick={showDrawer} className='border-2 border-black w-full h-[144px]'>
                Створити новий збір
            </button>
            <Drawer
                title="Новий Збір"
                placement='bottom'
                closable={false}
                size='large'
                onClose={onClose}
                open={open}
            >
                <CreateFundraiserForm id='createFundraiser' onCloseForm={onClose} submit={onSubmit}/>
            </Drawer>
        </>
    );
};

export default CreateFundraiser;
