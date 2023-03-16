import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  error$ = new Subject<string>()

  error(message:string) {
    this.error$.next(message)
  }
  
  clear() {
    this.error$.next('')
  }
}
