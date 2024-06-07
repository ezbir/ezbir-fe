    'use client'

    import {FormEvent, useState} from "react";
    import Select, {StylesConfig} from 'react-select';
    import CreditCardForm from "@/app/profile/components/CreditCardForm";


    type FundraiserFormProps = {
        id: string,
        submit: (e: FormEvent<HTMLFormElement>, data:any) => void,
    }
    type FundraiserFormData = {
        name: string,
        jarLink: string,
        suma: number,
        description: string,
        categories: any[],
        cards: string[]
    }

    const options = [
        {value: 'Medical_Supplies_Equipment', label: 'Медичне обладнання'},
        {value: 'Support_Military_Forces', label: 'Підтримка військових'},
        {value: 'Psychological_Support', label: 'Психологічна підтримка'},
        {value: 'Education_Training', label: 'Навчання'},
        {value: 'Emergency_Medical_Assistance', label: 'Невідкладна медична допомога'},
        {value: 'Child_Protection', label: 'Захист дітей'},
        {value: 'Environmental_Safety', label: 'Екологія'},
        {value: 'Cyber_Security', label: 'Кібербезпека'},
        {value: 'Infrastructure_Restoration', label: 'Інфраструктура'},
        {value: 'Housing_Conditions', label: 'Житло'},
        {value: 'Support_Vulnerable_Groups', label: 'Підтримка вразливих груп людей'},
        {value: 'OTHER', label: 'Інше'},

    ];

    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderBottom: '2px solid black',
            borderRadius: '0px',
            padding: '1px',
            marginBottom: '9px',
            outline: 'none',
            "&:hover": {
                outline: 'none',
            }
        }),
    };
    const FundraiserForm: React.FC<FundraiserFormProps> = ({id, submit}) => {
        const [formData, setFormData] = useState<FundraiserFormData>({
            name: '',
            jarLink: '',
            suma: NaN,
            description: '',
            categories: [],
            cards: [],
        });


        let inputStyle: string = 'w-full border-b-2 border-black p-1 mb-3 pl-3'
        const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(prevState => ({
                ...prevState,
                name: e.target.value
            }));
        };

        const handleJarLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(prevState => ({
                ...prevState,
                jarLink: e.target.value
            }));
        };

        const handleSumaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(prevState => ({
                ...prevState,
                suma: parseFloat(e.target.value)
            }));
        };

        const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(prevState => ({
                ...prevState,
                description: e.target.value
            }));
        };
        const handleCreditCardData = (cardData: string[]) => {
            const creditCards = cardData.map(cardNumber => ({ cardNumber }));
            setFormData(prevState => ({
                ...prevState,
                cards: cardData
            }));
        };
        const handleCategoriesChange = (selectedOptions: any) => {
            setFormData(prevState => ({
                ...prevState,
                categories: selectedOptions ? selectedOptions.map((option: any) => option.value) : []
            }));
        };
        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            submit(e, formData);
        };

        const handleChange = (e: any) => {
            console.log(e);
        };


        return (
            <form id={id} onSubmit={handleSubmit}>
                <label>
                    Назва Збору:
                    <input className={inputStyle}
                           type="text"
                           placeholder='Для 3-ої штурмової бригади'
                           value={formData.name}
                           onChange={handleNameChange}
                    />
                </label>

                <label>
                    Посилання на банку:
                    <input className={inputStyle}
                           type="text"
                           placeholder='monobank.com/testlink'
                           value={formData.jarLink}
                           onChange={handleJarLinkChange}
                    />
                </label>

                <label>
                    Сума:
                    <input className={inputStyle}
                           type="number"
                           placeholder='450 000'
                           value={formData.suma}
                           onChange={handleSumaChange}
                    />
                </label>

                <label>
                    Опис:
                    <input className={inputStyle}
                           type="text"
                           placeholder='На закупівлю дронів та медикаментів для військових'
                           value={formData.description}
                           onChange={handleDescriptionChange}
                    />
                </label>

                <label>
                    Категорії:
                    <Select
                        options={options}
                        isMulti
                        onChange={handleCategoriesChange}
                        styles={customStyles}
                        placeholder="Оберіть одну або декілька категорій"
                    />
                </label>

                <CreditCardForm updateData={handleCreditCardData}/>
            </form>
        );
    };

    export default FundraiserForm;
