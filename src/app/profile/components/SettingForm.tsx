import {useState} from "react";

const SettingForm: React.FC = (props) =>{
    const [infoAboutYourself, setInfoAboutYourself] = useState<string | null>(window.sessionStorage.getItem('infoAboutYourself'))

    const handleInfoAboutYourselfChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInfoAboutYourself(e.target.value)
    }

    const inputStyle:string = 'w-full border-b-2 border-black p-1 mb-3';

    return(
        <form>
            <label>
                Про себе:<br/>
                <input className={inputStyle}
                       value={infoAboutYourself ? infoAboutYourself : ''}
                       type="text"
                       onChange={handleInfoAboutYourselfChange}
                       placeholder=''/>
            </label>
            <label>
                Пошта:
                <input className={inputStyle}
                       value={infoAboutYourself ? infoAboutYourself : ''}
                       type="email"
                       onChange={handleInfoAboutYourselfChange}
                       placeholder=''/>
            </label>

        </form>
    );
};

export default SettingForm;
