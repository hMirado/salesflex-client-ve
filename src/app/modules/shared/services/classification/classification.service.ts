import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classification} from "../../models/classification";

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  constructor(private http: HttpClient) { }

  getClassifications() {
    return this.http.get<any>('assets/demo/data/classification.json')
      .toPromise()
      .then(res => res.data as Classification[])
      .then(data => data);
  }
}
