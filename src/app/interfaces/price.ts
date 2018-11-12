export interface IPrice {
    id: number,
    priceAmount: number,
    tour_id: number, //maybe an object of tour
    ticket_type_id: number, //maybe an object of ticket type
}