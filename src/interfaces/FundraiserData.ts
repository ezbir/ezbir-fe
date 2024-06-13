export interface FundraiserData {
    categories: string[],
    description: string,
    isClosed: boolean,
    jarLink: string,
    name: string,
    posts: string[],
    amount: number,
    user_id: number,
    fundraiserId: number,
    username: string,
    views: number,
    key?: number
    isEdit?: boolean,
}