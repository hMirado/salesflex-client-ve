import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  private file$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setFile(file: string) {
    this.file$.next(file)
  }

  getFile(): BehaviorSubject<string> {
    return this.file$;
  }
}
