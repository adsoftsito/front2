export interface IPlace {
    id: number,
    name: string,
    description: string,
    image_url: string,
    narrative_url:string,
    latitude:number,
    longitude:number,
    place_type_id:any,
    tours: any[]
   
}