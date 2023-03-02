import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';

@Pipe({
  name: 'activityFilter',
  pure: false
})
export class ActivityFilterPipe implements PipeTransform {

  transform(value: IActivity[], string: string): IActivity[] {
    console.log(value)
    console.log(string)
    return value.filter((activity)=>{
      return activity.level == string
    });
  }

}
