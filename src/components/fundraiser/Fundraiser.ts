import axios from "axios";
import {IFundraiserCard} from "@/components/fundraiser/IFundraiser";

export enum FundraiserCategory {
    Medical_Supplies_Equipment = 'Медичне обладнання',
    Support_Military_Forces = 'Підтримка військових',
    Psychological_Support = 'Психологічна підтримка',
    Education_Training = 'Навчання',
    Emergency_Medical_Assistance = 'Невідкладна медична допомога',
    Child_Protection = 'Захист дітей',
    Environmental_Safety = 'Екологія',
    Cyber_Security = 'Кібербезпека',
    Infrastructure_Restoration = 'Інфраструктура',
    Housing_Conditions = 'Житло',
    Support_Vulnerable_Groups = 'Підтримка вразливих груп людей',
    OTHER = 'Інше'
}

export const FundraiserOptions = [
    { value: 'Medical_Supplies_Equipment', label: 'Медичне обладнання' },
    { value: 'Support_Military_Forces', label: 'Підтримка військових' },
    { value: 'Psychological_Support', label: 'Психологічна підтримка' },
    { value: 'Education_Training', label: 'Навчання' },
    { value: 'Emergency_Medical_Assistance', label: 'Невідкладна медична допомога' },
    { value: 'Child_Protection', label: 'Захист дітей' },
    { value: 'Environmental_Safety', label: 'Екологія' },
    { value: 'Cyber_Security', label: 'Кібербезпека' },
    { value: 'Infrastructure_Restoration', label: 'Інфраструктура' },
    { value: 'Housing_Conditions', label: 'Житло' },
    { value: 'Support_Vulnerable_Groups', label: 'Підтримка вразливих груп людей' },
    { value: 'OTHER', label: 'Інше' },
];

export const getAllFundraiser = async () => {
    try {
        const response = await axios.get<IFundraiserCard[]>('https://ezbir.org/api/fundraisers/search');
        console.log(response)
        return response.data.map(el => ({
            categories: el.categories,
            description: el.description,
            is_closed: el.is_closed,
            jar_link: el.jar_link,
            name: el.name,
            posts: el.posts,
            amount: el.amount,
            user_id: el.user_id,
            id: el.id,
            username: el.username,
            views: el.views,
        }));
    } catch (error) {
        console.log(error)
    }
}