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

export const options = [
    { value: 'Medical_Supplies_Equipment', label: 'Медичне обладнання' },
    { value: 'Support_Military_Forces', label: 'Підтримка військових' },
    { value: 'Psychological_Support', label: 'Психологічна підтримка' },
    { value: 'Education_Training', label: 'Навчання' },
    { value: 'Emergency_Medical_Assistance', label: 'Невідкладна медична допомога' },
    { value: 'Child_Protection', label: 'Захист дітей' },
    { value: 'Environmental_Safety', label: 'Екологія' },
    { value: 'Cyber_Security', label: 'Кібербезпека' },
    { value: 'Infrastructure_Restoration', label: 'Інфраструктура' },
    { value: 'Housing_Conditions', label: 'Житло' },
    { value: 'Support_Vulnerable_Groups', label: 'Підтримка вразливих груп людей' },
    { value: 'OTHER', label: 'Інше' },
];

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
