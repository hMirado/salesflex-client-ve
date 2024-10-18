import {Customer} from "./customer";

export interface Order {
    id: number;
    orderDate: Date;
    orderRef: string;
    orderTotalPrice: number;
    status: OrderStatus;
    item: OrderItem[];
    customer: String;
    shipper: String;
}

export interface OrderStatus {
    id: number;
    statusKey: string;
    statusName: string
}

export interface OrderItem {
    id: number;
    itemName: string;
    quantity: number;
}