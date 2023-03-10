import { IPriority } from "../model/priority";
import { IActivity } from "../model/activity";
export const priorities: IPriority[] = [
  {
    value:'low',
    id:0,
    activities:[]
  },
  {
    value:'medium',
    id:1,
    activities:[]
  },
  {
    value:'high',
    id:2,
    activities:[]
  }
  // {
  //   value: 'low',
  //   id:0,
  //   activities:[  {
  //     description: '111',
  //     level: 0,
  //     checked:true
  //   },  {
  //     description: '111',
  //     level: 0,
  //     checked:true
  //   },  {
  //     description: '111',
  //     level: 0,
  //     checked:true
  //   },]
  // },
  // {
  //   value:'medium',
  //   id:1,
  //   activities:[
  //     {
  //       description: '111',
  //       level: 1,
  //       checked:true
  //     },  {
  //       description: '111',
  //       level: 1,
  //       checked:true
  //     },  {
  //       description: '111',
  //       level: 1,
  //       checked:true
  //     },
  //   ]
  // },
  // {
  //   value: 'high',
  //   id:2,
  //   activities:[
  //     {
  //       description: '111000',
  //       level: 2,
  //       checked:true
  //     },  {
  //       description: '1110',
  //       level: 2,
  //       checked:true
  //     },  {
  //       description: '111',
  //       level: 2,
  //       checked:true
  //     },
  //   ]
  // }
]