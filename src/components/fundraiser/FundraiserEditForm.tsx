'use client';

import React from 'react';
import { useForm } from "react-hook-form";
import { IFundraiserForm } from "@/components/fundraiser/IFundraiser";
import { options } from "@/components/fundraiser/CreateFundraiserForm";
import FundraiserForm from "@/components/fundraiser/FundraiserForm";
import {onDeleteFundraiser} from "@/components/fundraiser/FundraiserEdit.func";

interface FundraiserFormProps extends IFundraiserForm {
    submit: (data: IFundraiserForm) => void,
    onCloseForm: () => void;
}

const FundraiserEditForm: React.FC<FundraiserFormProps> = ({ id, amount, name, jar_link, description, is_closed, categories, submit, onCloseForm }) => {
    const { register, handleSubmit, control, setValue } = useForm<IFundraiserForm>({
        defaultValues: {
            amount,
            name,
            jar_link,
            description,
            is_closed,
            categories,
        }
    });

    const onSubmit = (data: IFundraiserForm) => {
        submit(data);
    };

    const handleClosedFundraiser = () => {
        setValue('is_closed', !is_closed);
    };
    const onClose = () =>{
        onCloseForm()
    }

    const onDelete = () => {
        onDeleteFundraiser(id)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FundraiserForm
                initialValues={{ amount, name, jar_link, description, is_closed, categories }}
                submit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                control={control}
                values={setValue}
                onCloseForm={onClose}
            />
            <button type="button" onClick={handleClosedFundraiser} className={`p-3 rounded ${is_closed ? 'text-red-400 border-red-400 border-2' : 'text-green-300 border-green-300 border-2'}`}>
                {is_closed ? 'Відкрити збір' : 'Закрити збір'}
            </button>
            <button type="button" onClick={onDelete} className='text-red-400 border-red-400 border-2 p-3 rounded'>
                Видалити збір
            </button>
        </form>
    );
};

export default FundraiserEditForm;
