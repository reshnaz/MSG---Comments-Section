// These interfaces are utilized in our component file and html

export interface CommentModel {
    id: number;
    data: string;
    likes: number;
    replies: [Replies];
    showReply: boolean;
    cDate: Date;
}

export interface Replies {
    rid: number; rdata: string; likes: number; rdate: Date; showReply: boolean;
}
