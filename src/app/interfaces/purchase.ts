import { IUser } from './user';

export interface IPurchase {
    id: number;
    sub_total: number;
    total: number;
    user_id: any;
    company_id: any;
    tickets: IUser[];
}
