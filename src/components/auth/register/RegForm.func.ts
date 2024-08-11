import axios from "axios";

export interface IRegForm {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export const onRegSubmit = (
    data:IRegForm,
    showModal: () => void
) => {
    axios.post('https://ezbir.org/api/auth/register', {
        username: data.username,
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword
    },{ withCredentials: true })
        .then((response) =>{
            console.log(response)
            showModal()

        })
        .catch((error) =>{
            console.log(error)
        })
}