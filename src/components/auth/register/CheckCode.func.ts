import axios from "axios";

export const onCodeSubmit = (
    code: string,
    setRedirect: (el: boolean) => void,
    setError: (error: string) => void
) => {
    axios.post(`http://localhost:8080/api/auth/verify?token=${code}`, {

    }, { withCredentials: true })
        .then((response) => {
            console.log(response);
            if(response.status === 200){
                setRedirect(true)
            }
        })
        .catch((error) => {
            setError('Неправильний код')
            setTimeout(() => {setError('')}, 3000)
        })
}