import { UseFormRegister, UseFormHandleSubmit, Control, UseFormSetValue } from "react-hook-form";

export interface IFundraiserCard {
    id: number,
    categories: string[],
    description: string,
    is_closed: boolean,
    jar_link: string,
    name: string,
    posts: string[],
    amount: number,
    user_id: number,
    username: string,
    views: number,
    key?: number
    isEdit?: boolean,
}

export interface IFundraiserForm {
    amount: number,
    name: string,
    jar_link: string,
    description: string,
    is_closed?: boolean,
    categories: string[],
    id: number,
}

export interface IFundraiserFormProps {
    id?: string;
    submit: (data: IFundraiserForm) => void;
    register: UseFormRegister<IFundraiserForm>;
    handleSubmit: UseFormHandleSubmit<IFundraiserForm>;
    control: Control<IFundraiserForm>;
    values: UseFormSetValue<IFundraiserForm>;
}