import { UseFormRegister } from "react-hook-form";

export interface ITextArea {
    register: UseFormRegister<any>,
    name: string,
    label: string
}

