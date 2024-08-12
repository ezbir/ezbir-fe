import axios from "axios";

interface IUploadAvatar {
    file: File,
    link: string,
    setImgUrl: (url: string) => void,
}


export const onUploadAvatar = ({file, link, setImgUrl}: IUploadAvatar) => {
    const formData = new FormData();
    formData.append("picture", file);

    axios.post('https://ezbir.org/api/user/upload-picture', formData, {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('auth_token')}`,
            'Content-Type': 'multipart/form-data',
        }
    })
        .then(response => {
            console.log(response);
            window.sessionStorage.setItem('photo_url', response.data);
            setImgUrl(`${link}?${new Date().getTime()}`);
        })
        .catch(error => {
            console.log(error);
        });
}