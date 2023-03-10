import { IActivity } from "./activity"

export interface IPriority {
  value:string,
  id:number,
  activities: IActivity[]
}