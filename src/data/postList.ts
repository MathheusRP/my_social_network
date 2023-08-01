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
    comment: string
    likes: number
}

export const Post: IPost[] = [
    {
        id: "1",
        owner:{
            name: "Larissa Souza",
            image: "https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg",
            id: "10"
        },
        date: "20 de Junho as 13:35",
        description: "Gosto muito desta foto 😀",
        img: "https://fusne.com/wp-content/uploads/2023/06/lofi-girl-fusne.jpg",
        likes: 23,
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
    },
    {
        id: "2",
        owner:{
            name: "Larissa Souza",
            image: "https://lh3.googleusercontent.com/-kSnNyDkgd2E/AAAAAAAAAAI/AAAAAAAABcM/DimvpU0bUPY/photo.jpg",
            id: "10"
        },
        date: "20 de Junho as 13:30",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // img: "https://fusne.com/wp-content/uploads/2023/06/lofi-girl-fusne.jpg",
        likes: 30,
        comments: []
    },
    {
        id: "3",
        owner:{
            name: "Matheus Rocha",
            image: "https://flowgames.gg/wp-content/uploads/2023/02/l-intro-1657287618-1044x587.jpg",
            id: "12"
        },
        date: "20 de Junho as 13:31",
        description: "",
        img: "https://www.petz.com.br/blog/wp-content/uploads/2021/03/como-tirar-foto-de-gato-2.jpg",
        likes: 5,
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
            }
        ]
    },
    {
        id: "4",
        owner:{
            name: "Matheus Rocha",
            image: "https://flowgames.gg/wp-content/uploads/2023/02/l-intro-1657287618-1044x587.jpg",
            id: "12"
        },
        date: "20 de Junho as 13:31",
        description: "Lo Fi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDXaGmibPVO_WAKYCHfHS8XWbMXt1sx3g4yr_N95mj_QkpPoFAqS2geCpbtyYOTR77nw&usqp=CAU",
        likes: 7,
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
            }
        ]
    },
   
]