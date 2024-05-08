export interface BlogModel {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    publisher: {
        id: number;
        name: string;
        imageUrl: string;
    };
}