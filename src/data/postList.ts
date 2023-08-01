export interface IPost {
    id: string
    description: string
    img?: string
    likes: number
    comments?: IPostComents[]
}

export interface IPostComents {
    id: string
    comment: string
    likes: number
}

export const Post: IPost[] = [
    {
        id: "1",
        description: "Meu post",
        img: "https://flowgames.gg/wp-content/uploads/2023/02/l-intro-1657287618-1044x587.jpg",
        likes: 0,
        comments: [
            {
                id: "1",
                comment: "Muito bom",
                likes: 0
            },
            {
                id: "2",
                comment: "Eu gostei muito",
                likes: 0
            },
            {
                id: "3",
                comment: "Isso foi ótimo",
                likes: 0
            }
        ]
    }
]