import { UseFormRegister } from "react-hook-form";

export interface IInput {
    type: string,
    register: UseFormRegister<any>,
    name: string,
    label: string
}

