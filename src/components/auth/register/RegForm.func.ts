import axios from "axios";

export const onRegSubmit = (
    username: string,
    email: string,
    password: string,
    repeatPassword: string,
    showModal: () => void
) => {
    axios.post('http://13.60.12.224:80/api/auth/register', {
        username: username,
        email: email,
        password: password,
        repeatPassword: repeatPassword
    },{ withCredentials: true })
        .then((response) =>{
            console.log(response)
            showModal()

        })
        .catch((error) =>{
            console.log(error)
        })
}