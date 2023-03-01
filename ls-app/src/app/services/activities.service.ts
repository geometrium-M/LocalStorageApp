import { Injectable } from '@angular/core';
import { IActivity } from '../model/activity';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private list = new BehaviorSubject<Array<IActivity>>([]);

  get activitiesList(): Observable<Array<IActivity>> { return this.list.asObservable(); }

  addActivity(activity: IActivity):void {
    this.list.next([...this.list.getValue(), activity])
    console.log(this.list)
  }


}
