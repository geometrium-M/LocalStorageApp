import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  id:any


  constructor(private router:Router) {
    console.log('user')
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();

    console.log('init',this.user)


   
  }

  ngOnInit() {
    
   
  }

  public get userValue() {
    return this.userSubject.value;
  }

  register(user:User) {
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
    localStorage.setItem('user', JSON.stringify(user))
    this.router.navigate([''])
  }

  login(userName,password) {
    let result = false
 
    
      let users = JSON.parse(localStorage.getItem('users'))
      console.log(users)
      if(!users) {return result}

      if(users) {
        let userFind = users.find(us=>{ 
          return us.userName === userName && us.password === password
        })

        if(userFind) {
          this.userSubject.next(userFind);
          localStorage.setItem('user', JSON.stringify(userFind))
         
          console.log(this.userSubject)
          result = true
          return result
        }
        if(!userFind) return result
      }
      console.log('login')


      return result
  }

}
