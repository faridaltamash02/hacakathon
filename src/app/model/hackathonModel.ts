export interface Hackathon{
    post_title: string;
    post_desc: string;
    tags: string;
    vote_count: number;
    id: string;
    voted_user: {user_id: string}[];
}
