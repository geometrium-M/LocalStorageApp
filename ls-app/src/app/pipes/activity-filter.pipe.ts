import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';


// function tree(items: any[], groupKey = 'group') {
//   if (!items) return [];

//   const arr:any = [];
//   const groups = {};
//   let groupIndex = 0;

//   items.forEach((item, i) => {
//     const withIndex = {
//       ...item,
//       index: i
//     };
//     const groupName = item[groupKey];
    
//     if (!groups.hasOwnProperty(groupName)) {
    
//       groups[groupName] = groupIndex++;

//       arr.push({
//         name: groupName,
//         children: [withIndex]
//       });
//     } else {
//       arr[groups[groupName]].children.push(withIndex);
//     }
//   });

//   return arr;
// }

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
