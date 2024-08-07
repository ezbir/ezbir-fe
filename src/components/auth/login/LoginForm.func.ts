import axios from "axios";

export interface ILoginForm {
    email: string;
    password: string;
}

export const onLoginSubmit = (
    data: ILoginForm
) => {
    axios.post('http://13.60.12.224:8080/api/auth/login', {
        email: data.email,
        password: data.password
    }, {
        withCredentials: true,
    }
    )
        .then((response) => {
            console.log(response)
            window.sessionStorage.setItem('auth_token', response.data.token)
            window.sessionStorage.setItem('username', response.data.username)
            window.sessionStorage.setItem('infoAboutYourself', response.data.infoAboutYourself)
            window.sessionStorage.setItem('photo_url', response.data.photo_url)
            window.sessionStorage.setItem('fundraiser', JSON.stringify(response.data.fundraisers))
            window.sessionStorage.setItem('id', response.data.id)
            window.sessionStorage.setItem('email', data.email)
            if (response.status === 200) {
                window.location.href = '/profile';
            }
        })
        .catch((error) => {
            console.log(error)
        })
}