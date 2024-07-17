export interface IFundraiserCard {
    id: number,
    categories: string[],
    description: string,
    is_closed: boolean,
    jar_link: string,
    name: string,
    posts: string[],
    amount: number,
    user_id: number,
    username: string,
    views: number,
    key?: number
    isEdit?: boolean,
}

export interface IFundraiserEdit {
    amount: number,
    name: string,
    jar_link: string,
    description: string,
    is_closed: boolean,
    categories: string[],
    id: number,
}
export interface IFundraiserForm{
    name: string,
    amount: number,
    description: string,
    categories: string[],
    jar_link: string
}