import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<any>('assets/demo/data/item.json')
      .toPromise()
      .then(res => res.data as Item[])
      .then(data => data);
  }
}
