import { IActivity } from "./activity"

export interface IPriority {
  value:string,
  id:string,
  activities: IActivity[]
}