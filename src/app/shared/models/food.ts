export class Foods {
    id!: number;
    price!: number;
    name!: string;
    favorite: boolean = false;
    // stars: number = 0;
    imageUrl!: string;
    makingTime!: string;
    tags?: string[];
}