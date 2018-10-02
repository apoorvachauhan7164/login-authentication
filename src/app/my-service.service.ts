import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';


@Injectable()
export class MyserviceService {
  // public username: string;
  // public password: string;

  constructor(
    private afAuth: AngularFireAuth
  ) {
    // this.username = '';
    // this.password = '';
  }

  // checkUsernameAndPassword(uname: string, pwd: string) {
  //   this.username = uname;
  //   this.password = pwd;
  //   if (this.username === 'admin' && this.password === 'admin123') {
  //     // localStorage.setItem('username', 'admin');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  userLogIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((userData) => resolve(userData),
          (error) => reject(error));
    });
  }

  userRegister(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => resolve(res),
      (error) => reject(error));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
    // This function is use to check the user authorization whether user is logged in or not.
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  // checkUsername - camel case
  // check_username - snake case (static fields)
  // public int static NAME_USER;
}
