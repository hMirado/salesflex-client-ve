import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../../../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrder() {
    return this.http.get<any>('assets/demo/data/order.json')
        .toPromise()
        .then(res => res.data as Order[])
        .then(data => data);
  }
}
