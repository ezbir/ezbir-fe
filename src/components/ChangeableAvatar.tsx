'use client';
import React, { FormEvent, MouseEvent, useState } from "react";
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
    const [isFileInput, setIsFileInput] = useState<boolean>(false);

    const handleFileChange = (event: FormEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (files) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setIsFileInput(true)
            setImgUrl(imageUrl);
            setFileBlob(file);
        }
    };

    const handleReset = (event: MouseEvent<HTMLButtonElement>) => {
        setImgUrl(link && link !== "undefined" ? link : defaultUrl)
        setFileBlob(null)
        setIsFileInput(false)
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
                console.log("http://13.60.12.224:8080/api/user/upload-picture response:", response.data)
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
                    setFileBlob(null)
                    setIsFileInput(false)
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
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
            <label className="cursor-pointer" htmlFor="input_avatar_img">
                <input type="file"
                    accept="image/*"
                    className="hidden"
                    id="input_avatar_img"
                    onInput={handleFileChange}
                    {...register("picture")}
                />
                <Avatar shape="square" size={size} icon={<img src={imgUrl} alt="avatar" />} />
                <div hidden={isFileInput} className="bg-yellow-500 text-white rounded absolute bottom-[-0.3125rem] left-[-0.3125rem] w-10 h-10 text-2xl flex justify-center items-center">
                    <img src="img/pencilIcon.svg" className="w-7 h-7" />
                </div>
            </label>


            <button onClick={handleReset} hidden={!isFileInput} className="bg-red-500 text-white rounded absolute bottom-[-0.3125rem] left-[-0.3125rem] w-10 h-10 text-2xl" type="reset">Х</button>
            <button hidden={!isFileInput} className="bg-green-500 text-white rounded absolute bottom-[-0.3125rem] right-[-0.3125rem] w-10 h-10 text-2xl" type="submit">✔</button>
        </form>
    );
};

export default ChangeableAvatar;
