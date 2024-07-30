'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { IFundraiserForm } from "@/components/fundraiser/IFundraiser";
import FundraiserForm from "@/components/fundraiser/FundraiserForm";

interface FundraiserFormProps {
    id: string,
    submit: (data: IFundraiserForm) => void,
    onCloseForm: () => void;
}

const CreateFundraiserForm: React.FC<FundraiserFormProps> = ({ id, submit, onCloseForm }) => {
    const { register, handleSubmit, control, getValues } = useForm<IFundraiserForm>({
        defaultValues: {
            categories: []
        }
    });

    const onSubmit = (data: IFundraiserForm) => {
        submit(data);
    };

    const onClose = () =>{
        onCloseForm()
    }

    return (
        <>
            <FundraiserForm
                initialValues={null}
                submit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                control={control}
                values={getValues}
                onCloseForm={onClose}
            />
        </>
    );
};

export default CreateFundraiserForm;
