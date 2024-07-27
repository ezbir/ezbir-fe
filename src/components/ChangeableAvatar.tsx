'use client';
import React, { FormEvent, useState } from "react"
import Avatar from "antd/es/avatar/avatar"
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    picture: FileList;
}

const defaultUrl = "/img/userIcon.svg"

const ChangeableAvatar: React.FC = () => {
    console.log(window.sessionStorage.getItem('photoUrl'))
    const { register, handleSubmit, setValue } = useForm<IFormInput>();
    const [imgUrl, setImgUrl] = useState<string>(defaultUrl);

    const handleFileChange = async (event: FormEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files
        if (files) {
            const base64IMG = await convertToBase64(files[0])
            console.log(base64IMG)
            setImgUrl(base64IMG)
        }
    };

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        if (imgUrl === defaultUrl) {
            console.log('не відправлено')
            return;
        }

        try {
            const base64 = imgUrl
            const response = await axios.patch('http://13.60.12.224:80/api/user/update', {
                picture: base64,
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 200) {
                console.log(response);
                console.log('Avatar uploaded successfully');
            } else {
                console.error('Error uploading avatar');
            }
        } catch (error) {
            console.error('Error uploading avatar', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label className="cursor-pointer" htmlFor="input_avatar_img">
                <input type="file"
                    accept="image/*"
                    className="hidden"
                    id="input_avatar_img"
                    onInput={handleFileChange}
                    {...register("picture")}
                />
                <Avatar shape="square" size={256} icon={<img src={imgUrl} alt="avatar" />} />
            </label>
            <button type="submit">Відправити</button>
        </form>
    )
}

export default ChangeableAvatar


const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};