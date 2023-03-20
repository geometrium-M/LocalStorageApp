import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';


import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  public userSubject: BehaviorSubject<IUser | null>;
  public user: Observable<IUser | null>;
  // id:any





  constructor(private router:Router) {
    console.log('user init')
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();

    // console.log('init',this.user)

   




   
  }

  ngOnInit() {
    
   
  }
public get userV(){
  return this.userSubject.asObservable()
}
  public get userValue() {
    return this.userSubject.value;
  }

  register(user:IUser) {
    if(!localStorage.hasOwnProperty('users')) {
      console.log('server')
      let users = []
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    }
    else {
      let users =  JSON.parse(localStorage.getItem('users'))
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
      
    }


    this.router.navigate([''])
    
  }

  login(userName,password) {


      let users = JSON.parse(localStorage.getItem('users'))
  

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
