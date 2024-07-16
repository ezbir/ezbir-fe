import axios from "axios";

export const onLoginSubmit = (
    email:string,
    password: string,
    setError: (error:string) => void
) => {
    axios.post('http://localhost:8080/api/auth/login', {
            email: email,
            password: password
        }, {
            withCredentials: true, /* Дозволяє передачу сесійних куки */
        }
    )
        .then((response) => {
            console.log(response.data.token)
            window.sessionStorage.setItem('auth_token', response.data.token)
            window.sessionStorage.setItem('username', response.data.username)
            window.sessionStorage.setItem('infoAboutYourself', response.data.infoAboutYourself)
            window.sessionStorage.setItem('photoUrl', response.data.photoUrl)
            window.sessionStorage.setItem('fundraiser', JSON.stringify(response.data.fundraisers))
            window.sessionStorage.setItem('userId', response.data.userId)
            window.sessionStorage.setItem('email', email)
            if (response.status === 200) {
                window.location.href = '/profile';
            }
        })
        .catch((error) => {
            console.log(error)
            if(error.response.status = 401){
                setError('Неправильний логін або пароль')
            }
        })
}