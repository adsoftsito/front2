export interface IPlace {
    id: number,
    name: string,
    description: string,
    image: string,
    narrative:string,
    latitude:number,
    longitude:number,
    place_type_id:number,
    tours: any[]
   
}