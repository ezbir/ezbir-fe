'use client';
import React, { FormEvent, useState } from "react";
import Avatar from "antd/es/avatar/avatar";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    picture: FileList;
}

interface IChangeableAvatarProps {
    link: string | null;
    size: number;
}

const defaultUrl = "/img/userIcon.svg";

const ChangeableAvatar: React.FC<IChangeableAvatarProps> = ({ link, size }) => {
    const { register, handleSubmit, setValue } = useForm<IFormInput>();
    const [imgUrl, setImgUrl] = useState<string>(link && link !== "undefined" ? link : defaultUrl);
    const [fileBlob, setFileBlob] = useState<Blob | null>(null);

    const handleFileChange = (event: FormEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (files) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setImgUrl(imageUrl);
            console.log(imageUrl)

            setFileBlob(file);
        }
    };

    const onSubmit: SubmitHandler<IFormInput> = async () => {
        if (!fileBlob) {
            console.log('не відправлено');
            return;
        }

        axios.post('http://13.60.12.224:8080/api/user/upload-picture', {
            "picture": fileBlob
        }, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem('auth_token')}`,
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                    console.log('Avatar uploaded successfully');
                } else {
                    console.error('Error uploading avatar');
                }
            })
            .catch(error => {
                console.error('Error uploading avatar', error);
            });
        axios.get(`http://13.60.12.224:8080/api/user?id=${window.sessionStorage.getItem('id')}`)
            .then(response => {
                if (response.status === 200) {
                    window.sessionStorage.setItem('photoUrl', response.data.photo_url)
                    console.log('Avatar link set successfully');
                } else {
                    console.error('Error getting user data');
                }
            })
            .catch(error => {
                console.error('Error getting user data', error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="cursor-pointer" htmlFor="input_avatar_img">
                <input type="file"
                    accept="image/*"
                    className="hidden"
                    id="input_avatar_img"
                    onInput={handleFileChange}
                    {...register("picture")}
                />
                <Avatar shape="square" size={size} icon={<img src={imgUrl} alt="avatar" />} />
            </label>
            <button type="submit">Відправити</button>
        </form>
    );
};

export default ChangeableAvatar;
