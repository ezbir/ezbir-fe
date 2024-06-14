export interface FundraiserData {
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