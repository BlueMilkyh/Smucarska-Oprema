export interface Post {
    id: number,
    title: string,
    imageFile: File | string,
    price: number,
    previousOwners: number,
    skiLength: number,
    radius: number | string,
    rating: number,
}
