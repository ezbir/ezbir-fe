'use client';
import React, { FormEvent, useState } from "react";
import Avatar from "antd/es/avatar/avatar";
import axios from "axios";
import { useForm } from "react-hook-form";
import {onUploadAvatar} from "@/components/profile/UploadAvatar.func";

interface IFormInput {
    picture: FileList;
}

interface IUploadAvatar {
    link: string;
}

const defaultUrl = "/img/userIcon.svg";

const UploadAvatar: React.FC<IUploadAvatar> = ({ link }) => {
    const { register } = useForm<IFormInput>();
    const [imgUrl, setImgUrl] = useState<string>(link && link !== "undefined" ? `${link}?${new Date().getTime()}` : defaultUrl);

    const onFileChange = (event: FormEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (files) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setImgUrl(imageUrl);
            onUploadAvatar({file, link, setImgUrl});
        }
    };

    return (
        <form className="relative size-64">
            <label className="cursor-pointer size-64" htmlFor="input_avatar_img">
                <input type="file"
                       accept="image/*"
                       className="hidden"
                       id="input_avatar_img"
                       onInput={onFileChange}
                       {...register("picture")}
                />
                <div className="relative group">
                    <Avatar shape="square" size={256} icon={<img src={imgUrl} alt="avatar"/>}/>
                    <div
                        className="absolute rounded-md inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg">Загрузити фото</span>
                    </div>
                </div>
            </label>
        </form>
    );
};

export default UploadAvatar;
