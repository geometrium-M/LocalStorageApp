import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';




@Pipe({
  name: 'activityFilter',
  pure: false
})
export class ActivityFilterPipe implements PipeTransform {

  transform(value: IActivity[], string: string): IActivity[] {
    return value.filter((activity)=>{
      return activity.level == string
    });

  }
  // transform(arr: any[], groupKey?: string): any {
  //   return tree(arr, groupKey);
  // }
 

}
