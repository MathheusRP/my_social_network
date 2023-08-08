export interface IPost {
    id: string
    owner: IPostOwner
    date: string
    description: string
    img?: string
    likes: number
    comments?: IPostComents[]
}

export interface IPostOwner {
    id: string
    name: string
    image: string
}

export interface IPostComents {
    id: string
    name: string
    image: string
    comment: string
    likes: number
}