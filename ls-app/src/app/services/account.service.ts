import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';


import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public userSubject: BehaviorSubject<IUser | null>;

  constructor(private router:Router) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
  }

  ngOnInit() {}

  public get userV(){
    return this.userSubject.asObservable()
  }

  register(user:IUser) {
    if(!localStorage.hasOwnProperty('users')) {
      let users = []
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    }
    else {
      let users =  JSON.parse(localStorage.getItem('users'))
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    }
    
  }

  login(userName:string,password:string) {

      let users = JSON.parse(localStorage.getItem('users'))

      if(!users) return false 
  

      if(users) {
        let userFind = users.find(us=>{ 
          return us.userName === userName && us.password === password
        })

        if(userFind) {
          this.userSubject.next(userFind);
          localStorage.setItem('user', JSON.stringify(userFind))
        }

        if(!userFind) return false
      }
      console.log('login')

      return true


   
  }

}
